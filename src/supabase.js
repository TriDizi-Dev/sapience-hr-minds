// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddtjepirheyzdpqtnkna.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkdGplcGlyaGV5emRwcXRua25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMTUwNDAsImV4cCI6MjA2MDc5MTA0MH0.XvhJd1Xpg3N_7HniN-8dHiNfmYgZC0WjFcywVsUkUPc';
export const supabase = createClient(supabaseUrl, supabaseKey);
