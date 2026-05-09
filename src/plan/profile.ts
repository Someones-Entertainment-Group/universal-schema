import { UserRoles } from "./user";

/**
 * Profile types — the multi-profile milestone (Phase 1 / 01a) introduces a
 * `profiles` table where each row is one (user_id, type) pair. A single Clerk
 * user can hold up to one active profile of each role-type. The 7 values must
 * be byte-identical to UserRoles so users.role and profiles.type stay in sync
 * during the cutover window (until users.role is dropped post-milestone).
 *
 * Re-exported from UserRoles to keep a single source of truth.
 */
export { UserRoles as ProfileType };

/**
 * A single profile row. Soft-deleted via `deleted_at`; never hard-deleted.
 * The partial unique index `profiles_user_id_type_active_unique` enforces
 * one active profile per (user_id, type).
 */
export interface SomeonesPlanProfile {
  id: number;
  user_id: number;
  type: UserRoles;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Bare-name alias preferred by the Phase 4 frontend cutover (consistent with
 * the front-end's existing `Profile` references in component props and React
 * Query keys). The canonical name remains `SomeonesPlanProfile`.
 */
export type Profile = SomeonesPlanProfile;

/**
 * POST /signup-with-profile (Phase 3 / 03f atomic-signup endpoint).
 *
 * Backend resolves the user from the Clerk JWT `sub` claim, then creates the
 * user row + first profile in a single DB::transaction via
 * ProfileService::createWithFirstProfile. All fields beyond `profile_type`
 * are optional so older clients keep compiling against the new contract.
 */
export interface SignupWithProfilePayload {
  profile_type: UserRoles;
  firstname?: string;
  lastname?: string;
  business_name?: string | null;
  username?: string;
  email?: string;
  country_code?: string;
  phone_number?: string;
  country?: string;
  city?: string;
  /**
   * Loose-typed scratch payload. Backend dispatches to the matching
   * *_Extra table based on `profile_type`; frontend forms keep their own
   * Yup/Zod resolvers per role.
   */
  role_extra?: Record<string, unknown>;
}

/**
 * POST /profiles — used inside the Dashboard sidebar profile switcher
 * (Phase 4 / WEB-07) to add a SECOND, THIRD, etc. profile to an already-
 * registered user. Set semantics (one profile per role-type per user) are
 * enforced at the DB partial unique index level; SQLSTATE 23505 is mapped
 * to ProfileTypeAlreadyExistsException at the service layer.
 *
 * All role-extension fields are optional so:
 *   (a) older frontend builds compile against the new schema artifact;
 *   (b) the backend Form Request can pick what's relevant per profile_type.
 */
export interface AddProfilePayload {
  profile_type: UserRoles;

  // Performer (when profile_type === 'performer')
  date_of_birth?: string;
  gender?: string;
  performance_category?: string[];
  musician_type?: string;
  bio?: string;
  languages?: string[];

  // Venue provider (when profile_type === 'venue_provider')
  venue_type?: string;
  max_visitors?: string;
  area_size?: string;
  facilities?: string;
  business_address?: string;
  about_venue?: string;

  // Vendor (when profile_type === 'vendor')
  vender_type?: string[];
  catering_category?: string[];
  service_provided?: string;

  // Influencer (when profile_type === 'influencer')
  total_followers_count?: string;
  average_engagement_rate?: string;
  top_brands_worked_with?: string;
  preferred_event_types?: string[];

  // Planner pro (when profile_type === 'planner_pro')
  license_number?: string;
  vat_number?: string;
  company_website?: string;
  position?: string;
  no_of_events_manages_annualy?: string;

  // Common across most roles
  availability_in_kids_party?: string;
}

/**
 * POST /profiles/switch/{id} — flips users.primary_profile_id and pushes
 * the new value into Clerk publicMetadata.active_profile_id (saga-compensation:
 * log + reconcile-via-cron via clerk_metadata_dirty_at).
 */
export interface SwitchProfilePayload {
  profile_id: number;
}
