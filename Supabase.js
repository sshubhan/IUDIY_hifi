import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gmxynaejnusacxnvtndv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdteHluYWVqbnVzYWN4bnZ0bmR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4MjY0MDEsImV4cCI6MjAxNzQwMjQwMX0.X8FOYMi3Aw8kUm1QXIFCVOoOSYvOwGh8wqu3_gTHlK0";

export default supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
