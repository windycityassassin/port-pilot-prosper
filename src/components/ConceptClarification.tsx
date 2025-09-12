import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Network, Phone, Server, DollarSign } from "lucide-react";

const ConceptClarification = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <AlertCircle className="w-4 h-4 mr-2" />
            Concept Clarification
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Understanding Port Numbers vs. Phone Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There's an important distinction between network port numbers and phone numbers that affects your business strategy.
          </p>
        </div>

        <Tabs defaultValue="network-ports" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="network-ports">Network Port Numbers</TabsTrigger>
            <TabsTrigger value="phone-numbers">Phone/Virtual Numbers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="network-ports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="w-6 h-6 mr-3 text-primary" />
                  Network Port Numbers (0-65535)
                </CardTitle>
                <CardDescription>
                  Technical endpoints for network communication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What They Are:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Software addresses on computers/servers</li>
                      <li>• Range from 0 to 65,535</li>
                      <li>• Used for network protocol communication</li>
                      <li>• Examples: Port 80 (HTTP), 443 (HTTPS), 22 (SSH)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Business Reality:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• ❌ Cannot be bought/sold individually</li>
                      <li>• ❌ No direct monetization possible</li>
                      <li>• ❌ Assigned by network administrators</li>
                      <li>• ❌ No validation/arbitrage market</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="phone-numbers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-success" />
                  Phone/Virtual Numbers
                </CardTitle>
                <CardDescription>
                  The real business opportunity in telecommunications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What They Are:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Virtual phone numbers (VoIP, DID, toll-free)</li>
                      <li>• Can be ported between providers</li>
                      <li>• Geographic and non-geographic variants</li>
                      <li>• Premium vanity numbers (easy to remember)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Business Opportunities:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• ✅ Wholesale to retail arbitrage</li>
                      <li>• ✅ Premium number marketplace</li>
                      <li>• ✅ Porting and validation services</li>
                      <li>• ✅ API services for developers</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-success mr-2" />
                    <span className="font-semibold text-success">Revenue Potential</span>
                  </div>
                  <p className="text-sm text-success">
                    Virtual phone numbers can cost $1-5 wholesale and sell for $10-50+ retail. Premium vanity numbers can sell for thousands. The market is worth over $2 billion globally.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ConceptClarification;