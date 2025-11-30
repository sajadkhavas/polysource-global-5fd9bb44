import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  quantity: z.string().min(1, "Quantity is required"),
  phone: z.string().optional(),
  application: z.string().optional(),
  timeline: z.string().optional(),
  requirements: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
