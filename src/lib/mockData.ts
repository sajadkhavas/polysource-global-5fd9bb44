// Mock data for development and testing

export interface PolymerMaterial {
  id: string;
  name_fa: string;
  name_en: string;
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
  excerpt_fa: string;
  excerpt_en: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text_fa: string;
  text_en: string;
  avatar?: string;
}

// 12 Polymer Materials
export const polymerMaterials: PolymerMaterial[] = [
  {
    id: 'mat-001',
    name_fa: 'گرانول rPET بازیافتی',
    name_en: 'Recycled rPET Granules',
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
    excerpt_fa: 'بررسی عمیق تأثیر MFI بر پارامترهای تزریق و اکستروژن با راهنمای عملی برای تطبیق گریدها',
    excerpt_en: 'A technical deep-dive into how MFI affects injection molding and extrusion parameters',
    date: '2024-02-15',
    image: 'https://placehold.co/600x400/059669/ffffff.png?text=MFI+Guide',
    category: 'Technical Guide',
    readTime: '8 min'
  },
  {
    id: 'blog-002',
    title_fa: 'مقایسه HDPE بازیافتی و ویرجین',
    title_en: 'Recycled vs Virgin HDPE: When to Use Each',
    excerpt_fa: 'تفاوت‌های عملکردی واقعی بین گریدهای بازیافتی و ویرجین با داده‌های آزمایشگاهی',
    excerpt_en: 'Breaking down the real performance differences between recycled and virgin HDPE grades',
    date: '2024-02-10',
    image: 'https://placehold.co/600x400/0ea5e9/ffffff.png?text=HDPE+Compare',
    category: 'Material Science',
    readTime: '6 min'
  },
  {
    id: 'blog-003',
    title_fa: 'قوانین جدید اتحادیه اروپا برای محتوای بازیافتی',
    title_en: 'New EU Recycled Content Requirements',
    excerpt_fa: 'تحلیل مقررات آینده الزام حداقل محتوای بازیافتی در محصولات پلاستیکی',
    excerpt_en: 'Analysis of upcoming regulations requiring minimum recycled content in plastic products',
    date: '2024-02-05',
    image: 'https://placehold.co/600x400/8b5cf6/ffffff.png?text=EU+Regulations',
    category: 'Regulations',
    readTime: '10 min'
  },
  {
    id: 'blog-004',
    title_fa: 'رفع مشکلات رایج در فرآوری PE بازیافتی',
    title_en: 'Processing Troubleshooting: Common Issues with Recycled PE',
    excerpt_fa: 'راه‌حل‌های عملی برای تاب‌برداشتگی، عیوب سطحی و سیکل‌های ناپایدار',
    excerpt_en: 'Practical solutions for warping, surface defects, and inconsistent cycle times',
    date: '2024-01-28',
    image: 'https://placehold.co/600x400/f59e0b/ffffff.png?text=Troubleshooting',
    category: 'Processing Tips',
    readTime: '7 min'
  },
  {
    id: 'blog-005',
    title_fa: 'دبی به عنوان هاب تجارت پلیمر',
    title_en: 'Dubai as a Polymer Trading Hub',
    excerpt_fa: 'چرا تأمین‌کنندگان مستقر در دبی زمان تحویل بهتری برای بازارهای منطقه ارائه می‌دهند',
    excerpt_en: 'Why Dubai-based suppliers can offer better lead times for MENA and European markets',
    date: '2024-01-20',
    image: 'https://placehold.co/600x400/ef4444/ffffff.png?text=Dubai+Hub',
    category: 'Industry Insights',
    readTime: '5 min'
  },
  {
    id: 'blog-006',
    title_fa: 'ردیابی مواد: انتظارات از تأمین‌کننده',
    title_en: 'Material Traceability: What You Should Expect',
    excerpt_fa: 'تفاوت بین ادعاهای بازاریابی و داده‌های واقعی ردیابی',
    excerpt_en: 'The difference between marketing claims and actual traceability data',
    date: '2024-01-15',
    image: 'https://placehold.co/600x400/06b6d4/ffffff.png?text=Traceability',
    category: 'Quality Standards',
    readTime: '6 min'
  },
  {
    id: 'blog-007',
    title_fa: 'آینده پلیمرهای زیست‌تخریب‌پذیر',
    title_en: 'The Future of Biodegradable Polymers',
    excerpt_fa: 'بررسی پیشرفت‌های اخیر در پلیمرهای زیست‌تخریب‌پذیر و کاربردهای صنعتی آنها',
    excerpt_en: 'Examining recent advances in biodegradable polymers and their industrial applications',
    date: '2024-01-10',
    image: 'https://placehold.co/600x400/22c55e/ffffff.png?text=Biodegradable',
    category: 'Sustainability',
    readTime: '9 min'
  },
  {
    id: 'blog-008',
    title_fa: 'بهینه‌سازی هزینه با مواد بازیافتی',
    title_en: 'Cost Optimization with Recycled Materials',
    excerpt_fa: 'استراتژی‌های کاهش هزینه تولید با استفاده از پلیمرهای بازیافتی بدون افت کیفیت',
    excerpt_en: 'Strategies for reducing production costs using recycled polymers without quality loss',
    date: '2024-01-05',
    image: 'https://placehold.co/600x400/a855f7/ffffff.png?text=Cost+Optimization',
    category: 'Business',
    readTime: '7 min'
  }
];

// 6 Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'احمد الراشدی',
    company: 'Al Rashdi Packaging LLC',
    text_fa: 'کیفیت مواد بازیافتی پلی‌سورس فوق‌العاده است. بیش از ۲ سال است که با آنها کار می‌کنیم و هیچ مشکلی در خط تولید نداشته‌ایم.',
    text_en: 'The quality of PolySource recycled materials is exceptional. We have been working with them for over 2 years with no production line issues.'
  },
  {
    id: 'test-002',
    name: 'فاطمه کریمی',
    company: 'Karimi Industries',
    text_fa: 'پشتیبانی فنی و سرعت پاسخگویی به درخواست‌های قیمت واقعاً حرفه‌ای است. پاسخ همیشه در کمتر از ۴۸ ساعت می‌رسد.',
    text_en: 'Their technical support and quote response time is truly professional. Response always comes in less than 48 hours.'
  },
  {
    id: 'test-003',
    name: 'محمد العلی',
    company: 'Gulf Plastics Manufacturing',
    text_fa: 'شفافیت در منشأ مواد و گواهینامه‌ها برای ما بسیار مهم بود. پلی‌سورس این نیاز را به خوبی برآورده می‌کند.',
    text_en: 'Transparency in material origin and certifications was very important to us. PolySource meets this need perfectly.'
  },
  {
    id: 'test-004',
    name: 'سارا پاکروان',
    company: 'Pakravan Auto Parts',
    text_fa: 'برای قطعات خودرویی به کامپاندهای با کیفیت ثابت نیاز داریم. تنوع محصولات و کیفیت پلی‌سورس بی‌نظیر است.',
    text_en: 'For automotive parts, we need compounds with consistent quality. PolySource product variety and quality is unmatched.'
  },
  {
    id: 'test-005',
    name: 'خالد المنصور',
    company: 'Al Mansour Trading',
    text_fa: 'قیمت‌گذاری رقابتی و تحویل به موقع، دو فاکتور کلیدی برای ما هستند که پلی‌سورس در هر دو عالی است.',
    text_en: 'Competitive pricing and on-time delivery are key factors for us, and PolySource excels in both.'
  },
  {
    id: 'test-006',
    name: 'نسرین اکبری',
    company: 'Akbari Household Products',
    text_fa: 'از زمانی که به مواد بازیافتی پلی‌سورس روی آوردیم، هم هزینه‌ها کاهش یافته و هم مشتریان ما از رویکرد سبز ما استقبال کرده‌اند.',
    text_en: 'Since switching to PolySource recycled materials, costs have decreased and our customers appreciate our green approach.'
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
