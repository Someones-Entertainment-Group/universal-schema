import { 
  ValidationUtil, 
  createValidator,
  MediaSchema,
  SomeonesPlanUserSchema,
  SomeonesPlanEventSchema,
  ApiResponseSchema,
  PaginatedDataSchema,
  type Media,
  type SomeonesPlanUser,
  type SomeonesPlanEvent
} from './index';

/**
 * Example usage of the validation utilities
 */

// Example 1: Basic validation using ValidationUtil
function validateMediaData(data: unknown): Media {
  try {
    return ValidationUtil.parse(MediaSchema, data);
  } catch (error) {
    console.error('Media validation failed:', error);
    throw error;
  }
}

// Example 2: Safe validation with error handling
function safeValidateUser(data: unknown) {
  const result = ValidationUtil.safeParse(SomeonesPlanUserSchema, data);
  
  if (result.success) {
    console.log('Valid user:', result.data);
    return result.data;
  } else {
    console.error('User validation failed:', result.error.getFormattedMessage());
    return null;
  }
}

// Example 3: Using createValidator for specific schema
const userValidator = createValidator(SomeonesPlanUserSchema);

function validateUserWithCustomValidator(data: unknown) {
  if (userValidator.isValid(data)) {
    return userValidator.parse(data);
  } else {
    const errors = userValidator.getErrors(data);
    console.error('Validation errors:', errors);
    return null;
  }
}

// Example 4: Validating API responses
const userApiResponseValidator = createValidator(
  ApiResponseSchema(SomeonesPlanUserSchema)
);

function validateUserApiResponse(data: unknown) {
  return userApiResponseValidator.safeParse(data);
}

// Example 5: Validating paginated data
const paginatedUsersValidator = createValidator(
  PaginatedDataSchema(SomeonesPlanUserSchema)
);

function validatePaginatedUsers(data: unknown) {
  const result = paginatedUsersValidator.safeParse(data);
  
  if (result.success) {
    console.log(`Validated ${result.data.items.length} users`);
    console.log(`Page ${result.data.meta.currentPage} of ${result.data.meta.totalPages}`);
    return result.data;
  } else {
    throw result.error;
  }
}

// Example 6: Partial validation for form data
function validatePartialUserForm(formData: unknown) {
  if (SomeonesPlanUserSchema instanceof Object && 'partial' in SomeonesPlanUserSchema) {
    // TypeScript doesn't know about the partial method on z.ZodObject
    // In real usage, you'd cast or handle this differently
    const result = ValidationUtil.validatePartial(SomeonesPlanUserSchema as any, formData);
    
    if (result.success) {
      console.log('Valid partial user data:', result.data);
      return result.data;
    } else {
      console.error('Form validation errors:', result.error.getErrorsByField());
      return null;
    }
  }
  return null;
}

// Example 7: Custom validation with error handling
async function processUserData(rawData: unknown) {
  try {
    // Validate the raw data
    const user = ValidationUtil.parse(SomeonesPlanUserSchema, rawData);
    
    console.log(`Processing user: ${user.firstname} ${user.lastname}`);
    
    // Process the validated data
    return {
      success: true,
      user,
      message: 'User processed successfully'
    };
    
  } catch (error) {
    if (error instanceof ValidationUtil.constructor) {
      // Handle validation errors specifically
      return {
        success: false,
        error: 'Invalid user data',
        details: (error as any).getFormattedMessage()
      };
    }
    
    // Handle other errors
    return {
      success: false,
      error: 'Processing failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Example 8: Bulk validation
function validateMultipleUsers(usersData: unknown[]): SomeonesPlanUser[] {
  const validUsers: SomeonesPlanUser[] = [];
  const errors: Array<{ index: number; error: string }> = [];
  
  usersData.forEach((userData, index) => {
    const result = ValidationUtil.safeParse(SomeonesPlanUserSchema, userData);
    
    if (result.success) {
      validUsers.push(result.data);
    } else {
      errors.push({
        index,
        error: result.error.getFormattedMessage()
      });
    }
  });
  
  if (errors.length > 0) {
    console.warn(`${errors.length} users failed validation:`, errors);
  }
  
  console.log(`Successfully validated ${validUsers.length} users`);
  return validUsers;
}

// Example usage functions
export {
  validateMediaData,
  safeValidateUser,
  validateUserWithCustomValidator,
  validateUserApiResponse,
  validatePaginatedUsers,
  validatePartialUserForm,
  processUserData,
  validateMultipleUsers,
  userValidator,
  userApiResponseValidator,
  paginatedUsersValidator
};
