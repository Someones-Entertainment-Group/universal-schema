import { SomeonesPlanUser } from "./user";

// Payout status enum
export enum PayoutStatus {
  Pending = "pending",
  Processing = "processing",
  Completed = "completed",
  Rejected = "rejected",
}

// Bid type for payout requests
export interface SomeonesPlanPayoutBid {
  id: number;
  event_id: number;
  user_id: number;
  bid_amount: number;
  bid_description: string;
  status: string;
  bidder_type: string;
  created_at: string;
  updated_at: string;
  event: {
    id: number;
    event_name: string;
  };
  user: SomeonesPlanUser;
}

// Payout request type
export interface SomeonesPlanPayoutRequest {
  id: number;
  user_id: number;
  bid_id: number;
  account_holder_name: string;
  account_number: string;
  bank_name: string;
  iban_number: string;
  swift_code: string;
  invoice?: string;
  status: PayoutStatus;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
  user: SomeonesPlanUser;
  bid: SomeonesPlanPayoutBid;
  invoice_url?: string;
}

// Payout statistics type
export interface SomeonesPlanPayoutStatistics {
  total_requests: number;
  pending_requests: number;
  processing_requests: number;
  completed_requests: number;
  rejected_requests: number;
  total_amount: number;
  pending_amount: number;
  completed_amount: number;
  requests_today: number;
  requests_this_week: number;
  requests_this_month: number;
}

// Payout filters type
export interface SomeonesPlanPayoutFilters {
  search?: string;
  status?: PayoutStatus;
  user_id?: number;
  date_from?: string;
  date_to?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
  per_page?: number;
  page?: number;
}

// Payout update status request type
export interface SomeonesPlanPayoutUpdateStatusRequest {
  status: PayoutStatus;
  admin_notes?: string;
}

// Payout requests response type
export interface SomeonesPlanPayoutRequestsResponse {
  data: SomeonesPlanPayoutRequest[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}
