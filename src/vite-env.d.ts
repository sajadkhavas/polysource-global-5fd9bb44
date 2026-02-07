/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_PROJECT_ID?: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_COMPANY_PHONE?: string;
  readonly VITE_COMPANY_EMAIL?: string;
  readonly VITE_COMPANY_LOCATION?: string;
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
