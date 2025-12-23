import { Media } from "../media";
import { SomeonesPlanEvent } from "./event";
import { SomeonesPlanUserReviewBase } from "./review";

// User roles enum
export enum UserRoles {
  // Admin Users
  EventOwner = "event_owner",
  PlannerPro = "planner_pro",

  // Normal Users
  Performer = "performer",
  Vendor = "vendor",
  VenueProvider = "venue_provider",
  Influencer = "influencer",
  PartySeekers = "party_seeker",
}

// User review summary type
export interface SomeonesPlanUserReviewSummary {
  total_reviews: number;
  average_rating: number;
  rating_counts: Record<number, number>;
}

// Base user type
export interface SomeonesPlanUser {
  id: number;
  firstname: string;
  lastname: string;
  business_name: string | null;
  username: string;
  email: string;
  country_code: string;
  phone_number: string;
  country: string;
  city: string;
  have_company: number;
  company_name: string;
  company_address: string;
  uae_tax_registration_number: string;
  is_number_verified: string;
  is_email_verified: number;
  role: UserRoles;
  created_at: string;
  updated_at: string;
  token: string;
  reviews: SomeonesPlanUserReviewBase[];
  summary?: SomeonesPlanUserReviewSummary;
  profile_image: Media | null;
  banner_cover: Media | null;
}

// Full user review type with circular references
export interface SomeonesPlanUserReview {
  id: number;
  reviewer_id: number;
  bidder_id: number;
  event_id: number;
  rating: number;
  review: string;
  status: string;
  created_at: string;
  updated_at: string;
  reviewer: SomeonesPlanUser;
  bidder: SomeonesPlanUser;
  event: SomeonesPlanEvent;
  bidder_full?: SomeonesPlanUser;
  reviewer_full?: SomeonesPlanUser;
}

// Extra types for different user types
export interface SomeonesPlanPerformerExtra {
  id: number;
  user_id: number;
  date_of_birth: string;
  gender: string;
  performance_category: string[];
  musician_type: string;
  musician_type_options: string[];
  dancer_type_options: string[];
  dj_type_options: string[];
  special_acts_type_options: string[];
  availability_in_kids_party: string;
  bio: string;
  languages: string[];
  created_at: string;
  updated_at: string;
}

export interface SomeonesPlanVenderExtra {
  vender_type: string[];
  catering_category: string[];
  service_provided: string;
  availability_in_kids_party: string;
  bio: string;
  languages: string[];
  date_of_birth: string;
  gender: string;
}

export interface SomeonesPlanInfluencerExtra {
  date_of_birth: string;
  gender: string;
  bio: string;
  total_followers_count: string;
  last_minute_event_requests: string;
  average_engagement_rate: string;
  top_brands_worked_with: string;
  availability_in_kids_party: string;
  performance_category: string[];
  preferred_event_types: string[];
  languages: string[];
  created_at: string;
  updated_at: string;
}

export interface SomeonesPlanVenueProviderExtra {
  date_of_birth: string;
  gender: string;
  venue_type: string;
  max_visitors: string;
  area_size: string;
  facilities: string;
  google_map_location: string;
  preferred_events: string;
  license_number: string;
  vat_number: string;
  business_address: string;
  about_venue: string;
  created_at: string;
  updated_at: string;
}

export interface SomeonesPlanPlannerProExtra {
  license_number: string;
  vat_number: string;
  company_website: string;
  company_invoice_address: string;
  position: string;
  event_type: string;
  no_of_events_manages_annualy: string;
  preferences: string;
  how_did_you_hear_about_us: string | null;
  date_of_birth: string;
  gender: string;
  created_at: string;
  updated_at: string;
}

export interface SomeonesPlanPartySeekerExtra {
  date_of_birth: string;
  gender: string;
}

// Event owner extra type
interface EventOwnerExtra {
  date_of_birth: string;
  gender: string;
}

// User with role types
export interface SomeonesPlanEventOwnerUser extends SomeonesPlanUser {
  event_owner_extra: EventOwnerExtra;
}

export interface SomeonesPlanPerformerUser extends SomeonesPlanUser {
  performer_extra: SomeonesPlanPerformerExtra;
}

export interface SomeonesPlanVenderUser extends SomeonesPlanUser {
  vender_extra: SomeonesPlanVenderExtra;
}

export interface SomeonesPlanInfluencerUser extends SomeonesPlanUser {
  influencer_extra: SomeonesPlanInfluencerExtra;
}

export interface SomeonesPlanVenueProviderUser extends SomeonesPlanUser {
  venue_provider_extra: SomeonesPlanVenueProviderExtra;
}

export interface SomeonesPlanPlannerProUser extends SomeonesPlanUser {
  planner_pro_extra: SomeonesPlanPlannerProExtra;
}

export interface SomeonesPlanPartySeekerUser extends SomeonesPlanUser {
  party_seeker_extra: SomeonesPlanPartySeekerExtra;
}

// Union type for user with role
export type SomeonesPlanUserWithRole =
  | SomeonesPlanEventOwnerUser
  | SomeonesPlanPerformerUser
  | SomeonesPlanVenderUser
  | SomeonesPlanInfluencerUser
  | SomeonesPlanVenueProviderUser
  | SomeonesPlanPlannerProUser
  | SomeonesPlanPartySeekerUser;

export interface SomeonesPlanUserWithToken extends SomeonesPlanUser {
  token: string;
}

export interface SomeonesPlanGalleryItem {
  id: number;
  user_id: number;
  source_id: number;
  source_type: string;
  hashtags: string;
  media: Media;
}

export interface SomeonesPlanBankAccount {
  id: number;
  user_id: number;
  account_holder_name: string;
  account_number: string;
  bank_name: string;
  iban_number: string;
  swift_code: string;
  status: string;
}
