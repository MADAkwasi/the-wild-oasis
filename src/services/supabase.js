import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://whqnltirwhtneqqhnwjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndocW5sdGlyd2h0bmVxcWhud2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNzAyODAsImV4cCI6MjAxMTg0NjI4MH0.5vBQ-9La83WKq9OBn6Rt1E_wD-ag_6LuT1aTmMgBpH4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// `postgresql://postgres:[YOUR-PASSWORD]@db.whqnltirwhtneqqhnwjt.supabase.co:5432/postgres`