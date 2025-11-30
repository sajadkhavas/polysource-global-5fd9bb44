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
      expect(result.error.issues.length).toBeGreaterThan(0);
      const fieldNames = result.error.issues.map(i => i.path[0]);
      expect(fieldNames).toContain('name');
      expect(fieldNames).toContain('company');
      expect(fieldNames).toContain('email');
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
      const emailIssue = result.error.issues.find(i => i.path[0] === 'email');
      expect(emailIssue).toBeDefined();
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
