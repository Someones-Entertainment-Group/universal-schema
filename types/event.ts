import { Bid } from './bid'
import { User } from './user'

type EventRegistrationSubType = {
    id: number
    event_id: number
    event_registration_type_id: number
    event_sub_type: string
    event_sub_type_options: string
    created_at: string
    updated_at: string
}

interface Ticket {
    id: number
    user_id: number
    event_id: number
    ticket_type: string
    price: string
    quantity: number
    status: string
    created_at: string
    updated_at: string
}

export type Event = {
    user_id: number
    event_name: string
    slug: string
    event_date: string // ISO format date
    event_time: string // 24-hour time format
    event_location: string
    event_category: string
    no_of_guests: number
    event_essentials: string // Comma-separated list
    event_description: string
    dress_code_required: boolean | null // Assuming null means not required
    dress_code_description: string
    updated_at: string // ISO format timestamp
    created_at: string // ISO format timestamp
    status: 'pending' | 'canceled' | 'completed'
    bidding_status: 'open' | 'closed'
    id: number
    event_profile: string
    total_bidders: number
    event_time_left: string // ISO format duration
    isSpecial: boolean
    owner: User
    bidders: Bid[]
    tickets: Ticket[]
    event_registration_sub_types: EventRegistrationSubType[]
}
