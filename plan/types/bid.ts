import { Event } from './event'
import { User } from './user'

export interface Bid {
    id: number
    bidder_id: number
    bidder_name: string
    bidder_role: string
    event_name: string
    event_id: number
    user_id: number
    bid_amount: number
    note: string
    bidder: User
    event: Event
    owner_note: string
    status: 'pending' | 'dismissed' | 'accepted' | 'canceled'
    created_at: string
    updated_at: string
}
