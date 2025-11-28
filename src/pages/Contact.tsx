import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
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

export default function Contact() {
  const { products, removeProduct, clearProducts } = useRFQ();
  const { toast } = useToast();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    quantity: '',
    application: '',
    timeline: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll respond within 48 hours with a detailed quotation.",
    });
    // Clear form and RFQ basket
    setFormData({
      name: '',
      company: '',
      email: '',
      country: '',
      phone: '',
      quantity: '',
      application: '',
      timeline: '',
      requirements: ''
    });
    clearProducts();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Request a Quote"
        description="Get a detailed polymer quotation within 48 hours. No WhatsApp chaos. Professional RFQ process for recycled and virgin polymers with clear pricing and specifications."
        keywords="request quote, rfq polymer, polymer quotation, buy polymers, contact supplier"
      />
      {/* Hero */}
      <section className="bg-muted/50 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">Request a Quote</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Get a detailed quotation within 48 hours. No WhatsApp back-and-forth. Just clear pricing, lead times, and technical specifications.
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
              <Card>
                <CardHeader>
                  <CardTitle>Quote Request Form</CardTitle>
                  <CardDescription>
                    All fields marked with * are required
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* RFQ Basket Products */}
                    {products.length > 0 && (
                      <div>
                        <Label>Selected Products ({products.length})</Label>
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
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="ABC Manufacturing Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@abc-manufacturing.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uae">United Arab Emirates</SelectItem>
                            <SelectItem value="saudi">Saudi Arabia</SelectItem>
                            <SelectItem value="egypt">Egypt</SelectItem>
                            <SelectItem value="turkey">Turkey</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="pakistan">Pakistan</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {products.length === 0 && (
                      <div>
                        <Label htmlFor="products">Products Needed *</Label>
                        <Textarea
                          id="products"
                          required={products.length === 0}
                          placeholder="e.g., Recycled HDPE film grade, Virgin PP injection grade"
                          rows={2}
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="quantity">Approximate Quantity (MT) *</Label>
                      <Input
                        id="quantity"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        placeholder="e.g., 20"
                      />
                    </div>

                    {/* Advanced Section Toggle */}
                    <div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="w-full"
                      >
                        {showAdvanced ? 'Hide' : 'Show'} Additional Details (Optional)
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
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+971 XX XXX XXXX"
                          />
                        </div>

                        <div>
                          <Label htmlFor="application">Application / Industry</Label>
                          <Input
                            id="application"
                            value={formData.application}
                            onChange={(e) => setFormData({...formData, application: e.target.value})}
                            placeholder="e.g., Packaging film, Automotive parts"
                          />
                        </div>

                        <div>
                          <Label htmlFor="timeline">Delivery Timeline</Label>
                          <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (within 2 weeks)</SelectItem>
                              <SelectItem value="1month">Within 1 month</SelectItem>
                              <SelectItem value="flexible">Flexible timing</SelectItem>
                              <SelectItem value="recurring">Recurring orders</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="requirements">Additional Requirements</Label>
                          <Textarea
                            id="requirements"
                            value={formData.requirements}
                            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                            placeholder="Color preferences, certifications needed, custom specifications..."
                            rows={4}
                          />
                        </div>

                        <div>
                          <Label>File Upload (Optional)</Label>
                          <div className="mt-2 flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">
                                  <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Technical drawings, specifications (PDF, DOC, max 10MB)
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
                      <Checkbox id="privacy" required />
                      <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                        I agree to the processing of my data for quote purposes and accept the privacy policy *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Quote Request
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      <Clock className="inline h-3 w-3 mr-1" />
                      You'll receive a detailed quotation within 48 hours
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
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a href="mailto:hello@polysource.global" className="text-sm text-primary hover:underline">
                        hello@polysource.global
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +971 4 XXX XXXX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Sunday - Thursday: 9:00 - 18:00 GST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Detailed quotation within 48 hours
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Clear pricing with no hidden fees
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Technical specifications and certifications
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Shipping options and lead times
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Sample availability (if applicable)
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
