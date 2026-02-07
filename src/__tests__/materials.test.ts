import { describe, it, expect } from 'vitest';
import { fetchMaterials, polymerMaterials } from '@/lib/mockData';

describe('Materials Query', () => {
  it('should return 12 materials from fetchMaterials', async () => {
    const materials = await fetchMaterials();
    
    expect(materials).toBeDefined();
    expect(Array.isArray(materials)).toBe(true);
    expect(materials.length).toBe(12);
  });

  it('should have correct structure for each material', async () => {
    const materials = await fetchMaterials();
    
    materials.forEach((material) => {
      expect(material).toHaveProperty('id');
      expect(material).toHaveProperty('name_fa');
      expect(material).toHaveProperty('name_en');
      expect(material).toHaveProperty('name_ar');
      expect(material).toHaveProperty('grade');
      expect(material).toHaveProperty('origin');
      expect(material).toHaveProperty('recycled_percentage');
      expect(material).toHaveProperty('price_range');
      expect(material).toHaveProperty('image');
      expect(material).toHaveProperty('category');
      expect(material).toHaveProperty('mfi');
      expect(material).toHaveProperty('color');
      expect(material).toHaveProperty('applications');
      expect(material).toHaveProperty('inStock');
    });
  });

  it('should have valid recycled_percentage values (0-100)', async () => {
    const materials = await fetchMaterials();
    
    materials.forEach((material) => {
      expect(material.recycled_percentage).toBeGreaterThanOrEqual(0);
      expect(material.recycled_percentage).toBeLessThanOrEqual(100);
    });
  });

  it('polymerMaterials constant should also have 12 items', () => {
    expect(polymerMaterials.length).toBe(12);
  });

  it('should include recycled and virgin materials', async () => {
    const materials = await fetchMaterials();
    
    const recycledMaterials = materials.filter(m => m.recycled_percentage > 0);
    const virginMaterials = materials.filter(m => m.recycled_percentage === 0);
    
    expect(recycledMaterials.length).toBeGreaterThan(0);
    expect(virginMaterials.length).toBeGreaterThan(0);
  });
});
