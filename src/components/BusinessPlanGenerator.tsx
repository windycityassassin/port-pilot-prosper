import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  Download, 
  DollarSign, 
  Target, 
  Zap, 
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface BusinessMetrics {
  initialInvestment: number;
  monthlyTarget: number;
  profitMargin: number;
  timeHorizon: number;
  automationLevel: number;
}

const BusinessPlanGenerator = () => {
  const [metrics, setMetrics] = useState<BusinessMetrics>({
    initialInvestment: 50000,
    monthlyTarget: 25000,
    profitMargin: 300,
    timeHorizon: 12,
    automationLevel: 80
  });

  const [activeTab, setActiveTab] = useState("metrics");

  const calculateProjections = () => {
    const monthlyRevenue = metrics.monthlyTarget;
    const monthlyCosts = monthlyRevenue / (1 + metrics.profitMargin / 100);
    const monthlyProfit = monthlyRevenue - monthlyCosts;
    const yearlyProfit = monthlyProfit * 12;
    const roi = (yearlyProfit / metrics.initialInvestment) * 100;
    const breakEvenMonths = Math.ceil(metrics.initialInvestment / monthlyProfit);

    return {
      monthlyRevenue,
      monthlyProfit,
      yearlyProfit,
      roi,
      breakEvenMonths,
      monthlyCosts
    };
  };

  const projections = calculateProjections();

  const businessMilestones = [
    {
      month: 1,
      milestone: "Infrastructure Setup",
      description: "API integrations, automation tools, initial inventory",
      investment: "$15,000"
    },
    {
      month: 3,
      milestone: "First Revenue",
      description: "Initial number sales and customer acquisition",
      investment: "$5,000"
    },
    {
      month: 6,
      milestone: "Automation Launch",
      description: "AI customer service and automated processes",
      investment: "$10,000"
    },
    {
      month: 12,
      milestone: "Scale Achievement",
      description: "Target revenue reached with full automation",
      investment: "$20,000"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Business Plan Generator
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Create Your Custom Business Plan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Input your parameters and generate a detailed business plan with financial projections and automation roadmap.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="metrics">Business Metrics</TabsTrigger>
              <TabsTrigger value="projections">Financial Projections</TabsTrigger>
              <TabsTrigger value="roadmap">Implementation Roadmap</TabsTrigger>
              <TabsTrigger value="plan">Generated Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="metrics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment & Revenue Goals</CardTitle>
                    <CardDescription>Set your financial parameters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="investment">Initial Investment ($)</Label>
                      <Input
                        id="investment"
                        type="number"
                        value={metrics.initialInvestment}
                        onChange={(e) => setMetrics(prev => ({
                          ...prev,
                          initialInvestment: parseInt(e.target.value) || 0
                        }))}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="target">Monthly Revenue Target ($)</Label>
                      <Input
                        id="target"
                        type="number"
                        value={metrics.monthlyTarget}
                        onChange={(e) => setMetrics(prev => ({
                          ...prev,
                          monthlyTarget: parseInt(e.target.value) || 0
                        }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="margin">Target Profit Margin (%)</Label>
                      <Input
                        id="margin"
                        type="number"
                        value={metrics.profitMargin}
                        onChange={(e) => setMetrics(prev => ({
                          ...prev,
                          profitMargin: parseInt(e.target.value) || 0
                        }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Strategy</CardTitle>
                    <CardDescription>Define your operational approach</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="horizon">Time Horizon (months)</Label>
                      <Input
                        id="horizon"
                        type="number"
                        value={metrics.timeHorizon}
                        onChange={(e) => setMetrics(prev => ({
                          ...prev,
                          timeHorizon: parseInt(e.target.value) || 0
                        }))}
                      />
                    </div>

                    <div>
                      <Label>Target Automation Level</Label>
                      <div className="mt-2">
                        <Progress value={metrics.automationLevel} className="mb-2" />
                        <div className="flex justify-between text-sm">
                          <span>Manual: {100 - metrics.automationLevel}%</span>
                          <span>Automated: {metrics.automationLevel}%</span>
                        </div>
                      </div>
                      <Input
                        type="range"
                        min="0"
                        max="100"
                        value={metrics.automationLevel}
                        onChange={(e) => setMetrics(prev => ({
                          ...prev,
                          automationLevel: parseInt(e.target.value)
                        }))}
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button onClick={() => setActiveTab("projections")} size="lg">
                  Calculate Projections
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="projections" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <DollarSign className="w-8 h-8 text-success mx-auto mb-2" />
                    <CardTitle>Monthly Profit</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-success">
                      ${projections.monthlyProfit.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Revenue: ${projections.monthlyRevenue.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle>Annual ROI</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      {projections.roi.toFixed(1)}%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Yearly Profit: ${projections.yearlyProfit.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                    <CardTitle>Break-Even</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-accent">
                      {projections.breakEvenMonths}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Months to break-even
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Monthly Financials</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Gross Revenue:</span>
                          <span className="font-semibold">${projections.monthlyRevenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Operating Costs:</span>
                          <span className="font-semibold">${projections.monthlyCosts.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Net Profit:</span>
                          <span className="font-bold text-success">${projections.monthlyProfit.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Key Assumptions</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Numbers bought at wholesale prices</div>
                        <div>• {metrics.profitMargin}% average markup maintained</div>
                        <div>• {metrics.automationLevel}% automation reduces costs</div>
                        <div>• Steady month-over-month growth</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roadmap" className="space-y-6">
              <div className="space-y-6">
                {businessMilestones.map((milestone, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">M{milestone.month}</span>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">{milestone.milestone}</h4>
                            <Badge variant="outline">{milestone.investment}</Badge>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                        <CheckCircle className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="plan" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Generated Business Plan</CardTitle>
                  <CardDescription>
                    Complete business plan based on your parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose max-w-none">
                    <h3>Executive Summary</h3>
                    <p>
                      Virtual Phone Number Business targeting ${projections.monthlyRevenue.toLocaleString()} monthly revenue 
                      with ${metrics.initialInvestment.toLocaleString()} initial investment. Projected ROI: {projections.roi.toFixed(1)}% 
                      annually with break-even in {projections.breakEvenMonths} months.
                    </p>

                    <h3>Market Opportunity</h3>
                    <p>
                      The global virtual phone number market is valued at $2.1B with 22.5% annual growth. 
                      Key drivers include remote work adoption, international business expansion, 
                      and privacy concerns driving demand for virtual numbers.
                    </p>

                    <h3>Revenue Model</h3>
                    <p>
                      Multi-stream revenue approach: wholesale-retail arbitrage ({metrics.profitMargin}% markup), 
                      premium number sales, API services, and porting services. 
                      {metrics.automationLevel}% automation target reduces operational overhead.
                    </p>

                    <h3>Implementation Timeline</h3>
                    <p>
                      {metrics.timeHorizon}-month implementation plan with key milestones: 
                      infrastructure setup (Month 1), first revenue (Month 3), 
                      automation launch (Month 6), and scale achievement (Month 12).
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF Plan
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Target className="w-5 h-5 mr-2" />
                      Start Implementation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlanGenerator;