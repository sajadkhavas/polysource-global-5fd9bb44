import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email address'),
  country: z.string().min(1, 'Country is required'),
  quantity: z.string().min(1, 'Quantity is required'),
});

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
