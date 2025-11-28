import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Download, FileText, Shield } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'TDS' | 'SDS' | 'COA';
  product: string;
  grade: string;
  lastUpdated: string;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Technical Data Sheet - rHDPE-F100',
    type: 'TDS',
    product: 'Recycled HDPE Film Grade',
    grade: 'rHDPE-F100',
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    title: 'Safety Data Sheet - rHDPE-F100',
    type: 'SDS',
    product: 'Recycled HDPE Film Grade',
    grade: 'rHDPE-F100',
    lastUpdated: '2024-01-15'
  },
  {
    id: '3',
    title: 'Technical Data Sheet - rLDPE-I200',
    type: 'TDS',
    product: 'Recycled LDPE Injection Grade',
    grade: 'rLDPE-I200',
    lastUpdated: '2024-02-01'
  },
  {
    id: '4',
    title: 'Safety Data Sheet - rLDPE-I200',
    type: 'SDS',
    product: 'Recycled LDPE Injection Grade',
    grade: 'rLDPE-I200',
    lastUpdated: '2024-02-01'
  },
  {
    id: '5',
    title: 'Technical Data Sheet - LLDPE-218W',
    type: 'TDS',
    product: 'Virgin LLDPE Film Grade',
    grade: 'LLDPE-218W',
    lastUpdated: '2024-01-20'
  },
  {
    id: '6',
    title: 'Certificate of Analysis - rPP-H500',
    type: 'COA',
    product: 'Recycled PP Injection Grade',
    grade: 'rPP-H500',
    lastUpdated: '2024-02-10'
  }
];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = mockResources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'TDS':
        return <FileText className="h-4 w-4" />;
      case 'SDS':
        return <Shield className="h-4 w-4" />;
      case 'COA':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'TDS':
        return 'default';
      case 'SDS':
        return 'destructive';
      case 'COA':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Technical Resources"
        description="Download technical data sheets (TDS), safety data sheets (SDS), and certificates of analysis for all PolySource polymer products. Regularly updated and compliant with international standards."
        keywords="polymer TDS, polymer SDS, technical data sheet, safety data sheet, material certification"
      />
      {/* Hero */}
      <section className="bg-muted/50 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">Technical Resources</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Access technical data sheets (TDS), safety data sheets (SDS), and certificates of analysis (COA) for all our products. All documents are regularly updated and compliant with international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by product name, grade, or document type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Resource Types Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="text-lg">TDS</CardTitle>
                <CardDescription>
                  Technical Data Sheets with complete physical and mechanical properties
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-destructive mb-3" />
                <CardTitle className="text-lg">SDS</CardTitle>
                <CardDescription>
                  Safety Data Sheets with handling, storage, and emergency information
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-secondary mb-3" />
                <CardTitle className="text-lg">COA</CardTitle>
                <CardDescription>
                  Certificates of Analysis for batch-specific quality verification
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredResources.length} documents
            </p>
          </div>

          <div className="space-y-4">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={getTypeBadgeVariant(resource.type)}>
                            {getTypeIcon(resource.type)}
                            <span className="ml-1">{resource.type}</span>
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Updated: {new Date(resource.lastUpdated).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{resource.product}</p>
                        <p className="text-xs font-mono text-muted-foreground">{resource.grade}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No documents found</h3>
              <p className="text-muted-foreground">Try adjusting your search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Need a Specific Document?</CardTitle>
              <CardDescription>
                Can't find what you're looking for? We can provide:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Batch-specific Certificates of Analysis (COA)</li>
                <li>• Regulatory compliance certificates (FDA, REACH, RoHS)</li>
                <li>• Material passports with full traceability</li>
                <li>• Custom testing reports</li>
                <li>• Processing guidelines for specific applications</li>
              </ul>
              <Button>Contact Technical Support</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
