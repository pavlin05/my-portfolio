import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iinctvnnqhnsctviyolo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbmN0dm5ucWhuc2N0dml5b2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxOTE2NzksImV4cCI6MjAxODc2NzY3OX0.dhDy4PcbDANNJwsf-tUGQmOvHWcWKWZDTvkAbpPqK-M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);