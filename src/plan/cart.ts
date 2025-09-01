// Cart-related types
export interface AddToCartPayload {
  user_id: number
  event_id: number
  bidding_users: number[]
}

export interface RemoveCartItemPayload {
  user_id: number
  event_id: number
  bidding_users: number[]
}

export interface BiddingUser {
  id: number
  firstname: string
  lastname: string
  business_name?: string | null
  username: string
  email: string
  country_code: string
  phone_number: string
  country: string
  city: string
  have_company: number
  company_name: string
  company_address: string
  uae_tax_registration_number: string
  role: string
  created_at: string
  updated_at: string
}

export interface CartItems {
  id: number
  user_id: number
  event_id: number
  bidding_users: BiddingUser[]
  created_at: string
  updated_at: string
  user_name: string
  user_role: string
  event_name: string
  event_description: string
  event_date: string
  event_time: string
}

export interface CartState {
  items: CartItems[]
  isOpen: boolean
}
