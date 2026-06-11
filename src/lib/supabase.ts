import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hrgyeggfeeyaxvweprvz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_oO68G40Sfr2h1xP3rEIDoQ_ghm0-w-h";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const CURRICULOS_BUCKET = "curriculos";
