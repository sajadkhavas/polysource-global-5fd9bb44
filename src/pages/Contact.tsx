import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone, Clock, CheckCircle2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { trackQuoteRequest, trackFormSubmission } from '@/lib/analytics';
import { contactFormSchema, type ContactFormValues } from '@/lib/validation/contactForm';

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [formData, setFormData] = useState<ContactFormValues>({ name: '', company: '', email: '', country: '', productsDescription: '', phone: '', quantity: '', application: '', timeline: '', requirements: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues | 'privacy', string>>>({});
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
        if (messages && messages.length > 0) { const key = messages[0]; newErrors[field] = key.startsWith('contactForm.errors.') ? t(key) : key; }
      });
    }
    if (!formData.productsDescription?.trim()) newErrors.productsDescription = t('contactPage.validation.productsRequired');
    if (!privacyAccepted) newErrors.privacy = t('contactPage.validation.privacyRequired');
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); toast({ variant: 'destructive', title: t('contactPage.validationErrorTitle'), description: t('contactPage.validationErrorDescription') }); return; }
    setErrors({}); setIsSubmitting(true);
    try {
      const submissionData = { ...formData, submittedAt: new Date().toISOString() };
      console.log('[Form Submission]', submissionData);
      trackQuoteRequest('contact'); trackFormSubmission('contact_form', submissionData);
      toast({ title: t('contactPage.successToast.title'), description: t('contactPage.successToast.description') });
      setFormData({ name: '', company: '', email: '', country: '', productsDescription: '', phone: '', quantity: '', application: '', timeline: '', requirements: '' });
      setPrivacyAccepted(false);
    } finally { setIsSubmitting(false); }
  };

  const breadcrumbItems = [{ labelKey: "breadcrumb.home", to: "/" }, { labelKey: "breadcrumb.contact", to: "/contact" }];
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: t('breadcrumb.home'), url: 'https://polysource.global' }, { name: t('breadcrumb.contact'), url: 'https://polysource.global/contact' }]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title={t('contactPage.seoTitle')} description={t('contactPage.seoDescription')} structuredData={[breadcrumbSchema]} />
      <section className="bg-muted/50 pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold mb-4 text-foreground">{t('contactPage.heroTitle')}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{t('contactPage.heroSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader><CardTitle>{t('contactPage.form.title')}</CardTitle><CardDescription>{t('contactPage.form.required')}</CardDescription></CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><Label htmlFor="name">{t('contactPage.form.yourName')}</Label><Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />{errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}</div>
                      <div><Label htmlFor="company">{t('contactPage.form.company')}</Label><Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />{errors.company && <p className="mt-1 text-sm text-destructive">{errors.company}</p>}</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><Label htmlFor="email">{t('contactPage.form.email')}</Label><Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />{errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}</div>
                      <div><Label htmlFor="country">{t('contactPage.form.country')}</Label>
                        <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })}><SelectTrigger><SelectValue placeholder={t('contactPage.form.countryPlaceholder')} /></SelectTrigger>
                          <SelectContent><SelectItem value="uae">UAE</SelectItem><SelectItem value="saudi">Saudi Arabia</SelectItem><SelectItem value="turkey">Turkey</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent>
                        </Select>{errors.country && <p className="mt-1 text-sm text-destructive">{errors.country}</p>}
                      </div>
                    </div>
                    <div><Label htmlFor="products">{t('contactPage.form.products')}</Label><Textarea id="products" required value={formData.productsDescription} onChange={(e) => setFormData({ ...formData, productsDescription: e.target.value })} rows={2} />{errors.productsDescription && <p className="mt-1 text-sm text-destructive">{errors.productsDescription}</p>}</div>
                    <div><Label htmlFor="quantity">{t('contactPage.form.quantity')}</Label><Input id="quantity" required value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />{errors.quantity && <p className="mt-1 text-sm text-destructive">{errors.quantity}</p>}</div>
                    <div className="flex items-center space-x-2"><Checkbox id="privacy" checked={privacyAccepted} onCheckedChange={(c) => setPrivacyAccepted(c as boolean)} /><Label htmlFor="privacy" className="text-sm cursor-pointer">{t('contactPage.form.privacyLabel')}</Label></div>
                    {errors.privacy && <p className="text-sm text-destructive">{errors.privacy}</p>}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>{isSubmitting ? t('contactPage.form.submitting') : t('contactPage.form.submit')}</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card><CardHeader><CardTitle>{t('contactPage.info.title')}</CardTitle></CardHeader><CardContent className="space-y-4">
                <div className="flex items-start"><MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" /><div><p className="font-medium">Dubai, UAE</p></div></div>
                <div className="flex items-start"><Mail className="h-5 w-5 text-primary mr-3 mt-0.5" /><div><a href="mailto:hello@polysource.global" className="hover:text-primary">hello@polysource.global</a></div></div>
                <div className="flex items-start"><Phone className="h-5 w-5 text-primary mr-3 mt-0.5" /><div><p>+971 4 XXX XXXX</p></div></div>
                <div className="flex items-start"><Clock className="h-5 w-5 text-primary mr-3 mt-0.5" /><div><p>Sun-Thu: 9:00 AM - 6:00 PM</p></div></div>
              </CardContent></Card>
              <Card><CardContent className="pt-6"><div className="space-y-3">
                <div className="flex items-start"><CheckCircle2 className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" /><p className="text-sm text-muted-foreground">{t('contactPage.info.responseTime')}</p></div>
                <div className="flex items-start"><CheckCircle2 className="h-5 w-5 text-success mr-2 mt-0.5 flex-shrink-0" /><p className="text-sm text-muted-foreground">{t('contactPage.info.nda')}</p></div>
              </div></CardContent></Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
