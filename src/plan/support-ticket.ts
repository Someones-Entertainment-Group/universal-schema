// Support ticket status enum
export enum SupportTicketStatus {
  Open = "open",
  InProgress = "in_progress",
  Resolved = "resolved",
  Closed = "closed",
}

// Support ticket priority enum
export enum SupportTicketPriority {
  Low = "low",
  Medium = "medium",
  High = "high",
  Urgent = "urgent",
}

// Support ticket type
export interface SomeonesPlanSupportTicket {
  id: number;
  name: string;
  email: string;
  subject: string;
  description: string;
  attachment_id?: string;
  attachment_url?: string;
  status: SupportTicketStatus;
  priority: SupportTicketPriority;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
}

// Support statistics type
export interface SomeonesPlanSupportStatistics {
  total_tickets: number;
  open_tickets: number;
  in_progress_tickets: number;
  resolved_tickets: number;
  closed_tickets: number;
  high_priority_tickets: number;
  urgent_priority_tickets: number;
  tickets_today: number;
  tickets_this_week: number;
  tickets_this_month: number;
}

// Support filters type
export interface SomeonesPlanSupportFilters {
  search?: string;
  status?: SupportTicketStatus;
  priority?: SupportTicketPriority;
  date_from?: string;
  date_to?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
  per_page?: number;
  page?: number;
}

// Support update status request type
export interface SomeonesPlanSupportUpdateStatusRequest {
  status: SupportTicketStatus;
  priority?: SupportTicketPriority;
  admin_notes?: string;
}

// Support tickets response type
export interface SomeonesPlanSupportTicketsResponse {
  data: SomeonesPlanSupportTicket[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}
