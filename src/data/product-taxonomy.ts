export const productCategories = {
  petrochemical: {
    id: 'petrochemical',
    label: 'Petrochemical Raw Materials',
    description: 'Virgin polymers from petrochemical sources'
  },
  recycled: {
    id: 'recycled',
    label: 'Recycled Materials',
    description: 'Certified recycled polymer granules'
  },
  compounds: {
    id: 'compounds',
    label: 'Compounds & Masterbatches',
    description: 'Custom formulations and color solutions'
  },
  finished: {
    id: 'finished',
    label: 'Finished Polymer Parts & Products',
    description: 'Molded parts and finished applications'
  }
} as const;

export const polymerTypes = {
  // Petrochemical
  ldpe: { label: 'LDPE', category: 'petrochemical', fullName: 'Low-Density Polyethylene' },
  lldpe: { label: 'LLDPE', category: 'petrochemical', fullName: 'Linear Low-Density Polyethylene' },
  hdpe: { label: 'HDPE', category: 'petrochemical', fullName: 'High-Density Polyethylene' },
  'pp-h': { label: 'PP-H', category: 'petrochemical', fullName: 'Polypropylene Homopolymer' },
  'pp-c': { label: 'PP-C', category: 'petrochemical', fullName: 'Polypropylene Copolymer' },
  ps: { label: 'PS', category: 'petrochemical', fullName: 'Polystyrene' },
  pc: { label: 'PC', category: 'petrochemical', fullName: 'Polycarbonate' },
  abs: { label: 'ABS', category: 'petrochemical', fullName: 'ABS' },
  san: { label: 'SAN', category: 'petrochemical', fullName: 'SAN' },
  pvc: { label: 'PVC', category: 'petrochemical', fullName: 'PVC' },
  
  // Recycled PE
  rpe: { label: 'rPE', category: 'recycled', fullName: 'Recycled Polyethylene' },
  'rpe-light': { label: 'rPE Light', category: 'recycled', fullName: 'Recycled PE - Light Granules' },
  'rpe-heavy': { label: 'rPE Heavy', category: 'recycled', fullName: 'Recycled PE - Heavy Granules' },
  'rpe-film': { label: 'rPE Film', category: 'recycled', fullName: 'Recycled PE - Film Waste' },
  
  // Recycled PP
  rpp: { label: 'rPP', category: 'recycled', fullName: 'Recycled Polypropylene' },
  'rpp-textile': { label: 'rPP Textile', category: 'recycled', fullName: 'Recycled PP - Textile Grade' },
  'rpp-injection': { label: 'rPP Injection', category: 'recycled', fullName: 'Recycled PP - Injection Grade' },
  'rpp-colored': { label: 'rPP Colored', category: 'recycled', fullName: 'Recycled PP - Colored Compounds' },
  
  // Other Recycled
  rabs: { label: 'rABS', category: 'recycled', fullName: 'Recycled ABS' },
  rps: { label: 'rPS', category: 'recycled', fullName: 'Recycled PS' },
  rpet: { label: 'rPET', category: 'recycled', fullName: 'Recycled PET' },
  rpvc: { label: 'rPVC', category: 'recycled', fullName: 'Recycled PVC' },
  
  // Compounds
  'color-mb': { label: 'Color Masterbatch', category: 'compounds', fullName: 'Color Masterbatch' },
  'additive-mb': { label: 'Additive Masterbatch', category: 'compounds', fullName: 'Additive Masterbatch' },
  'pp-caco3': { label: 'PP + CaCO₃', category: 'compounds', fullName: 'PP Compound with Calcium Carbonate' },
  'pa-talc': { label: 'PA + Talc', category: 'compounds', fullName: 'PA Compound with Talc' },
  'fiber-reinforced': { label: 'Fiber-Reinforced', category: 'compounds', fullName: 'Fiber-Reinforced Compounds' },
  engineering: { label: 'Engineering Compounds', category: 'compounds', fullName: 'Engineering Polymer Compounds' },
  'special-mb': { label: 'Special Masterbatch', category: 'compounds', fullName: 'UV/Antistatic/Antioxidant Masterbatch' },
  
  // Finished Products
  industrial: { label: 'Industrial Parts', category: 'finished', fullName: 'Industrial Polymer Parts' },
  household: { label: 'Household Items', category: 'finished', fullName: 'Polymer Household Products' },
  packaging: { label: 'Packaging', category: 'finished', fullName: 'Packaging Products' },
  consumer: { label: 'Consumer Products', category: 'finished', fullName: 'Consumer & Decorative Products' },
  custom: { label: 'Custom Molded', category: 'finished', fullName: 'Custom Molded Products' }
} as const;

export type ProductCategory = keyof typeof productCategories;
export type PolymerType = keyof typeof polymerTypes;
