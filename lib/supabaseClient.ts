import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!SUPABASE_URL) {
  throw new Error(
    'ENV ERROR: NEXT_PUBLIC_SUPABASE_URL مفقود. تأكد من ملف .env.local ومن إعادة تشغيل السيرفر.'
  );
}
if (!SUPABASE_ANON_KEY) {
  throw new Error(
    'ENV ERROR: NEXT_PUBLIC_SUPABASE_ANON_KEY مفقود. تأكد من ملف .env.local ومن إعادة تشغيل السيرفر.'
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);