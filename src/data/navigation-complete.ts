export interface NavigationItem {
  id: string;
  level: number;
  label: {
    en: string;
    ar: string;
  };
  href: string;
  description?: {
    en: string;
    ar: string;
  };
  icon?: string;
  children?: NavigationItem[];
  productCount?: number;
  isRecycled?: boolean;
  isPetrochemical?: boolean;
}

export const completeNavigation: NavigationItem[] = [
  {
    id: 'polymer-products',
    level: 1,
    label: {
      en: 'Polymer Products',
      ar: 'المنتجات البوليمرية'
    },
    href: '/polymer-products',
    description: {
      en: 'Comprehensive range of thermoplastic and thermoset materials used across industries',
      ar: 'مجموعة شاملة من المواد الحرارية والمصلدة بالحرارة المستخدمة في مختلف الصناعات'
    },
    children: [
      {
        id: 'petrochemical-raw-materials',
        level: 2,
        label: {
          en: 'Petrochemical Raw Materials',
          ar: 'المواد الخام البتروكيماوية'
        },
        href: '/polymer-products/petrochemical',
        description: {
          en: 'Base polymers: PE, PP, PS, PC, ABS, PVC for various applications',
          ar: 'بوليمرات أساسية: PE, PP, PS, PC, ABS, PVC لتطبيقات متنوعة'
        },
        productCount: 9,
        isPetrochemical: true,
        children: [
          { id: 'ldpe', level: 3, label: { en: 'Low-Density Polyethylene (LDPE)', ar: 'بولي إيثيلين منخفض الكثافة' }, href: '/polymer-products/petrochemical/ldpe', description: { en: 'Soft, flexible polymer for packaging films, cable coatings', ar: 'بوليمر ناعم ومرن لأفلام التعبئة وطلاءات الكابلات' }, productCount: 2 },
          { id: 'lldpe', level: 3, label: { en: 'Linear Low-Density Polyethylene (LLDPE)', ar: 'بولي إيثيلين منخفض الكثافة الخطي' }, href: '/polymer-products/petrochemical/lldpe', productCount: 1 },
          { id: 'hdpe', level: 3, label: { en: 'High-Density Polyethylene (HDPE)', ar: 'بولي إيثيلين عالي الكثافة' }, href: '/polymer-products/petrochemical/hdpe', productCount: 2 },
          { id: 'pp-h', level: 3, label: { en: 'Polypropylene Homopolymer (PP-H)', ar: 'بولي بروبيلين هموبوليمر' }, href: '/polymer-products/petrochemical/pp-h', productCount: 1 },
          { id: 'pp-c', level: 3, label: { en: 'Polypropylene Copolymer (PP-C)', ar: 'بولي بروبيلين كوبوليمر' }, href: '/polymer-products/petrochemical/pp-c', productCount: 1 },
          { id: 'ps', level: 3, label: { en: 'Polystyrene (PS)', ar: 'بولي ستايرين' }, href: '/polymer-products/petrochemical/ps', productCount: 1 },
          { id: 'pc', level: 3, label: { en: 'Polycarbonate (PC)', ar: 'بولي كربونات' }, href: '/polymer-products/petrochemical/pc', productCount: 0 },
          { id: 'abs-san', level: 3, label: { en: 'ABS & SAN', ar: 'إيه بي إس و إس إيه إن' }, href: '/polymer-products/petrochemical/abs-san', productCount: 0 },
          { id: 'pvc', level: 3, label: { en: 'PVC', ar: 'بي في سي' }, href: '/polymer-products/petrochemical/pvc', productCount: 0 }
        ]
      },
      {
        id: 'recycled-materials',
        level: 2,
        label: {
          en: 'Recycled Materials',
          ar: 'المواد المعاد تدويرها'
        },
        href: '/polymer-products/recycled',
        description: {
          en: 'Environmentally friendly recycled polymers for sustainable applications',
          ar: 'بوليمرات معاد تدويرها صديقة للبيئة لتطبيقات مستدامة'
        },
        productCount: 7,
        isRecycled: true,
        children: [
          {
            id: 'rpe',
            level: 3,
            label: { en: 'Recycled Polyethylene (rPE)', ar: 'بولي إيثيلين معاد تدويره' },
            href: '/polymer-products/recycled/rpe',
            productCount: 3,
            children: [
              { id: 'rpe-light-granules', level: 4, label: { en: 'Light Granules', ar: 'حبيبات خفيفة' }, href: '/polymer-products/recycled/rpe/light-granules' },
              { id: 'rpe-heavy-granules', level: 4, label: { en: 'Heavy Granules', ar: 'حبيبات ثقيلة' }, href: '/polymer-products/recycled/rpe/heavy-granules' },
              { id: 'rpe-film-waste', level: 4, label: { en: 'Film & Nylon Waste', ar: 'نفايات الأفلام والنايلون' }, href: '/polymer-products/recycled/rpe/film-waste' }
            ]
          },
          {
            id: 'rpp',
            level: 3,
            label: { en: 'Recycled Polypropylene (rPP)', ar: 'بولي بروبيلين معاد تدويره' },
            href: '/polymer-products/recycled/rpp',
            productCount: 3,
            children: [
              { id: 'rpp-textile-granules', level: 4, label: { en: 'Textile Granules', ar: 'حبيبات نسيجية' }, href: '/polymer-products/recycled/rpp/textile-granules' },
              { id: 'rpp-injection-granules', level: 4, label: { en: 'Injection Granules', ar: 'حبيبات للحقن' }, href: '/polymer-products/recycled/rpp/injection-granules' },
              { id: 'rpp-colored-compounds', level: 4, label: { en: 'Colored Compounds (Black, Gray, Colored)', ar: 'مركبات ملونة (أسود، رمادي، ملون)' }, href: '/polymer-products/recycled/rpp/colored-compounds' }
            ]
          },
          {
            id: 'other-recycled',
            level: 3,
            label: { en: 'Other Recycled Polymers', ar: 'بوليمرات أخرى معاد تدويرها' },
            href: '/polymer-products/recycled/other',
            productCount: 1,
            children: [
              { id: 'recycled-abs', level: 4, label: { en: 'Recycled ABS', ar: 'إيه بي إس معاد تدويره' }, href: '/polymer-products/recycled/other/abs' },
              { id: 'recycled-ps', level: 4, label: { en: 'Recycled PS', ar: 'بي إس معاد تدويره' }, href: '/polymer-products/recycled/other/ps' },
              { id: 'recycled-pet', level: 4, label: { en: 'Recycled PET', ar: 'بي إي تي معاد تدويره' }, href: '/polymer-products/recycled/other/pet' },
              { id: 'recycled-pvc', level: 4, label: { en: 'Recycled PVC', ar: 'بي في سي معاد تدويره' }, href: '/polymer-products/recycled/other/pvc' }
            ]
          }
        ]
      },
      {
        id: 'compounds-masterbatches',
        level: 2,
        label: { en: 'Compounds & Masterbatches', ar: 'المركبات والمسترباتش' },
        href: '/polymer-products/compounds',
        productCount: 5,
        children: [
          { id: 'color-masterbatch', level: 3, label: { en: 'Color Masterbatch', ar: 'ماسترباتش ملون' }, href: '/polymer-products/compounds/color-masterbatch' },
          { id: 'additive-masterbatch', level: 3, label: { en: 'Additive Masterbatch', ar: 'ماسترباتش مضاف' }, href: '/polymer-products/compounds/additive-masterbatch' },
          {
            id: 'filled-compounds',
            level: 3,
            label: { en: 'Filled Compounds', ar: 'مركبات مملوءة' },
            href: '/polymer-products/compounds/filled-compounds',
            children: [
              { id: 'pp-caco3-compound', level: 4, label: { en: 'PP Compound with CaCO₃', ar: 'مركب PP مع CaCO₃' }, href: '/polymer-products/compounds/filled/pp-caco3' },
              { id: 'pa-talc-compound', level: 4, label: { en: 'PA Compound with Talc', ar: 'مركب PA مع التلك' }, href: '/polymer-products/compounds/filled/pa-talc' }
            ]
          },
          { id: 'fiber-reinforced-compounds', level: 3, label: { en: 'Fiber-Reinforced Compounds', ar: 'مركبات مدعمة بالألياف' }, href: '/polymer-products/compounds/fiber-reinforced' },
          { id: 'engineering-compounds', level: 3, label: { en: 'Engineering Compounds', ar: 'مركبات هندسية' }, href: '/polymer-products/compounds/engineering' },
          { id: 'special-masterbatches', level: 3, label: { en: 'Special Masterbatches', ar: 'ماسترباتش خاص' }, href: '/polymer-products/compounds/special-masterbatches' }
        ]
      },
      {
        id: 'finished-parts',
        level: 2,
        label: { en: 'Finished Polymer Parts', ar: 'القطع البوليمرية المصنعة' },
        href: '/polymer-products/finished-parts',
        productCount: 4,
        children: [
          { id: 'industrial-parts', level: 3, label: { en: 'Industrial Parts', ar: 'قطع صناعية' }, href: '/polymer-products/finished/industrial-parts' },
          { id: 'household-items', level: 3, label: { en: 'Household Items', ar: 'أدوات منزلية' }, href: '/polymer-products/finished/household-items' },
          { id: 'packaging-products', level: 3, label: { en: 'Packaging Products', ar: 'منتجات التعبئة' }, href: '/polymer-products/finished/packaging' },
          { id: 'consumer-products', level: 3, label: { en: 'Consumer Products', ar: 'منتجات استهلاكية' }, href: '/polymer-products/finished/consumer' },
          { id: 'custom-parts', level: 3, label: { en: 'Custom Molded Parts', ar: 'قطع مصبوبة حسب الطلب' }, href: '/polymer-products/finished/custom' }
        ]
      }
    ]
  },
  {
    id: 'services',
    level: 1,
    label: { en: 'Services', ar: 'الخدمات' },
    href: '/services',
    children: [
      { id: 'technical-consulting', level: 2, label: { en: 'Technical Consulting & Material Selection', ar: 'استشارات فنية واختيار المواد' }, href: '/services/consulting' },
      { id: 'formulation-design', level: 2, label: { en: 'Custom Formulation Design', ar: 'تصميم تركيبات مخصصة' }, href: '/services/formulation' },
      { id: 'quality-control', level: 2, label: { en: 'Quality Control & Testing', ar: 'مراقبة الجودة والاختبار' }, href: '/services/quality-control' },
      { id: 'transport-logistics', level: 2, label: { en: 'Transport & Logistics', ar: 'النقل واللوجستيات' }, href: '/services/logistics' }
    ]
  },
  {
    id: 'insights',
    level: 1,
    label: { en: 'News & Technical Knowledge', ar: 'الأخبار والمعرفة التقنية' },
    href: '/insights',
    children: [
      { id: 'market-analysis', level: 2, label: { en: 'Polymer Market Analysis', ar: 'تحليل سوق البوليمرات' }, href: '/insights/market-analysis' },
      { id: 'educational-articles', level: 2, label: { en: 'Educational Articles', ar: 'مقالات تعليمية' }, href: '/insights/articles' }
    ]
  },
  {
    id: 'about',
    level: 1,
    label: { en: 'About Us', ar: 'من نحن' },
    href: '/about',
    children: [
      { id: 'company-introduction', level: 2, label: { en: 'Company Introduction', ar: 'تعريف بالشركة' }, href: '/about/company' },
      { id: 'contact-us', level: 2, label: { en: 'Contact Us', ar: 'اتصل بنا' }, href: '/contact' }
    ]
  }
];

export function findNavigationItem(path: string): NavigationItem | null {
  function searchItems(items: NavigationItem[]): NavigationItem | null {
    for (const item of items) {
      if (item.href === path) return item;
      if (item.children) {
        const found = searchItems(item.children);
        if (found) return found;
      }
    }
    return null;
  }

  return searchItems(completeNavigation);
}

export function getBreadcrumbs(path: string): NavigationItem[] {
  const breadcrumbs: NavigationItem[] = [];

  function findPath(items: NavigationItem[], targetPath: string): boolean {
    for (const item of items) {
      if (item.href === targetPath) {
        breadcrumbs.unshift(item);
        return true;
      }
      if (item.children && findPath(item.children, targetPath)) {
        breadcrumbs.unshift(item);
        return true;
      }
    }

    return false;
  }

  findPath(completeNavigation, path);
  return breadcrumbs;
}

export function flattenNavigation(): NavigationItem[] {
  const result: NavigationItem[] = [];

  function flatten(items: NavigationItem[]) {
    for (const item of items) {
      result.push(item);
      if (item.children) flatten(item.children);
    }
  }

  flatten(completeNavigation);
  return result;
}
