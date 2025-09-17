import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          customer_id: string
          name: string
          phone_number: string
          email: string | null
          default_address_id: string | null
          created_at: string
        }
        Insert: {
          customer_id?: string
          name: string
          phone_number: string
          email?: string | null
          default_address_id?: string | null
          created_at?: string
        }
        Update: {
          customer_id?: string
          name?: string
          phone_number?: string
          email?: string | null
          default_address_id?: string | null
          created_at?: string
        }
      }
      addresses: {
        Row: {
          address_id: string
          customer_id: string
          address_line: string
          city: string
          postal_code: string
          latitude: number | null
          longitude: number | null
          created_at: string
        }
      }
      vendors: {
        Row: {
          vendor_id: string
          name: string
          contact_number: string
          email: string
          location: string
          created_at: string
        }
      }
      products: {
        Row: {
          product_id: string
          vendor_id: string
          name: string
          description: string
          price: number
          stock_quantity: number
          category: string
          is_active: boolean
        }
      }
      orders: {
        Row: {
          order_id: string
          customer_id: string
          address_id: string
          status: 'pending' | 'confirmed' | 'dispatched' | 'delivered' | 'cancelled'
          total_amount: number
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
          created_at: string
        }
      }
      order_items: {
        Row: {
          order_item_id: string
          order_id: string
          product_id: string
          quantity: number
          price: number
        }
      }
      couriers: {
        Row: {
          courier_id: string
          name: string
          api_endpoint: string
          contact_number: string
          status: 'active' | 'inactive'
        }
      }
      order_delivery: {
        Row: {
          delivery_id: string
          order_id: string
          courier_id: string
          tracking_number: string
          status: 'assigned' | 'in_transit' | 'delivered' | 'failed'
          assigned_at: string
        }
      }
      payments: {
        Row: {
          payment_id: string
          order_id: string
          provider: string
          amount: number
          status: 'pending' | 'success' | 'failed'
          transaction_ref: string
          created_at: string
        }
      }
      error_logs: {
        Row: {
          error_id: string
          order_id: string | null
          error_type: 'stock_issue' | 'courier_issue' | 'payment_issue' | 'system_error'
          message: string
          created_at: string
        }
      }
    }
  }
}