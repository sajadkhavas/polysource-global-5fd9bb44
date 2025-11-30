import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '@/lib/validation/contactForm';

describe('Contact Form Validation', () => {
  it('should fail validation with empty fields', () => {
    const emptyData = {
      name: '',
      company: '',
      email: '',
      country: '',
      quantity: '',
    };

    const result = contactFormSchema.safeParse(emptyData);

    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;

      expect(errors.name?.[0]).toBe('contactForm.errors.nameRequired');
      expect(errors.company?.[0]).toBe('contactForm.errors.companyRequired');
      expect(errors.email?.[0]).toBe('contactForm.errors.emailInvalid');
      expect(errors.country?.[0]).toBe('contactForm.errors.countryRequired');
      expect(errors.quantity?.[0]).toBe('contactForm.errors.quantityRequired');
    }
  });

  it('should fail validation with invalid email', () => {
    const invalidEmailData = {
      name: 'John Doe',
      company: 'Test Company',
      email: 'invalid-email',
      country: 'uae',
      quantity: '20',
    };

    const result = contactFormSchema.safeParse(invalidEmailData);

    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.email?.[0]).toBe('contactForm.errors.emailInvalid');
    }
  });

  it('should pass validation with valid data', () => {
    const validData = {
      name: 'John Doe',
      company: 'Test Company',
      email: 'john@example.com',
      country: 'uae',
      quantity: '20',
    };

    const result = contactFormSchema.safeParse(validData);
    
    expect(result.success).toBe(true);
  });
});
