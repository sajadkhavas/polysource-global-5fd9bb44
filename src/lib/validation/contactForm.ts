import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "contactForm.errors.nameRequired"),
  company: z.string().min(1, "contactForm.errors.companyRequired"),
  email: z.string().email("contactForm.errors.emailInvalid"),
  country: z.string().min(1, "contactForm.errors.countryRequired"),
  quantity: z.string().min(1, "contactForm.errors.quantityRequired"),
  productsDescription: z.string().optional(),
  phone: z.string().optional(),
  application: z.string().optional(),
  timeline: z.string().optional(),
  requirements: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
