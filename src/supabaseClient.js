import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://mddlhjsjxkgtkuwhvglq.supabase.co'
const supabaseKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZGxoanNqeGtndGt1d2h2Z2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MDI5OTQsImV4cCI6MjA1MjQ3ODk5NH0.Hcmy-ZuFi6XPJchrN6sB-xddcDJk45lTfOT9A18kx8g'



export const supabase = createClient(supabaseUrl, supabaseKey)