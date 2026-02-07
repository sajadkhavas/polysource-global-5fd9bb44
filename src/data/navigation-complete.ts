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
      en: 'Thermoplastic materials, compounds and finished polymer products for industrial supply chains.',
      ar: 'مواد لدائنية حرارية ومركبات ومنتجات بوليمرية نهائية لسلاسل التوريد الصناعية.'
    },
    children: [
      {
        id: 'petrochemical-raw-materials',
        level: 2,
        label: { en: 'Petrochemical Raw Materials', ar: 'المواد الخام البتروكيماوية' },
        href: '/polymer-products/petrochemical',
        isPetrochemical: true,
        children: [
          { id: 'ldpe', level: 3, label: { en: 'Low-Density Polyethylene (LDPE)', ar: 'بولي إيثيلين منخفض الكثافة' }, href: '/polymer-products/petrochemical/ldpe' },
          { id: 'lldpe', level: 3, label: { en: 'Linear Low-Density Polyethylene (LLDPE)', ar: 'بولي إيثيلين منخفض الكثافة الخطي' }, href: '/polymer-products/petrochemical/lldpe' },
          { id: 'hdpe', level: 3, label: { en: 'High-Density Polyethylene (HDPE)', ar: 'بولي إيثيلين عالي الكثافة' }, href: '/polymer-products/petrochemical/hdpe' },
          { id: 'pp-h', level: 3, label: { en: 'Polypropylene Homopolymer (PP-H)', ar: 'بولي بروبيلين هموبوليمر' }, href: '/polymer-products/petrochemical/pp-h' },
          { id: 'pp-c', level: 3, label: { en: 'Polypropylene Copolymer (PP-C)', ar: 'بولي بروبيلين كوبوليمر' }, href: '/polymer-products/petrochemical/pp-c' },
          { id: 'pp-film-textile', level: 3, label: { en: 'Film & Textile PP Grades', ar: 'درجات PP للفيلم والمنسوجات' }, href: '/polymer-products/petrochemical/pp-film-textile' },
          { id: 'ps', level: 3, label: { en: 'Polystyrene (PS)', ar: 'بولي ستايرين' }, href: '/polymer-products/petrochemical/ps' },
          { id: 'pvc', level: 3, label: { en: 'PVC', ar: 'بي في سي' }, href: '/polymer-products/petrochemical/pvc' },
          { id: 'pc', level: 3, label: { en: 'Polycarbonate (PC)', ar: 'بولي كربونات' }, href: '/polymer-products/petrochemical/pc' },
          { id: 'pa6-pa66', level: 3, label: { en: 'Polyamide (PA6, PA66)', ar: 'بولي أميد (PA6, PA66)' }, href: '/polymer-products/petrochemical/pa6-pa66' },
          { id: 'abs-san', level: 3, label: { en: 'ABS & SAN', ar: 'إيه بي إس و إس إيه إن' }, href: '/polymer-products/petrochemical/abs-san' }
        ]
      },
      {
        id: 'recycled-materials',
        level: 2,
        label: { en: 'Recycled Materials', ar: 'المواد المعاد تدويرها' },
        href: '/polymer-products/recycled',
        isRecycled: true,
        children: [
          {
            id: 'rpe',
            level: 3,
            label: { en: 'Recycled Polyethylene (rPE)', ar: 'بولي إيثيلين معاد تدويره' },
            href: '/polymer-products/recycled/rpe',
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
            children: [
              { id: 'rpp-textile-granules', level: 4, label: { en: 'Textile Granules', ar: 'حبيبات نسيجية' }, href: '/polymer-products/recycled/rpp/textile-granules' },
              { id: 'rpp-injection-granules', level: 4, label: { en: 'Injection Granules', ar: 'حبيبات للحقن' }, href: '/polymer-products/recycled/rpp/injection-granules' },
              { id: 'rpp-colored-compounds', level: 4, label: { en: 'Colored Compounds', ar: 'مركبات ملونة' }, href: '/polymer-products/recycled/rpp/colored-compounds' }
            ]
          },
          {
            id: 'other-recycled',
            level: 3,
            label: { en: 'Other Recycled Polymers', ar: 'بوليمرات أخرى معاد تدويرها' },
            href: '/polymer-products/recycled/other',
            children: [
              { id: 'recycled-abs', level: 4, label: { en: 'ABS', ar: 'إيه بي إس' }, href: '/polymer-products/recycled/other/abs' },
              { id: 'recycled-ps', level: 4, label: { en: 'PS', ar: 'بي إس' }, href: '/polymer-products/recycled/other/ps' },
              { id: 'recycled-pet', level: 4, label: { en: 'PET', ar: 'بي إي تي' }, href: '/polymer-products/recycled/other/pet' },
              { id: 'recycled-pvc', level: 4, label: { en: 'PVC', ar: 'بي في سي' }, href: '/polymer-products/recycled/other/pvc' }
            ]
          }
        ]
      },
      {
        id: 'compounds-masterbatches',
        level: 2,
        label: { en: 'Compounds & Masterbatches', ar: 'المركبات والمسترباتش' },
        href: '/polymer-products/compounds',
        children: [
          {
            id: 'color-masterbatch',
            level: 3,
            label: { en: 'Color Masterbatch', ar: 'ماسترباتش ملون' },
            href: '/polymer-products/compounds/color-masterbatch',
            children: [
              { id: 'white-masterbatch', level: 4, label: { en: 'White', ar: 'أبيض' }, href: '/polymer-products/compounds/color-masterbatch/white' },
              { id: 'black-masterbatch', level: 4, label: { en: 'Black', ar: 'أسود' }, href: '/polymer-products/compounds/color-masterbatch/black' },
              { id: 'custom-color-masterbatch', level: 4, label: { en: 'Custom Colors', ar: 'ألوان مخصصة' }, href: '/polymer-products/compounds/color-masterbatch/custom-colors' }
            ]
          },
          {
            id: 'additive-masterbatch',
            level: 3,
            label: { en: 'Additive Masterbatch', ar: 'ماسترباتش مضاف' },
            href: '/polymer-products/compounds/additive-masterbatch',
            children: [
              { id: 'anti-uv', level: 4, label: { en: 'Anti-UV', ar: 'مضاد للأشعة فوق البنفسجية' }, href: '/polymer-products/compounds/additive-masterbatch/anti-uv' },
              { id: 'anti-static', level: 4, label: { en: 'Antistatic', ar: 'مضاد للكهرباء الساكنة' }, href: '/polymer-products/compounds/additive-masterbatch/antistatic' },
              { id: 'anti-block', level: 4, label: { en: 'Anti-block', ar: 'مضاد الالتصاق' }, href: '/polymer-products/compounds/additive-masterbatch/anti-block' },
              { id: 'slip', level: 4, label: { en: 'Slip', ar: 'منزلق' }, href: '/polymer-products/compounds/additive-masterbatch/slip' }
            ]
          },
          {
            id: 'filled-compounds',
            level: 3,
            label: { en: 'Filled Compounds', ar: 'مركبات مملوءة' },
            href: '/polymer-products/compounds/filled-compounds',
            children: [
              { id: 'pp-caco3-compound', level: 4, label: { en: 'PP Compound with CaCO₃', ar: 'مركب PP مع CaCO₃' }, href: '/polymer-products/compounds/filled-compounds/pp-caco3' },
              { id: 'pa-talc-compound', level: 4, label: { en: 'PA Compound with Talc', ar: 'مركب PA مع التلك' }, href: '/polymer-products/compounds/filled-compounds/pa-talc' }
            ]
          },
          { id: 'fiber-reinforced-compounds', level: 3, label: { en: 'Fiber-Reinforced Compounds', ar: 'مركبات مدعمة بالألياف' }, href: '/polymer-products/compounds/fiber-reinforced' },
          { id: 'engineering-compounds', level: 3, label: { en: 'Engineering Compounds', ar: 'مركبات هندسية' }, href: '/polymer-products/compounds/engineering' },
          {
            id: 'custom-order',
            level: 3,
            label: { en: 'Custom Order', ar: 'طلب مخصص' },
            href: '/polymer-products/compounds/custom-order',
            children: [
              { id: 'custom-masterbatch-form', level: 4, label: { en: 'Masterbatch Request Form', ar: 'نموذج طلب مسترباتش' }, href: '/polymer-products/compounds/custom-order/masterbatch-form' },
              { id: 'custom-compound-form', level: 4, label: { en: 'Compound Request Form', ar: 'نموذج طلب كامباوند' }, href: '/polymer-products/compounds/custom-order/compound-form' },
              { id: 'sds-spec-upload', level: 4, label: { en: 'Submit Specs / SDS', ar: 'إرسال المواصفات / SDS' }, href: '/polymer-products/compounds/custom-order/specs-sds' }
            ]
          }
        ]
      },
      {
        id: 'finished-products',
        level: 2,
        label: { en: 'Finished Polymer Parts & Products', ar: 'القطع والمنتجات البوليمرية المصنعة' },
        href: '/polymer-products/finished-products',
        children: [
          { id: 'industrial-parts', level: 3, label: { en: 'Industrial Parts (Automotive, Machinery)', ar: 'قطع صناعية (السيارات، الآلات)' }, href: '/polymer-products/finished-products/industrial-parts' },
          { id: 'household-items', level: 3, label: { en: 'Polymer Household Items', ar: 'أدوات منزلية بوليمرية' }, href: '/polymer-products/finished-products/household-items' },
          { id: 'packaging-products', level: 3, label: { en: 'Packaging Products', ar: 'منتجات التعبئة والتغليف' }, href: '/polymer-products/finished-products/packaging-products' },
          { id: 'consumer-decorative', level: 3, label: { en: 'Consumer & Decorative Products', ar: 'منتجات استهلاكية وزخرفية' }, href: '/polymer-products/finished-products/consumer-decorative' },
          { id: 'custom-molded-parts', level: 3, label: { en: 'Custom Molded Products', ar: 'منتجات مصبوبة حسب الطلب' }, href: '/polymer-products/finished-products/custom-molded-parts' }
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
      { id: 'technical-consulting', level: 2, label: { en: 'Technical Consulting & Material Selection', ar: 'استشارات فنية واختيار المواد' }, href: '/services/technical-consulting' },
      { id: 'custom-formulation', level: 2, label: { en: 'Custom Formulation Design', ar: 'تصميم تركيبات مخصصة' }, href: '/services/custom-formulation' },
      { id: 'quality-testing', level: 2, label: { en: 'Quality Control & Testing', ar: 'مراقبة الجودة والاختبار' }, href: '/services/quality-testing' },
      { id: 'transport-logistics', level: 2, label: { en: 'Transport & Logistics', ar: 'النقل واللوجستيات' }, href: '/services/transport-logistics' }
    ]
  },
  {
    id: 'insights',
    level: 1,
    label: { en: 'News & Technical Knowledge', ar: 'الأخبار والمعرفة التقنية' },
    href: '/insights',
    children: [
      { id: 'market-analysis', level: 2, label: { en: 'Polymer Market Analysis', ar: 'تحليل سوق البوليمرات' }, href: '/insights/market-analysis' },
      { id: 'price-updates', level: 2, label: { en: 'Price Updates', ar: 'تحديثات الأسعار' }, href: '/insights/price-updates' },
      { id: 'educational-articles', level: 2, label: { en: 'Educational Articles', ar: 'مقالات تعليمية' }, href: '/insights/educational-articles' }
    ]
  },
  {
    id: 'about',
    level: 1,
    label: { en: 'About Us', ar: 'من نحن' },
    href: '/about',
    children: [
      { id: 'company-introduction', level: 2, label: { en: 'Company Introduction', ar: 'تعريف بالشركة' }, href: '/about/company-introduction' },
      { id: 'technical-management-team', level: 2, label: { en: 'Technical & Management Team', ar: 'الفريق الفني والإداري' }, href: '/about/team' },
      { id: 'licenses-standards', level: 2, label: { en: 'Licenses & Standards', ar: 'التراخيص والمعايير' }, href: '/about/licenses-standards' },
      { id: 'contact-us', level: 2, label: { en: 'Contact Us', ar: 'اتصل بنا' }, href: '/about/contact-us' }
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
