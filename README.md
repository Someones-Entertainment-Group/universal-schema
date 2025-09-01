# @someones/schema

Common types and Zod schemas for Someones projects with comprehensive validation utilities.

## 🚀 Features

- **Type-safe**: Full TypeScript support with inferred types from Zod schemas
- **Runtime validation**: Comprehensive data validation using Zod
- **Validation utilities**: Built-in utilities for parsing, validation, and error handling
- **Forward compatibility**: Easy migration from TypeScript types to Zod schemas
- **Comprehensive schemas**: All entity types converted to Zod schemas

## 📦 Installation

```bash
npm install @someones/schema
```

## 🏗️ Architecture

This package provides:

1. **Zod Schemas**: Runtime-validated schemas for all entities
2. **TypeScript Types**: Inferred types from Zod schemas
3. **Validation Utilities**: Helper functions for data validation
4. **Error Handling**: Comprehensive error reporting and handling

## 📚 Usage

### Basic Import

```typescript
import { 
  // Schemas
  MediaSchema,
  SomeonesPlanUserSchema,
  SomeonesPlanEventSchema,
  
  // Types (inferred from schemas)
  Media,
  SomeonesPlanUser,
  SomeonesPlanEvent,
  
  // Validation utilities
  ValidationUtil,
  createValidator
} from '@someones/schema';
```

### 1. Basic Validation

```typescript
import { ValidationUtil, MediaSchema, type Media } from '@someones/schema';

// Parse and validate data (throws on error)
function validateMedia(data: unknown): Media {
  return ValidationUtil.parse(MediaSchema, data);
}

// Safe validation (returns result object)
function safeValidateMedia(data: unknown) {
  const result = ValidationUtil.safeParse(MediaSchema, data);
  
  if (result.success) {
    console.log('Valid media:', result.data);
    return result.data;
  } else {
    console.error('Validation failed:', result.error.getFormattedMessage());
    return null;
  }
}
```

### 2. Using Validation Utilities

```typescript
import { createValidator, SomeonesPlanUserSchema } from '@someones/schema';

// Create a validator for a specific schema
const userValidator = createValidator(SomeonesPlanUserSchema);

// Check if data is valid
if (userValidator.isValid(userData)) {
  const user = userValidator.parse(userData);
  console.log('Valid user:', user);
}

// Get validation errors
const errors = userValidator.getErrors(userData);
if (errors) {
  console.error('Validation errors:', errors);
}
```

### 3. API Response Validation

```typescript
import { ApiResponseSchema, SomeonesPlanUserSchema } from '@someones/schema';

// Create schema for API response containing user data
const userApiResponseSchema = ApiResponseSchema(SomeonesPlanUserSchema);

// Validate API response
function validateUserApiResponse(response: unknown) {
  return ValidationUtil.parse(userApiResponseSchema, response);
}
```

## 📋 Available Schemas

### Core Entities

- `MediaSchema` - Media files and assets
- `FileManageItemSchema` - File management items

### User Schemas

- `SomeonesPlanUserSchema` - Base user schema
- `SomeonesPlanUserReviewSchema` - User reviews
- `SomeonesPlanPerformerExtraSchema` - Performer-specific data
- `SomeonesPlanVenderExtraSchema` - Vendor-specific data
- `SomeonesPlanInfluencerExtraSchema` - Influencer-specific data
- `SomeonesPlanVenueProviderExtraSchema` - Venue provider data
- `SomeonesPlanPlannerProExtraSchema` - Planner pro data
- `SomeonesPlanPartySeekerExtraSchema` - Party seeker data

### Event Schemas

- `SomeonesPlanEventSchema` - Event data
- `SomeonesPlanTicketSchema` - Event tickets
- `SomeonesPlanEventRegistrationSubTypeSchema` - Event registration subtypes

### Business Schemas

- `SomeonesPlanBidSchema` - Bidding data
- `SomeonesPlanCartItemsSchema` - Shopping cart items
- `SomeonesCompanySchema` - Company information

### Utility Schemas

- `ApiResponseSchema<T>` - Generic API response wrapper
- `PaginatedDataSchema<T>` - Generic pagination wrapper
- `LocationSchema` - Geographic location data
- `ISelectMenuListSchema` - Select menu options

## 🛠️ Validation Utilities

### ValidationUtil Class

Static methods for validation:

- `parse<T>(schema, data)` - Parse and validate (throws on error)
- `safeParse<T>(schema, data)` - Safe parse (returns result object)
- `isValid<T>(schema, data)` - Check if data is valid
- `getErrors<T>(schema, data)` - Get validation errors
- `validatePartial<T>(schema, data)` - Validate partial data

### createValidator Function

Creates a validator instance for a specific schema:

```typescript
const validator = createValidator(SomeonesPlanUserSchema);

validator.parse(data);        // Parse data
validator.safeParse(data);    // Safe parse
validator.isValid(data);      // Check validity
validator.getErrors(data);    // Get errors
validator.schema;             // Access underlying schema
```

## 🎯 Best Practices

1. **Use Safe Parsing**: Prefer `safeParse` over `parse` for user input validation
2. **Handle Partial Data**: Use `validatePartial` for form validation
3. **Create Validators**: Use `createValidator` for frequently used schemas
4. **Error Display**: Use `getErrorsByField()` for user-friendly error messages
5. **Type Safety**: Always use the inferred types from schemas

## 🔄 Migration from TypeScript Types

The package maintains backward compatibility by exporting both Zod schemas and TypeScript types:

```typescript
// Old way (still works)
import { SomeonesPlanUser } from '@someones/schema';

// New way (with validation)
import { SomeonesPlanUserSchema, type SomeonesPlanUser } from '@someones/schema';

// Validate runtime data
const user: SomeonesPlanUser = ValidationUtil.parse(SomeonesPlanUserSchema, userData);
```

## 📝 Examples

See `src/examples.ts` for comprehensive usage examples including:

- Basic validation
- API response validation
- Form validation
- Bulk validation
- Error handling patterns

## 🤝 Contributing

When adding new schemas:

1. Create the Zod schema first
2. Export both the schema and inferred type
3. Add validation examples
4. Update this README

## 📄 License

MIT
