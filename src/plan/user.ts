import { SomeonesPlanEvent } from "./event";
import { Media } from "./../media";

enum UserRoles {
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

type UserReview = {
  id: number;
  reviewer_id: number;
  bidder_id: number;
  event_id: number;
  rating: number;
  review: string;
  status: string;
  created_at: string;
  updated_at: string;
  event?: SomeonesPlanEvent;
  bidder?: User;
  reviewer?: User;
};

type UserReviewSummary = {
  total_reviews: number;
  average_rating: number;
  rating_counts: {
    [key: number]: number; // Key is the rating (1-5), value is the count
  };
};

type User = {
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
  reviews: UserReview[];
  summary?: UserReviewSummary;
  profile_image: Media | null;
  banner_cover: Media | null;
};

type PerformerExtra = {
  id: number;
  user_id: number;
  date_of_birth: string;
  gender: string;
  performance_category: string[];
  musician_type: string;
  musician_type_options: string[];
  dancer_type_options: any[];
  dj_type_options: any[];
  availability_in_kids_party: string;
  bio: string;
  languages: string[];
  created_at: string;
  updated_at: string;
};

type VenderExtra = {
  vender_type: string[];
  catering_category: string[];
  service_provided: string;
  availability_in_kids_party: string;
  bio: string;
  languages: string[];
  date_of_birth: string;
  gender: string;
};

type InfluencerExtra = {
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
};

type VenueProviderExtra = {
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
};

type PlannerProExtra = {
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
};

type PartySeekerExtra = {
  date_of_birth: string;
  gender: string;
};

// All Users

type EventOwnerUser = User & {
  event_owner_extra: {
    date_of_birth: string;
    gender: string;
  };
};

type PerformerUser = User & {
  performer_extra: PerformerExtra;
};

type VenderUser = User & {
  vender_extra: VenderExtra;
};

type InfluencerUser = User & {
  influencer_extra: InfluencerExtra;
};

type VenueProviderUser = User & {
  venue_provider_extra: VenueProviderExtra;
};

type PlannerProUser = User & {
  planner_pro_extra: PlannerProExtra;
};

type PartySeekerUser = User & {
  party_seeker_extra: PartySeekerExtra;
};

type UserWithRole =
  | EventOwnerUser
  | PerformerUser
  | VenderUser
  | InfluencerUser
  | VenueProviderUser
  | PlannerProUser
  | PartySeekerUser;

type UserWithToken = User & {
  token: string;
};

type GalleryItem = {
  id: number;
  user_id: number;
  source_id: number;
  source_type: string;
  hashtags: string;
  media: Media;
};

type BankAccount = {
  id: number;
  user_id: number;
  account_holder_name: string;
  account_number: string;
  bank_name: string;
  iban_number: string;
  swift_code: string;
  status: string;
};

export type {
  User as SomeonesPlanUser,
  PerformerExtra as SomeonesPlanPerformerExtra,
  VenderExtra as SomeonesPlanVenderExtra,
  InfluencerExtra as SomeonesPlanInfluencerExtra,
  VenueProviderExtra as SomeonesPlanVenueProviderExtra,
  PlannerProExtra as SomeonesPlanPlannerProExtra,
  PartySeekerExtra as SomeonesPlanPartySeekerExtra,
  EventOwnerUser as SomeonesPlanEventOwnerUser,
  PerformerUser as SomeonesPlanPerformerUser,
  VenderUser as SomeonesPlanVenderUser,
  InfluencerUser as SomeonesPlanInfluencerUser,
  VenueProviderUser as SomeonesPlanVenueProviderUser,
  PlannerProUser as SomeonesPlanPlannerProUser,
  PartySeekerUser as SomeonesPlanPartySeekerUser,
  UserWithRole as SomeonesPlanUserWithRole,
  UserWithToken as SomeonesPlanUserWithToken,
  GalleryItem as SomeonesPlanGalleryItem,
  BankAccount as SomeonesPlanBankAccount,
};
