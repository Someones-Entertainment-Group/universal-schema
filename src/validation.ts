import { z, ZodType, ZodError } from 'zod';

/**
 * Validation utility for parsing and validating data against Zod schemas
 */
export class ValidationUtil {
  /**
   * Parse and validate data against a schema
   * @param schema - Zod schema to validate against
   * @param data - Data to validate
   * @returns Parsed and validated data
   * @throws ValidationError if data is invalid
   */
  static parse<T>(schema: ZodType<T>, data: unknown): T {
    try {
      return schema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ValidationError(
          'Validation failed',
          error.issues,
          error
        );
      }
      throw error;
    }
  }

  /**
   * Safely parse data against a schema, returning success/error result
   * @param schema - Zod schema to validate against
   * @param data - Data to validate
   * @returns SafeParseReturn with success flag and data or error
   */
  static safeParse<T>(schema: ZodType<T>, data: unknown): SafeParseReturn<T> {
    const result = schema.safeParse(data);
    
    if (result.success) {
      return {
        success: true,
        data: result.data,
        error: null
      };
    }

    return {
      success: false,
      data: null,
      error: new ValidationError(
        'Validation failed',
        result.error.issues,
        result.error
      )
    };
  }

  /**
   * Validate if data matches a schema without parsing
   * @param schema - Zod schema to validate against
   * @param data - Data to validate
   * @returns Boolean indicating if data is valid
   */
  static isValid<T>(schema: ZodType<T>, data: unknown): boolean {
    return schema.safeParse(data).success;
  }

  /**
   * Get validation errors for data against a schema
   * @param schema - Zod schema to validate against
   * @param data - Data to validate
   * @returns Array of validation errors or null if valid
   */
  static getErrors<T>(schema: ZodType<T>, data: unknown): ValidationIssue[] | null {
    const result = schema.safeParse(data);
    return result.success ? null : result.error.issues;
  }

  /**
   * Validate partial data against a schema (useful for form validation)
   * @param schema - Zod schema to validate against
   * @param data - Partial data to validate
   * @returns SafeParseReturn with success flag and data or error
   */
  static validatePartial<T extends Record<string, any>>(schema: z.ZodObject<any>, data: unknown): SafeParseReturn<Partial<T>> {
    const partialSchema = schema.partial();
    const result = partialSchema.safeParse(data);
    
    if (result.success) {
      return {
        success: true,
        data: result.data as Partial<T>,
        error: null
      };
    }

    return {
      success: false,
      data: null,
      error: new ValidationError(
        'Validation failed',
        result.error.issues,
        result.error
      )
    };
  }
}

/**
 * Custom validation error class
 */
export class ValidationError extends Error {
  public readonly issues: ValidationIssue[];
  public readonly originalError: ZodError;

  constructor(message: string, issues: ValidationIssue[], originalError: ZodError) {
    super(message);
    this.name = 'ValidationError';
    this.issues = issues;
    this.originalError = originalError;
  }

  /**
   * Get a formatted error message with all validation issues
   */
  getFormattedMessage(): string {
    const issueMessages = this.issues.map(issue => {
      const path = issue.path.length > 0 ? `${issue.path.join('.')}: ` : '';
      return `${path}${issue.message}`;
    });

    return `${this.message}\n${issueMessages.join('\n')}`;
  }

  /**
   * Get errors grouped by field path
   */
  getErrorsByField(): Record<string, string[]> {
    const errorsByField: Record<string, string[]> = {};

    this.issues.forEach(issue => {
      const fieldPath = issue.path.join('.') || 'root';
      if (!errorsByField[fieldPath]) {
        errorsByField[fieldPath] = [];
      }
      errorsByField[fieldPath].push(issue.message);
    });

    return errorsByField;
  }
}

/**
 * Types for validation results
 */
export type ValidationIssue = z.ZodIssue;

export type SafeParseReturn<T> = {
  success: true;
  data: T;
  error: null;
} | {
  success: false;
  data: null;
  error: ValidationError;
};

/**
 * Validation decorator for class methods
 */
export function validate<T>(schema: ZodType<T>) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // Validate the first argument against the schema
      if (args.length > 0) {
        try {
          args[0] = ValidationUtil.parse(schema, args[0]);
        } catch (error) {
          throw error;
        }
      }
      return method.apply(this, args);
    };
  };
}

/**
 * Helper function to create validation utility for specific schema
 */
export function createValidator<T>(schema: ZodType<T>) {
  return {
    parse: (data: unknown) => ValidationUtil.parse(schema, data),
    safeParse: (data: unknown) => ValidationUtil.safeParse(schema, data),
    isValid: (data: unknown) => ValidationUtil.isValid(schema, data),
    getErrors: (data: unknown) => ValidationUtil.getErrors(schema, data),
    validatePartial: (data: unknown) => schema instanceof z.ZodObject ? ValidationUtil.validatePartial(schema as any, data) : null,
    schema
  };
}
