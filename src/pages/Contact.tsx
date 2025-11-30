import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone, Clock, CheckCircle2, Upload, X } from 'lucide-react';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';
import { trackQuoteRequest, trackFormSubmission } from '@/lib/analytics';
import { useDirection } from '@/hooks/useDirection';
import { contactFormSchema, type ContactFormValues } from '@/lib/validation/contactForm';

export default function Contact() {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  const { products, removeProduct, clearProducts } = useRFQ();
  const { toast } = useToast();

  const [showAdvanced, setShowAdvanced] = useState(false);

  const [formData, setFormData] = useState<ContactFormValues>({
    name: '',
    company: '',
    email: '',
    country: '',
    productsDescription: '',
    phone: '',
    quantity: '',
    application: '',
    timeline: '',
    requirements: ''
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues | 'privacy', string>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = contactFormSchema.safeParse(formData);
    const newErrors: Partial<Record<keyof ContactFormValues | 'privacy', string>> = {};

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      (Object.keys(fieldErrors) as (keyof ContactFormValues)[]).forEach(field => {
        const messages = fieldErrors[field];
        if (messages && messages.length > 0) {
          const key = messages[0];
          newErrors[field] = key.startsWith('contactForm.errors.') ? t(key) : key;
        }
      });
    }

    if (products.length === 0 && !formData.productsDescription?.trim()) {
      newErrors.productsDescription = t('contactPage.validation.productsRequired');
    }

    if (!privacyAccepted) {
      newErrors.privacy = t('contactPage.validation.privacyRequired');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast({
        variant: 'destructive',
        title: t('contactPage.validationErrorTitle'),
        description: t('contactPage.validationErrorDescription'),
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const validData = validationResult.success ? validationResult.data : formData;

      const submissionData = {
        ...validData,
        products: products.map((p) => ({ id: p.id, name: p.name, grade: p.grade })),
        submittedAt: new Date().toISOString(),
      };

      console.log('[Form Submission] Contact Form Data:', submissionData);
      console.log('[Backend Simulation] Sending to API:', {
        endpoint: '/api/quotes',
        payload: submissionData,
      });

      trackQuoteRequest('contact');
      trackFormSubmission('contact_form', submissionData);

      toast({
        title: t('contactPage.successToast.title'),
        description: t('contactPage.successToast.description'),
      });

      setFormData({
        name: '',
        company: '',
        email: '',
        country: '',
        productsDescription: '',
        phone: '',
        quantity: '',
        application: '',
        timeline: '',
        requirements: '',
      });
      clearProducts();
      setPrivacyAccepted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.contact'), url: 'https://polysource.global/contact' }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'PolySource Global',
    description: 'Dubai-based B2B polymer supplier specializing in recycled and virgin polymers with global shipping capabilities.',
    url: 'https://polysource.global',
    logo: 'https://polysource.global/logo.png',
    address: {
      addressLocality: 'Dubai',
      addressCountry: 'UAE'
    },
    telephone: '+971 4 XXX XXXX',
    email: 'hello@polysource.global',
    openingHours: ['Su-Th 09:00-18:00']
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('contactPage.seoTitle')}
        description={t('contactPage.seoDescription')}
        keywords={t('contactPage.seoKeywords')}
        structuredData={[breadcrumbSchema, localBusinessSchema]}
      />
      {/* Hero */}
      <section className="bg-muted/50 pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">{t('contactPage.heroTitle')}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t('contactPage.heroSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* RFQ Form */}
            <div className="lg:col-span-2">
              <Card className={isRTL ? 'text-right' : ''}>
                <CardHeader>
                  <CardTitle>{t('contactPage.form.title')}</CardTitle>
                  <CardDescription>
                    {t('contactPage.form.required')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* RFQ Basket Products */}
                    {products.length > 0 && (
                      <div>
                        <Label>{t('contactPage.form.selectedProducts', { count: products.length })}</Label>
                        <div className="mt-2 space-y-2">
                          {products.map(product => (
                            <div key={product.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <div>
                                <p className="font-medium text-sm">{product.name}</p>
                                <p className="text-xs text-muted-foreground">{product.grade}</p>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeProduct(product.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Required Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">{t('contactPage.form.yourName')}</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('contactPage.form.namePlaceholder')}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="contact-name-error" className="mt-1 text-sm text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="company">{t('contactPage.form.company')}</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={t('contactPage.form.companyPlaceholder')}
                          aria-invalid={!!errors.company}
                          aria-describedby={errors.company ? 'contact-company-error' : undefined}
                        />
                        {errors.company && (
                          <p id="contact-company-error" className="mt-1 text-sm text-destructive">
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">{t('contactPage.form.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t('contactPage.form.emailPlaceholder')}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="contact-email-error" className="mt-1 text-sm text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="country">{t('contactPage.form.country')}</Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData({ ...formData, country: value })}
                        >
                          <SelectTrigger aria-invalid={!!errors.country} aria-describedby={errors.country ? 'contact-country-error' : undefined}>
                            <SelectValue placeholder={t('contactPage.form.countryPlaceholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uae">{t('contactPage.countries.uae')}</SelectItem>
                            <SelectItem value="saudi">{t('contactPage.countries.saudi')}</SelectItem>
                            <SelectItem value="egypt">{t('contactPage.countries.egypt')}</SelectItem>
                            <SelectItem value="turkey">{t('contactPage.countries.turkey')}</SelectItem>
                            <SelectItem value="india">{t('contactPage.countries.india')}</SelectItem>
                            <SelectItem value="pakistan">{t('contactPage.countries.pakistan')}</SelectItem>
                            <SelectItem value="kenya">{t('contactPage.countries.kenya')}</SelectItem>
                            <SelectItem value="other">{t('contactPage.countries.other')}</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p id="contact-country-error" className="mt-1 text-sm text-destructive">
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>

                    {products.length === 0 && (
                      <div>
                        <Label htmlFor="products">{t('contactPage.form.products')}</Label>
                        <Textarea
                          id="products"
                          required={products.length === 0}
                          value={formData.productsDescription}
                          onChange={(e) => setFormData({ ...formData, productsDescription: e.target.value })}
                          placeholder={t('contactPage.form.productsPlaceholder')}
                          rows={2}
                          aria-invalid={!!errors.productsDescription}
                          aria-describedby={errors.productsDescription ? 'contact-products-error' : undefined}
                        />
                        {errors.productsDescription && (
                          <p id="contact-products-error" className="mt-1 text-sm text-destructive">
                            {errors.productsDescription}
                          </p>
                        )}
                      </div>
                    )}

                    <div>
                      <Label htmlFor="quantity">{t('contactPage.form.quantity')}</Label>
                      <Input
                        id="quantity"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder={t('contactPage.form.quantityPlaceholder')}
                        aria-invalid={!!errors.quantity}
                        aria-describedby={errors.quantity ? 'contact-quantity-error' : undefined}
                      />
                      {errors.quantity && (
                        <p id="contact-quantity-error" className="mt-1 text-sm text-destructive">
                          {errors.quantity}
                        </p>
                      )}
                    </div>

                    {/* Advanced Section Toggle */}
                    <div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setShowAdvanced((prev) => !prev)}
                        className="w-full"
                      >
                        {showAdvanced
                          ? t('contactPage.form.advancedToggleHide')
                          : t('contactPage.form.advancedToggleShow')}
                      </Button>
                    </div>

                    {/* Advanced Fields */}
                    {showAdvanced && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4 pt-4 border-t border-border"
                      >
                        <div>
                          <Label htmlFor="phone">{t('contactPage.form.phone')}</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder={t('contactPage.form.phonePlaceholder')}
                          />
                        </div>

                        <div>
                          <Label htmlFor="application">{t('contactPage.form.application')}</Label>
                          <Input
                            id="application"
                            value={formData.application}
                            onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                            placeholder={t('contactPage.form.applicationPlaceholder')}
                          />
                        </div>

                        <div>
                          <Label htmlFor="timeline">{t('contactPage.form.timeline')}</Label>
                          <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder={t('contactPage.form.timelinePlaceholder')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">{t('contactPage.form.timelineUrgent')}</SelectItem>
                              <SelectItem value="1month">{t('contactPage.form.timeline1Month')}</SelectItem>
                              <SelectItem value="flexible">{t('contactPage.form.timelineFlexible')}</SelectItem>
                              <SelectItem value="recurring">{t('contactPage.form.timelineRecurring')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="requirements">{t('contactPage.form.requirements')}</Label>
                          <Textarea
                            id="requirements"
                            value={formData.requirements}
                            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                            placeholder={t('contactPage.form.requirementsPlaceholder')}
                            rows={4}
                          />
                        </div>

                        <div>
                          <Label>{t('contactPage.form.fileUploadLabel')}</Label>
                          <div className="mt-2 flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">
                                  <span className="font-semibold">{t('contactPage.form.fileUploadTitle')}</span>{' '}
                                  {t('contactPage.form.fileUploadSubtitle')}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {t('contactPage.form.fileUploadHelp')}
                                </p>
                              </div>
                              <input type="file" className="hidden" />
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={privacyAccepted}
                        onCheckedChange={(checked) => {
                          setPrivacyAccepted(Boolean(checked));
                          setErrors(prev => ({ ...prev, privacy: undefined }));
                        }}
                        aria-invalid={!!errors.privacy}
                        aria-describedby={errors.privacy ? 'contact-privacy-error' : undefined}
                      />
                      <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                        {t('contactPage.privacyLabel')}
                      </Label>
                    </div>
                    {errors.privacy && (
                      <p id="contact-privacy-error" className="text-sm text-destructive">
                        {errors.privacy}
                      </p>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {t('contactPage.form.submit')}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      <Clock className="inline h-3 w-3 mr-1" />
                      {t('contactPage.footerNote')}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('contactPage.sidebar.contactInfoTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('contactPage.sidebar.addressLabel')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('contactPage.sidebar.addressValue')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('contactPage.sidebar.emailLabel')}</p>
                      <a href="mailto:hello@polysource.global" className="text-sm text-primary hover:underline">
                        hello@polysource.global
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('contactPage.sidebar.phoneLabel')}</p>
                      <p className="text-sm text-muted-foreground">
                        +971 4 XXX XXXX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{t('contactPage.sidebar.businessHoursLabel')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('contactPage.sidebar.businessHoursValue')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('contactPage.sidebar.whatToExpectTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {t('contactPage.sidebar.expectationDetailedQuote')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {t('contactPage.sidebar.expectationPricing')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {t('contactPage.sidebar.expectationTechnical')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {t('contactPage.sidebar.expectationShipping')}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {t('contactPage.sidebar.expectationSamples')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
