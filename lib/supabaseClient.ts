import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://soaoealvnwzxfrgmljbz.supabase.co";
const supabaseAnonKey = "sb_publishable_peMlNyu8v0wZOVX-aeTtPQ_Kv8mULRh";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);