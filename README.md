# @someones/schema

Common TypeScript types and schemas for Someones projects.

## Overview

This package contains shared type definitions used across multiple Someones projects including:
- Frontend (Next.js)
- Mobile App (React Native)
- Admin Panel
- Backend API integrations

## Installation

```bash
npm install @someones/schema
# or
yarn add @someones/schema
```

## Usage

```typescript
import { User, Event, Bid, UserRoles } from '@someones/schema'

// Use the types in your components
const user: User = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
  // ... other properties
}

const eventStatus: EventStatus = EventStatus.Active
```

## Available Types

### User Types
- `User` - Main user interface
- `UserRoles` - Enum for user roles
- `UserReview` - User review structure
- `UserReviewSummary` - Review summary statistics

### Event Types
- `Event` - Main event interface
- `EventStatus` - Enum for event statuses
- `EventType` - Enum for event types
- `BiddingStatus` - Enum for bidding statuses
- `Ticket` - Event ticket structure
- `EventRegistrationSubType` - Event registration sub-types

### Bid Types
- `Bid` - Main bid interface

### Cart Types
- `CartItems` - Cart item structure
- `CartState` - Cart state interface
- `BiddingUser` - User bidding information
- `AddToCartPayload` - Add to cart request
- `RemoveCartItemPayload` - Remove from cart request

### Media Types
- `Media` - Media file structure
- `FileManageItem` - File management structure

### Utility Types
- `ISelectMenuList` - Select menu options
- `ISortingType` - Sorting direction
- `DeviceTypeUtils` - Device type utilities
- `IAxisType` - 3D axis coordinates
- `Location` - Geographic location

## Development

```bash
# Build the package
npm run build

# Watch mode for development
npm run dev

# Clean build artifacts
npm run clean
```

## Structure

```
src/
├── index.ts          # Main export file
├── user.ts           # User-related types
├── event.ts          # Event-related types
├── bid.ts            # Bid-related types
├── cart.ts           # Cart-related types
├── media.ts          # Media-related types
├── file-manager.ts   # File management types
└── utils.ts          # Utility types
```

## Contributing

1. Add new types to the appropriate files in `src/`
2. Export them from `src/index.ts`
3. Update this README with the new types
4. Build and test the changes
5. Update version in `package.json`

## License

MIT
