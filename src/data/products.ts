import { ProductCategory, PolymerType } from './product-taxonomy';

export interface Product {
  id: string;
  name: string;
  grade: string;
  type: PolymerType;
  category: ProductCategory;
  recycled: boolean;
  color: string;
  mfi: string;
  applications: string[];
  inStock: boolean;
  description?: string;
}

export const products: Product[] = [
  // Petrochemical Raw Materials
  {
    id: 'ldpe-001',
    name: 'LDPE Film Grade',
    grade: 'LDPE-2420H',
    type: 'ldpe',
    category: 'petrochemical',
    recycled: false,
    color: 'Natural',
    mfi: '2.0 g/10min',
    applications: ['Blown Film', 'Packaging Film', 'Shopping Bags'],
    inStock: true,
    description: 'High-quality low-density polyethylene for film extrusion applications'
  },
  {
    id: 'lldpe-001',
    name: 'LLDPE Stretch Film Grade',
    grade: 'LLDPE-218W',
    type: 'lldpe',
    category: 'petrochemical',
    recycled: false,
    color: 'Natural',
    mfi: '2.0 g/10min',
    applications: ['Stretch Film', 'Agricultural Film', 'Shrink Film'],
    inStock: true,
    description: 'Linear low-density polyethylene optimized for stretch wrap applications'
  },
  {
    id: 'hdpe-001',
    name: 'HDPE Blow Molding Grade',
    grade: 'HDPE-5502',
    type: 'hdpe',
    category: 'petrochemical',
    recycled: false,
    color: 'Natural',
    mfi: '0.3 g/10min',
    applications: ['Bottles', 'Containers', 'Jerry Cans'],
    inStock: true,
    description: 'High-density polyethylene for blow molding bottles and containers'
  },
  {
    id: 'hdpe-002',
    name: 'HDPE Pipe Grade',
    grade: 'HDPE-PE100',
    type: 'hdpe',
    category: 'petrochemical',
    recycled: false,
    color: 'Black',
    mfi: '0.2 g/10min',
    applications: ['Water Pipes', 'Gas Pipes', 'Industrial Piping'],
    inStock: true,
    description: 'PE100 grade HDPE for pressure pipe applications'
  },
  {
    id: 'pp-h-001',
    name: 'PP Homopolymer Injection Grade',
    grade: 'PP-H500',
    type: 'pp-h',
    category: 'petrochemical',
    recycled: false,
    color: 'Natural',
    mfi: '25 g/10min',
    applications: ['Containers', 'Caps', 'Household Items'],
    inStock: true,
    description: 'High-flow polypropylene homopolymer for injection molding'
  },
  {
    id: 'pp-c-001',
    name: 'PP Copolymer Film Grade',
    grade: 'PP-R850',
    type: 'pp-c',
    category: 'petrochemical',
    recycled: false,
    color: 'Natural',
    mfi: '8.0 g/10min',
    applications: ['BOPP Film', 'CPP Film', 'Packaging'],
    inStock: true,
    description: 'Random copolymer PP for transparent film applications'
  },
  {
    id: 'ps-001',
    name: 'GPPS Crystal Grade',
    grade: 'PS-1540',
    type: 'ps',
    category: 'petrochemical',
    recycled: false,
    color: 'Crystal',
    mfi: '15 g/10min',
    applications: ['Disposable Cutlery', 'CD Cases', 'Packaging'],
    inStock: true,
    description: 'General purpose polystyrene with excellent clarity'
  },

  // Recycled Materials - PE
  {
    id: 'rpe-001',
    name: 'Recycled HDPE Heavy Granules',
    grade: 'rHDPE-HG100',
    type: 'rpe-heavy',
    category: 'recycled',
    recycled: true,
    color: 'Mixed Colors',
    mfi: '0.5-1.0 g/10min',
    applications: ['Bins', 'Pallets', 'Industrial Parts'],
    inStock: true,
    description: 'Post-consumer recycled HDPE from bottles and containers'
  },
  {
    id: 'rpe-002',
    name: 'Recycled LDPE Light Granules',
    grade: 'rLDPE-LG200',
    type: 'rpe-light',
    category: 'recycled',
    recycled: true,
    color: 'Natural',
    mfi: '1.5-3.0 g/10min',
    applications: ['Bags', 'Film', 'Protective Packaging'],
    inStock: true,
    description: 'Recycled LDPE from post-industrial film waste'
  },
  {
    id: 'rpe-003',
    name: 'Recycled PE Film Grade',
    grade: 'rPE-F300',
    type: 'rpe-film',
    category: 'recycled',
    recycled: true,
    color: 'Grey',
    mfi: '2.0-4.0 g/10min',
    applications: ['Garbage Bags', 'Construction Film', 'Mulch Film'],
    inStock: true,
    description: 'Recycled polyethylene from post-consumer film waste'
  },

  // Recycled Materials - PP
  {
    id: 'rpp-001',
    name: 'Recycled PP Injection Grade',
    grade: 'rPP-I500',
    type: 'rpp-injection',
    category: 'recycled',
    recycled: true,
    color: 'Grey',
    mfi: '25-35 g/10min',
    applications: ['Automotive Parts', 'Containers', 'Furniture Parts'],
    inStock: true,
    description: 'High-quality recycled PP from post-industrial scrap'
  },
  {
    id: 'rpp-002',
    name: 'Recycled PP Textile Grade',
    grade: 'rPP-T600',
    type: 'rpp-textile',
    category: 'recycled',
    recycled: true,
    color: 'Black',
    mfi: '12-18 g/10min',
    applications: ['Woven Bags', 'Carpet Backing', 'Geotextiles'],
    inStock: true,
    description: 'Recycled PP from textile and fiber applications'
  },
  {
    id: 'rpp-003',
    name: 'Recycled PP Colored Compound - Black',
    grade: 'rPP-CB700',
    type: 'rpp-colored',
    category: 'recycled',
    recycled: true,
    color: 'Black',
    mfi: '20-30 g/10min',
    applications: ['Automotive Interior', 'Industrial Parts', 'Appliances'],
    inStock: true,
    description: 'Recycled PP compound with consistent black color'
  },

  // Other Recycled
  {
    id: 'rpet-001',
    name: 'Recycled PET Flakes',
    grade: 'rPET-FL100',
    type: 'rpet',
    category: 'recycled',
    recycled: true,
    color: 'Clear',
    mfi: 'N/A',
    applications: ['Fiber', 'Bottles', 'Strapping'],
    inStock: true,
    description: 'Clean recycled PET flakes from post-consumer bottles'
  },

  // Compounds & Masterbatches
  {
    id: 'mb-001',
    name: 'Color Masterbatch - White',
    grade: 'MB-W100',
    type: 'color-mb',
    category: 'compounds',
    recycled: false,
    color: 'White',
    mfi: 'Carrier-dependent',
    applications: ['Film', 'Injection Molding', 'Blow Molding'],
    inStock: true,
    description: 'High-opacity white masterbatch for PE and PP'
  },
  {
    id: 'mb-002',
    name: 'UV Protection Masterbatch',
    grade: 'MB-UV500',
    type: 'special-mb',
    category: 'compounds',
    recycled: false,
    color: 'Natural',
    mfi: 'Carrier-dependent',
    applications: ['Outdoor Products', 'Agricultural Film', 'Pipes'],
    inStock: true,
    description: 'UV stabilizer masterbatch for outdoor applications'
  },
  {
    id: 'comp-001',
    name: 'PP + 20% CaCO₃ Compound',
    grade: 'PP-CC20',
    type: 'pp-caco3',
    category: 'compounds',
    recycled: false,
    color: 'Natural',
    mfi: '15-25 g/10min',
    applications: ['Injection Molding', 'Containers', 'Automotive Parts'],
    inStock: true,
    description: 'Cost-effective PP compound with 20% calcium carbonate filler'
  },
  {
    id: 'comp-002',
    name: 'Glass Fiber Reinforced PP',
    grade: 'PP-GF30',
    type: 'fiber-reinforced',
    category: 'compounds',
    recycled: false,
    color: 'Natural',
    mfi: '10-20 g/10min',
    applications: ['Automotive', 'Electrical Housings', 'Industrial Parts'],
    inStock: true,
    description: '30% glass fiber reinforced PP for high-strength applications'
  },
  {
    id: 'comp-003',
    name: 'PA6 + Talc Engineering Compound',
    grade: 'PA6-T15',
    type: 'engineering',
    category: 'compounds',
    recycled: false,
    color: 'Black',
    mfi: 'N/A',
    applications: ['Under-hood Automotive', 'Electrical', 'Industrial'],
    inStock: true,
    description: 'Heat-resistant PA6 compound with talc reinforcement'
  },

  // Finished Parts & Products
  {
    id: 'fin-001',
    name: 'Automotive Interior Trim Panel',
    grade: 'PP-AUTO-001',
    type: 'industrial',
    category: 'finished',
    recycled: false,
    color: 'Black',
    mfi: 'N/A',
    applications: ['Automotive Interior', 'Dashboard Components'],
    inStock: false,
    description: 'Custom-molded PP interior trim panels for automotive'
  },
  {
    id: 'fin-002',
    name: 'Stackable Storage Container',
    grade: 'PP-CONT-002',
    type: 'household',
    category: 'finished',
    recycled: true,
    color: 'Various',
    mfi: 'N/A',
    applications: ['Storage', 'Organization', 'Household'],
    inStock: true,
    description: 'Durable stackable containers from recycled PP'
  },
  {
    id: 'fin-003',
    name: 'Industrial Pallet',
    grade: 'HDPE-PAL-003',
    type: 'industrial',
    category: 'finished',
    recycled: true,
    color: 'Black',
    mfi: 'N/A',
    applications: ['Logistics', 'Warehousing', 'Material Handling'],
    inStock: true,
    description: 'Heavy-duty recycled HDPE pallets for industrial use'
  },
  {
    id: 'fin-004',
    name: 'Food-Grade Packaging Container',
    grade: 'PP-PKG-004',
    type: 'packaging',
    category: 'finished',
    recycled: false,
    color: 'Clear',
    mfi: 'N/A',
    applications: ['Food Packaging', 'Takeaway Containers'],
    inStock: true,
    description: 'Food-safe PP containers with excellent clarity'
  }
];
