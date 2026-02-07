const normalizePhoneForWhatsApp = (value: string) => value.replace(/[^\d]/g, '');

const companyDefaults = {
  whatsappNumber: '+971501234567',
  phone: '+97141234567',
  email: 'info@polysourceglobal.com',
  locationCityCountry: 'Dubai, UAE',
};

export const companyConfig = {
  whatsappNumberRaw: import.meta.env.VITE_WHATSAPP_NUMBER || companyDefaults.whatsappNumber,
  whatsappNumber: normalizePhoneForWhatsApp(
    import.meta.env.VITE_WHATSAPP_NUMBER || companyDefaults.whatsappNumber,
  ),
  phone: import.meta.env.VITE_COMPANY_PHONE || companyDefaults.phone,
  email: import.meta.env.VITE_COMPANY_EMAIL || companyDefaults.email,
  locationCityCountry: import.meta.env.VITE_COMPANY_LOCATION || companyDefaults.locationCityCountry,
  contactFormEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '',
};
