// Mock data for development and testing

export interface PolymerMaterial {
  id: string;
  name_fa: string;
  name_en: string;
  name_ar: string;
  grade: string;
  origin: string;
  recycled_percentage: number;
  price_range: string;
  image: string;
  category: string;
  mfi: string;
  color: string;
  applications: string[];
  inStock: boolean;
}

export interface BlogPost {
  id: string;
  title_fa: string;
  title_en: string;
  title_ar: string;
  excerpt_fa: string;
  excerpt_en: string;
  excerpt_ar: string;
  date: string;
  image: string;
  category: string;
  category_ar: string;
  readTime: string;
  readTime_ar: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text_fa: string;
  text_en: string;
  text_ar: string;
  avatar?: string;
}

// 12 Polymer Materials
export const polymerMaterials: PolymerMaterial[] = [
  {
    id: 'mat-001',
    name_fa: 'گرانول rPET بازیافتی',
    name_en: 'Recycled rPET Granules',
    name_ar: 'حبيبات rPET معاد تدويرها',
    grade: 'rPET-G100',
    origin: 'UAE',
    recycled_percentage: 100,
    price_range: '$800-950/MT',
    image: 'https://placehold.co/400x300/059669/ffffff.png?text=rPET',
    category: 'recycled',
    mfi: '0.8 g/10min',
    color: 'Clear',
    applications: ['Fiber', 'Bottles', 'Strapping'],
    inStock: true
  },
  {
    id: 'mat-002',
    name_fa: 'گرانول rHDPE سنگین',
    name_en: 'Recycled rHDPE Heavy Granules',
    name_ar: 'حبيبات rHDPE ثقيلة معاد تدويرها',
    grade: 'rHDPE-HG200',
    origin: 'Germany',
    recycled_percentage: 95,
    price_range: '$750-900/MT',
    image: 'https://placehold.co/400x300/0ea5e9/ffffff.png?text=rHDPE',
    category: 'recycled',
    mfi: '0.5-1.0 g/10min',
    color: 'Mixed',
    applications: ['Bins', 'Pallets', 'Industrial Parts'],
    inStock: true
  },
  {
    id: 'mat-003',
    name_fa: 'گرانول rPP تزریقی',
    name_en: 'Recycled rPP Injection Grade',
    name_ar: 'درجة حقن rPP معاد تدويرها',
    grade: 'rPP-INJ500',
    origin: 'Turkey',
    recycled_percentage: 100,
    price_range: '$700-850/MT',
    image: 'https://placehold.co/400x300/8b5cf6/ffffff.png?text=rPP',
    category: 'recycled',
    mfi: '25-35 g/10min',
    color: 'Grey',
    applications: ['Automotive', 'Containers', 'Furniture'],
    inStock: true
  },
  {
    id: 'mat-004',
    name_fa: 'PCR کامپاند سیاه',
    name_en: 'PCR Black Compound',
    name_ar: 'كمباوند PCR أسود',
    grade: 'PCR-BK300',
    origin: 'India',
    recycled_percentage: 80,
    price_range: '$650-800/MT',
    image: 'https://placehold.co/400x300/1f2937/ffffff.png?text=PCR',
    category: 'pcr',
    mfi: '15-25 g/10min',
    color: 'Black',
    applications: ['Automotive Interior', 'Appliances'],
    inStock: true
  },
  {
    id: 'mat-005',
    name_fa: 'LDPE ویرجین فیلم گرید',
    name_en: 'Virgin LDPE Film Grade',
    name_ar: 'درجة فيلم LDPE بكر',
    grade: 'LDPE-2420H',
    origin: 'Saudi Arabia',
    recycled_percentage: 0,
    price_range: '$1100-1250/MT',
    image: 'https://placehold.co/400x300/f59e0b/ffffff.png?text=LDPE',
    category: 'virgin',
    mfi: '2.0 g/10min',
    color: 'Natural',
    applications: ['Blown Film', 'Packaging', 'Shopping Bags'],
    inStock: true
  },
  {
    id: 'mat-006',
    name_fa: 'HDPE ویرجین بادی',
    name_en: 'Virgin HDPE Blow Molding',
    name_ar: 'HDPE بكر للقولبة بالنفخ',
    grade: 'HDPE-5502',
    origin: 'Iran',
    recycled_percentage: 0,
    price_range: '$1050-1200/MT',
    image: 'https://placehold.co/400x300/ef4444/ffffff.png?text=HDPE',
    category: 'virgin',
    mfi: '0.3 g/10min',
    color: 'Natural',
    applications: ['Bottles', 'Containers', 'Jerry Cans'],
    inStock: true
  },
  {
    id: 'mat-007',
    name_fa: 'PP هموپلیمر تزریقی',
    name_en: 'PP Homopolymer Injection',
    name_ar: 'بولي بروبيلين هموبوليمر للحقن',
    grade: 'PP-H500',
    origin: 'UAE',
    recycled_percentage: 0,
    price_range: '$1000-1150/MT',
    image: 'https://placehold.co/400x300/06b6d4/ffffff.png?text=PP-H',
    category: 'virgin',
    mfi: '25 g/10min',
    color: 'Natural',
    applications: ['Containers', 'Caps', 'Household'],
    inStock: false
  },
  {
    id: 'mat-008',
    name_fa: 'rLDPE سبک بازیافتی',
    name_en: 'Recycled rLDPE Light Grade',
    name_ar: 'درجة rLDPE خفيفة معاد تدويرها',
    grade: 'rLDPE-LG100',
    origin: 'Egypt',
    recycled_percentage: 90,
    price_range: '$600-750/MT',
    image: 'https://placehold.co/400x300/22c55e/ffffff.png?text=rLDPE',
    category: 'recycled',
    mfi: '1.5-3.0 g/10min',
    color: 'Natural',
    applications: ['Bags', 'Film', 'Packaging'],
    inStock: true
  },
  {
    id: 'mat-009',
    name_fa: 'مستربچ سفید PE',
    name_en: 'White PE Masterbatch',
    name_ar: 'ماستر باتش PE أبيض',
    grade: 'MB-W100',
    origin: 'China',
    recycled_percentage: 0,
    price_range: '$1500-1800/MT',
    image: 'https://placehold.co/400x300/f8fafc/000000.png?text=MB-White',
    category: 'masterbatch',
    mfi: 'Carrier-dependent',
    color: 'White',
    applications: ['Film', 'Injection', 'Blow Molding'],
    inStock: true
  },
  {
    id: 'mat-010',
    name_fa: 'PP کوپلیمر فیلم گرید',
    name_en: 'PP Copolymer Film Grade',
    name_ar: 'درجة فيلم PP كوبوليمر',
    grade: 'PP-R850',
    origin: 'Saudi Arabia',
    recycled_percentage: 0,
    price_range: '$1080-1220/MT',
    image: 'https://placehold.co/400x300/a855f7/ffffff.png?text=PP-C',
    category: 'virgin',
    mfi: '8.0 g/10min',
    color: 'Natural',
    applications: ['BOPP Film', 'CPP Film', 'Packaging'],
    inStock: true
  },
  {
    id: 'mat-011',
    name_fa: 'rPP نساجی بازیافتی',
    name_en: 'Recycled rPP Textile Grade',
    name_ar: 'درجة نسيج rPP معاد تدويرها',
    grade: 'rPP-T600',
    origin: 'Pakistan',
    recycled_percentage: 85,
    price_range: '$550-700/MT',
    image: 'https://placehold.co/400x300/64748b/ffffff.png?text=rPP-T',
    category: 'recycled',
    mfi: '12-18 g/10min',
    color: 'Black',
    applications: ['Woven Bags', 'Carpet Backing', 'Geotextiles'],
    inStock: true
  },
  {
    id: 'mat-012',
    name_fa: 'کامپاند PP + GF30',
    name_en: 'PP Glass Fiber 30% Compound',
    name_ar: 'كمباوند PP بألياف زجاجية 30٪',
    grade: 'PP-GF30',
    origin: 'Germany',
    recycled_percentage: 0,
    price_range: '$1800-2100/MT',
    image: 'https://placehold.co/400x300/334155/ffffff.png?text=PP-GF30',
    category: 'compound',
    mfi: '10-20 g/10min',
    color: 'Natural',
    applications: ['Automotive', 'Electrical', 'Industrial'],
    inStock: true
  }
];

// 8 Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title_fa: 'راهنمای جامع شاخص MFI در پلیمرها',
    title_en: 'Understanding MFI (Melt Flow Index) and Its Impact on Processing',
    title_ar: 'فهم مؤشر تدفق الذوبان (MFI) وتأثيره على المعالجة',
    excerpt_fa: 'بررسی عمیق تأثیر MFI بر پارامترهای تزریق و اکستروژن با راهنمای عملی برای تطبیق گریدها',
    excerpt_en: 'A technical deep-dive into how MFI affects injection molding and extrusion parameters',
    excerpt_ar: 'مراجعة تقنية لكيفية تأثير مؤشر تدفق الذوبان على الحقن والبثق مع إرشادات عملية لتعديل الدرجات',
    date: '2024-02-15',
    image: 'https://placehold.co/600x400/059669/ffffff.png?text=MFI+Guide',
    category: 'Technical Guide',
    category_ar: 'دليل تقني',
    readTime: '8 min',
    readTime_ar: '٨ دقائق'
  },
  {
    id: 'blog-002',
    title_fa: 'مقایسه HDPE بازیافتی و ویرجین',
    title_en: 'Recycled vs Virgin HDPE: When to Use Each',
    title_ar: 'HDPE المعاد تدويره مقابل البكر: متى تستخدم كل منهما',
    excerpt_fa: 'تفاوت‌های عملکردی واقعی بین گریدهای بازیافتی و ویرجین با داده‌های آزمایشگاهی',
    excerpt_en: 'Breaking down the real performance differences between recycled and virgin HDPE grades',
    excerpt_ar: 'تفصيل الفروق الحقيقية في الأداء بين درجات HDPE المعاد تدويرها والبكر مع بيانات مخبرية',
    date: '2024-02-10',
    image: 'https://placehold.co/600x400/0ea5e9/ffffff.png?text=HDPE+Compare',
    category: 'Material Science',
    category_ar: 'علوم المواد',
    readTime: '6 min',
    readTime_ar: '٦ دقائق'
  },
  {
    id: 'blog-003',
    title_fa: 'قوانین جدید اتحادیه اروپا برای محتوای بازیافتی',
    title_en: 'New EU Recycled Content Requirements',
    title_ar: 'متطلبات جديدة من الاتحاد الأوروبي للمحتوى المعاد تدويره',
    excerpt_fa: 'تحلیل مقررات آینده الزام حداقل محتوای بازیافتی در محصولات پلاستیکی',
    excerpt_en: 'Analysis of upcoming regulations requiring minimum recycled content in plastic products',
    excerpt_ar: 'تحليل للوائح القادمة التي تفرض حدًا أدنى من المحتوى المعاد تدويره في المنتجات البلاستيكية',
    date: '2024-02-05',
    image: 'https://placehold.co/600x400/8b5cf6/ffffff.png?text=EU+Regulations',
    category: 'Regulations',
    category_ar: 'لوائح',
    readTime: '10 min',
    readTime_ar: '١٠ دقائق'
  },
  {
    id: 'blog-004',
    title_fa: 'رفع مشکلات رایج در فرآوری PE بازیافتی',
    title_en: 'Processing Troubleshooting: Common Issues with Recycled PE',
    title_ar: 'حل مشاكل المعالجة: القضايا الشائعة مع PE المعاد تدويره',
    excerpt_fa: 'راه‌حل‌های عملی برای تاب‌برداشتگی، عیوب سطحی و سیکل‌های ناپایدار',
    excerpt_en: 'Practical solutions for warping, surface defects, and inconsistent cycle times',
    excerpt_ar: 'حلول عملية للتقوس وعيوب السطح ودورات الإنتاج غير المستقرة',
    date: '2024-01-28',
    image: 'https://placehold.co/600x400/f59e0b/ffffff.png?text=Troubleshooting',
    category: 'Processing Tips',
    category_ar: 'نصائح المعالجة',
    readTime: '7 min',
    readTime_ar: '٧ دقائق'
  },
  {
    id: 'blog-005',
    title_fa: 'دبی به عنوان هاب تجارت پلیمر',
    title_en: 'Dubai as a Polymer Trading Hub',
    title_ar: 'دبي كمركز لتجارة البوليمرات',
    excerpt_fa: 'چرا تأمین‌کنندگان مستقر در دبی زمان تحویل بهتری برای بازارهای منطقه ارائه می‌دهند',
    excerpt_en: 'Why Dubai-based suppliers can offer better lead times for MENA and European markets',
    excerpt_ar: 'لماذا يمكن للموردين في دبي تقديم أزمنة تسليم أفضل لأسواق الشرق الأوسط وأوروبا',
    date: '2024-01-20',
    image: 'https://placehold.co/600x400/ef4444/ffffff.png?text=Dubai+Hub',
    category: 'Industry Insights',
    category_ar: 'رؤى صناعية',
    readTime: '5 min',
    readTime_ar: '٥ دقائق'
  },
  {
    id: 'blog-006',
    title_fa: 'ردیابی مواد: انتظارات از تأمین‌کننده',
    title_en: 'Material Traceability: What You Should Expect',
    title_ar: 'تتبع المواد: ما الذي يجب أن تتوقعه',
    excerpt_fa: 'تفاوت بین ادعاهای بازاریابی و داده‌های واقعی ردیابی',
    excerpt_en: 'The difference between marketing claims and actual traceability data',
    excerpt_ar: 'الفرق بين الادعاءات التسويقية وبيانات التتبع الفعلية',
    date: '2024-01-15',
    image: 'https://placehold.co/600x400/06b6d4/ffffff.png?text=Traceability',
    category: 'Quality Standards',
    category_ar: 'معايير الجودة',
    readTime: '6 min',
    readTime_ar: '٦ دقائق'
  },
  {
    id: 'blog-007',
    title_fa: 'آینده پلیمرهای زیست‌تخریب‌پذیر',
    title_en: 'The Future of Biodegradable Polymers',
    title_ar: 'مستقبل البوليمرات القابلة للتحلل الحيوي',
    excerpt_fa: 'بررسی پیشرفت‌های اخیر در پلیمرهای زیست‌تخریب‌پذیر و کاربردهای صنعتی آنها',
    excerpt_en: 'Examining recent advances in biodegradable polymers and their industrial applications',
    excerpt_ar: 'استعراض التقدم الأخير في البوليمرات القابلة للتحلل الحيوي وتطبيقاتها الصناعية',
    date: '2024-01-10',
    image: 'https://placehold.co/600x400/22c55e/ffffff.png?text=Biodegradable',
    category: 'Sustainability',
    category_ar: 'الاستدامة',
    readTime: '9 min',
    readTime_ar: '٩ دقائق'
  },
  {
    id: 'blog-008',
    title_fa: 'بهینه‌سازی هزینه با مواد بازیافتی',
    title_en: 'Cost Optimization with Recycled Materials',
    title_ar: 'تحسين التكاليف باستخدام المواد المعاد تدويرها',
    excerpt_fa: 'استراتژی‌های کاهش هزینه تولید با استفاده از پلیمرهای بازیافتی بدون افت کیفیت',
    excerpt_en: 'Strategies for reducing production costs using recycled polymers without quality loss',
    excerpt_ar: 'استراتيجيات خفض تكاليف الإنتاج باستخدام البوليمرات المعاد تدويرها دون فقدان الجودة',
    date: '2024-01-05',
    image: 'https://placehold.co/600x400/a855f7/ffffff.png?text=Cost+Optimization',
    category: 'Business',
    category_ar: 'الأعمال',
    readTime: '7 min',
    readTime_ar: '٧ دقائق'
  }
];

// 6 Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'احمد الراشدی',
    company: 'Al Rashdi Packaging LLC',
    text_fa: 'کیفیت مواد بازیافتی پلی‌سورس فوق‌العاده است. بیش از ۲ سال است که با آنها کار می‌کنیم و هیچ مشکلی در خط تولید نداشته‌ایم.',
    text_en: 'The quality of PolySource recycled materials is exceptional. We have been working with them for over 2 years with no production line issues.',
    text_ar: 'جودة المواد المعاد تدويرها من بولي سورس رائعة. نعمل معهم منذ أكثر من عامين دون أي مشكلات في خط الإنتاج.'
  },
  {
    id: 'test-002',
    name: 'فاطمه کریمی',
    company: 'Karimi Industries',
    text_fa: 'پشتیبانی فنی و سرعت پاسخگویی به درخواست‌های قیمت واقعاً حرفه‌ای است. پاسخ همیشه در کمتر از ۴۸ ساعت می‌رسد.',
    text_en: 'Their technical support and quote response time is truly professional. Response always comes in less than 48 hours.',
    text_ar: 'دعمهم الفني وسرعة الرد على عروض الأسعار احترافية للغاية. الرد يصل دائمًا في أقل من ٤٨ ساعة.'
  },
  {
    id: 'test-003',
    name: 'محمد العلی',
    company: 'Gulf Plastics Manufacturing',
    text_fa: 'شفافیت در منشأ مواد و گواهینامه‌ها برای ما بسیار مهم بود. پلی‌سورس این نیاز را به خوبی برآورده می‌کند.',
    text_en: 'Transparency in material origin and certifications was very important to us. PolySource meets this need perfectly.',
    text_ar: 'الشفافية في مصدر المواد والشهادات كانت مهمة جدًا لنا. بولي سورس تلبي هذا الاحتياج بشكل مثالي.'
  },
  {
    id: 'test-004',
    name: 'سارا پاکروان',
    company: 'Pakravan Auto Parts',
    text_fa: 'برای قطعات خودرویی به کامپاندهای با کیفیت ثابت نیاز داریم. تنوع محصولات و کیفیت پلی‌سورس بی‌نظیر است.',
    text_en: 'For automotive parts, we need compounds with consistent quality. PolySource product variety and quality is unmatched.',
    text_ar: 'لأجزاء السيارات نحتاج إلى كمباوند بجودة ثابتة. تنوع وجودة منتجات بولي سورس لا مثيل لها.'
  },
  {
    id: 'test-005',
    name: 'خالد المنصور',
    company: 'Al Mansour Trading',
    text_fa: 'قیمت‌گذاری رقابتی و تحویل به موقع، دو فاکتور کلیدی برای ما هستند که پلی‌سورس در هر دو عالی است.',
    text_en: 'Competitive pricing and on-time delivery are key factors for us, and PolySource excels in both.',
    text_ar: 'التسعير التنافسي والتسليم في الوقت المحدد عاملان أساسيان بالنسبة لنا، وبولي سورس متميزة في كليهما.'
  },
  {
    id: 'test-006',
    name: 'نسرین اکبری',
    company: 'Akbari Household Products',
    text_fa: 'از زمانی که به مواد بازیافتی پلی‌سورس روی آوردیم، هم هزینه‌ها کاهش یافته و هم مشتریان ما از رویکرد سبز ما استقبال کرده‌اند.',
    text_en: 'Since switching to PolySource recycled materials, costs have decreased and our customers appreciate our green approach.',
    text_ar: 'منذ الانتقال إلى مواد بولي سورس المعاد تدويرها، انخفضت التكاليف ويقدر عملاؤنا نهجنا المستدام.'
  }
];

// Simulate API delay
export const fetchMaterials = (): Promise<PolymerMaterial[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(polymerMaterials), 300);
  });
};

export const fetchBlogPosts = (): Promise<BlogPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(blogPosts), 300);
  });
};

export const fetchTestimonials = (): Promise<Testimonial[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(testimonials), 300);
  });
};
