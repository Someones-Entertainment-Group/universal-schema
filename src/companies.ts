/**
 * Company Enums and Constants
 * Used throughout the platform for company identification and checks
 */

// Company Slugs - Unique identifiers
export enum CompanySlug {
  SOMEONES_PLAN = "someones_plan",
  SOMEONES_TICKET = "someones_ticket",
  SOMEONES_HOUSE = "someones_house",
  SOMEONES_STAGE = "someones_stage",
  SOMEONES_STUDIO = "someones_studio",
  SOMEONES_ENTERTAINMENT_GROUP = "someones_entertainment_group",
}

// Company Names - Display names
export enum CompanyName {
  SOMEONES_PLAN = "Someones Plan",
  SOMEONES_TICKET = "Someones Ticket",
  SOMEONES_HOUSE = "Someones House",
  SOMEONES_STAGE = "Someones Stage",
  SOMEONES_STUDIO = "Someones Studio",
  SOMEONES_ENTERTAINMENT_GROUP = "Someones Entertainment Group",
}

// Company Websites
export enum CompanyWebsite {
  SOMEONES_PLAN = "https://www.someonesplan.com/",
  SOMEONES_TICKET = "https://www.someonesticket.com/",
  SOMEONES_HOUSE = "https://someones.house/",
  SOMEONES_STAGE = "https://someonesstage.com/",
  SOMEONES_STUDIO = "https://www.someones.studio/",
  SOMEONES_ENTERTAINMENT_GROUP = "https://www.someones.ae/",
}

// Company Emails
export enum CompanyEmail {
  SOMEONES_PLAN = "info@someonesplan.com",
  SOMEONES_TICKET = "info@someonesticket.com",
  SOMEONES_HOUSE = "info@someones.house",
  SOMEONES_STAGE = "info@someonesstage.com",
  SOMEONES_STUDIO = "info@someones.studio",
  SOMEONES_ENTERTAINMENT_GROUP = "info@someones.ae",
}

// Creator type
interface Creator {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  role: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Company type
export interface SomeonesCompany {
  id: number;
  name: CompanyName;
  slug: CompanySlug;
  description: string;
  email: CompanyEmail;
  phone: string | null;
  address: string | null;
  website: CompanyWebsite;
  logo: string | null;
  is_active: boolean;
  created_by: number;
  created_at: string;
  updated_at: string;
  creator: Creator;
}

// Complete Company Data
export const SomeonesCompaniesData: Record<CompanySlug, SomeonesCompany> = {
  [CompanySlug.SOMEONES_PLAN]: {
    id: 1,
    slug: CompanySlug.SOMEONES_PLAN,
    name: CompanyName.SOMEONES_PLAN,
    website: CompanyWebsite.SOMEONES_PLAN,
    email: CompanyEmail.SOMEONES_PLAN,
    description: "Professional planning and strategy services",
    phone: null,
    address: null,
    logo: null,
    is_active: true,
    created_by: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    creator: {
      id: 1,
      name: "Admin",
      email: "admin@someonesplan.com",
      email_verified_at: null,
      role: "admin",
      is_active: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
  },
  [CompanySlug.SOMEONES_TICKET]: {
    id: 2,
    slug: CompanySlug.SOMEONES_TICKET,
    name: CompanyName.SOMEONES_TICKET,
    website: CompanyWebsite.SOMEONES_TICKET,
    email: CompanyEmail.SOMEONES_TICKET,
    description: "Event ticketing and management platform",
    phone: null,
    address: null,
    logo: null,
    is_active: true,
    created_by: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    creator: {
      id: 1,
      name: "Admin",
      email: "admin@someonesplan.com",
      email_verified_at: null,
      role: "admin",
      is_active: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
  },
  [CompanySlug.SOMEONES_HOUSE]: {
    id: 3,
    slug: CompanySlug.SOMEONES_HOUSE,
    name: CompanyName.SOMEONES_HOUSE,
    website: CompanyWebsite.SOMEONES_HOUSE,
    email: CompanyEmail.SOMEONES_HOUSE,
    description: "Real estate and property management services",
    phone: null,
    address: null,
    logo: null,
    is_active: true,
    created_by: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    creator: {
      id: 1,
      name: "Admin",
      email: "admin@someonesplan.com",
      email_verified_at: null,
      role: "admin",
      is_active: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
  },
  [CompanySlug.SOMEONES_STAGE]: {
    id: 4,
    slug: CompanySlug.SOMEONES_STAGE,
    name: CompanyName.SOMEONES_STAGE,
    website: CompanyWebsite.SOMEONES_STAGE,
    email: CompanyEmail.SOMEONES_STAGE,
    description: "Live events and performance management",
    phone: null,
    address: null,
    logo: null,
    is_active: true,
    created_by: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    creator: {
      id: 1,
      name: "Admin",
      email: "admin@someonesplan.com",
      email_verified_at: null,
      role: "admin",
      is_active: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
  },
  [CompanySlug.SOMEONES_STUDIO]: {
    id: 5,
    slug: CompanySlug.SOMEONES_STUDIO,
    name: CompanyName.SOMEONES_STUDIO,
    website: CompanyWebsite.SOMEONES_STUDIO,
    email: CompanyEmail.SOMEONES_STUDIO,
    description: "Creative studio and media production services",
    phone: null,
    address: null,
    logo: null,
    is_active: true,
    created_by: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    creator: {
      id: 1,
      name: "Admin",
      email: "admin@someonesplan.com",
      email_verified_at: null,
      role: "admin",
      is_active: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
  },
  [CompanySlug.SOMEONES_ENTERTAINMENT_GROUP]: {
    id: 6,
    slug: CompanySlug.SOMEONES_ENTERTAINMENT_GROUP,
    name: CompanyName.SOMEONES_ENTERTAINMENT_GROUP,
    website: CompanyWebsite.SOMEONES_ENTERTAINMENT_GROUP,
    email: CompanyEmail.SOMEONES_ENTERTAINMENT_GROUP,
    description: "Regional operations and business services in UAE",
    phone: null,
    address: null,
    logo: null,
    is_active: true,
    created_by: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    creator: {
      id: 1,
      name: "Admin",
      email: "admin@someonesplan.com",
      email_verified_at: null,
      role: "admin",
      is_active: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
  },
};

// Export default for easy importing
export default {
  CompanySlug,
  CompanyName,
  CompanyWebsite,
  CompanyEmail,
  SomeonesCompaniesData,
};