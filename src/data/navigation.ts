export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  description?: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    id: 'polymer-products',
    label: 'Polymer Products',
    href: '/products',
    icon: 'Package',
    description: 'Browse our complete range of petrochemical, recycled, and specialty polymers',
    children: [
      {
        id: 'petrochemical',
        label: 'Petrochemical Raw Materials',
        href: '/products?category=petrochemical',
        icon: 'Droplet',
        description: 'Virgin polymers from petrochemical sources',
        children: [
          { id: 'ldpe', label: 'Low-Density Polyethylene (LDPE)', href: '/products?type=ldpe' },
          { id: 'lldpe', label: 'Linear Low-Density Polyethylene (LLDPE)', href: '/products?type=lldpe' },
          { id: 'hdpe', label: 'High-Density Polyethylene (HDPE)', href: '/products?type=hdpe' },
          { id: 'pp-h', label: 'Polypropylene Homopolymer (PP-H)', href: '/products?type=pp-h' },
          { id: 'pp-c', label: 'Polypropylene Copolymer (PP-C)', href: '/products?type=pp-c' },
          { id: 'ps', label: 'Polystyrene (PS)', href: '/products?type=ps' },
          { id: 'pc', label: 'Polycarbonate (PC)', href: '/products?type=pc' },
          { id: 'abs-san', label: 'ABS and SAN', href: '/products?type=abs' },
          { id: 'pvc', label: 'PVC', href: '/products?type=pvc' }
        ]
      },
      {
        id: 'recycled',
        label: 'Recycled Materials',
        href: '/products?category=recycled',
        icon: 'Recycle',
        description: 'Certified recycled polymer granules',
        children: [
          {
            id: 'rpe', label: 'Recycled Polyethylene (rPE)', href: '/products?type=rpe',
            children: [
              { id: 'rpe-light', label: 'Light Granules', href: '/products?type=rpe-light' },
              { id: 'rpe-heavy', label: 'Heavy Granules', href: '/products?type=rpe-heavy' },
              { id: 'rpe-film', label: 'Film & Nylon Waste', href: '/products?type=rpe-film' }
            ]
          },
          {
            id: 'rpp', label: 'Recycled Polypropylene (rPP)', href: '/products?type=rpp',
            children: [
              { id: 'rpp-textile', label: 'Textile Granules', href: '/products?type=rpp-textile' },
              { id: 'rpp-injection', label: 'Injection Granules', href: '/products?type=rpp-injection' },
              { id: 'rpp-colored', label: 'Colored Compounds', href: '/products?type=rpp-colored' }
            ]
          },
          {
            id: 'other-recycled', label: 'Other Recycled Polymers', href: '/products?category=recycled&type=other',
            children: [
              { id: 'rabs', label: 'ABS', href: '/products?type=rabs' },
              { id: 'rps', label: 'PS', href: '/products?type=rps' },
              { id: 'rpet', label: 'PET', href: '/products?type=rpet' },
              { id: 'rpvc', label: 'PVC', href: '/products?type=rpvc' }
            ]
          }
        ]
      },
      {
        id: 'compounds',
        label: 'Compounds & Masterbatches',
        href: '/products?category=compounds',
        icon: 'Beaker',
        description: 'Custom formulations and color solutions',
        children: [
          { id: 'color-mb', label: 'Color Masterbatch', href: '/products?type=color-mb' },
          { id: 'additive-mb', label: 'Additive Masterbatch', href: '/products?type=additive-mb' },
          {
            id: 'filled-compounds', label: 'Filled Compounds', href: '/products?type=filled',
            children: [
              { id: 'pp-caco3', label: 'PP Compound with CaCO₃', href: '/products?type=pp-caco3' },
              { id: 'pa-talc', label: 'PA Compound with Talc', href: '/products?type=pa-talc' }
            ]
          },
          { id: 'fiber-reinforced', label: 'Fiber-Reinforced Compounds', href: '/products?type=fiber-reinforced' },
          { id: 'engineering', label: 'Engineering Compounds', href: '/products?type=engineering' },
          { id: 'special-mb', label: 'UV / Antistatic / Antioxidant', href: '/products?type=special-mb' }
        ]
      },
      {
        id: 'finished-parts',
        label: 'Finished Polymer Parts & Products',
        href: '/products?category=finished',
        icon: 'Box',
        description: 'Molded parts and finished applications',
        children: [
          { id: 'industrial-parts', label: 'Industrial Parts', href: '/products?type=industrial' },
          { id: 'household', label: 'Polymer Household Items', href: '/products?type=household' },
          { id: 'packaging', label: 'Packaging Products', href: '/products?type=packaging' },
          { id: 'consumer', label: 'Consumer & Decorative Products', href: '/products?type=consumer' },
          { id: 'custom-molded', label: 'Custom Molded Products', href: '/products?type=custom' }
        ]
      }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    children: [
      { id: 'consulting', label: 'Technical Consulting & Material Selection', href: '/services#consulting' },
      { id: 'formulation', label: 'Custom Formulation Design', href: '/services#formulation' },
      { id: 'qc', label: 'Quality Control & Testing', href: '/services#qc' },
      { id: 'logistics', label: 'Transport & Logistics', href: '/services#logistics' }
    ]
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    children: [
      { id: 'company', label: 'Company Introduction', href: '/about' },
      { id: 'contact', label: 'Contact Us', href: '/contact' }
    ]
  }
];
