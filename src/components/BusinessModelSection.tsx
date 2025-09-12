import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Bot, 
  Phone, 
  ArrowUpRight,
  CheckCircle,
  Zap
} from "lucide-react";
import automationImage from "@/assets/business-automation.jpg";
import virtualNumbersImage from "@/assets/virtual-numbers.jpg";

const BusinessModelSection = () => {
  const revenueStreams = [
    {
      name: "Number Arbitrage",
      description: "Buy wholesale, sell retail with 200-400% markup",
      potential: "$50K-200K/month",
      difficulty: "Medium",
      automation: 85,
      icon: DollarSign
    },
    {
      name: "Premium Numbers",
      description: "Vanity numbers, sequential patterns, memorable combinations",
      potential: "$100K-500K/month",
      difficulty: "High", 
      automation: 60,
      icon: TrendingUp
    },
    {
      name: "API Services",
      description: "White-label number provisioning for developers",
      potential: "$30K-150K/month",
      difficulty: "High",
      automation: 95,
      icon: Zap
    },
    {
      name: "Porting Services",
      description: "Number migration and validation services",
      potential: "$20K-80K/month",
      difficulty: "Medium",
      automation: 75,
      icon: Phone
    }
  ];

  const automationStrategies = [
    {
      process: "Number Discovery",
      description: "AI-powered scanning for available premium numbers",
      tools: "Custom scrapers, API monitoring, pattern recognition"
    },
    {
      process: "Pricing Optimization", 
      description: "Dynamic pricing based on market demand and rarity",
      tools: "ML algorithms, competitor analysis, demand forecasting"
    },
    {
      process: "Customer Service",
      description: "AI chatbots for inquiries, disputes, and payment processing",
      tools: "GPT-4 integration, payment gateways, CRM automation"
    },
    {
      process: "Inventory Management",
      description: "Automated buying, selling, and portfolio optimization",
      tools: "API integrations, automated bidding, profit optimization"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Revenue Streams */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Revenue Model Analysis
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Multiple Revenue Streams</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diversified income sources with high automation potential and scalable profit margins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-8 h-8 text-primary" />
                    <Badge variant={stream.difficulty === 'High' ? 'destructive' : stream.difficulty === 'Medium' ? 'secondary' : 'default'}>
                      {stream.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{stream.name}</CardTitle>
                  <CardDescription className="text-sm">{stream.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Potential</span>
                      <span className="font-semibold text-success">{stream.potential}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Automation Level</span>
                      <span className="font-semibold">{stream.automation}%</span>
                    </div>
                    <Progress value={stream.automation} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Automation Strategy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="outline" className="mb-4">
              <Bot className="w-4 h-4 mr-2" />
              Automation Strategy
            </Badge>
            <h3 className="text-3xl font-bold mb-6">AI-Powered Business Operations</h3>
            <p className="text-muted-foreground mb-8">
              Leverage artificial intelligence and automation to scale your virtual number business beyond manual limitations.
            </p>

            <div className="space-y-6">
              {automationStrategies.map((strategy, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{strategy.process}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{strategy.description}</p>
                    <p className="text-xs text-primary font-medium">{strategy.tools}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-3 opacity-20"></div>
            <img 
              src={automationImage}
              alt="Business Automation" 
              className="relative rounded-2xl shadow-elegant w-full"
            />
          </div>
        </div>

        {/* Market Validation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl -rotate-3 opacity-20"></div>
            <img 
              src={virtualNumbersImage}
              alt="Virtual Numbers Market" 
              className="relative rounded-2xl shadow-elegant w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Market Validation
            </Badge>
            <h3 className="text-3xl font-bold mb-6">Proven Market Demand</h3>
            <p className="text-muted-foreground mb-8">
              The virtual phone number market is experiencing explosive growth driven by remote work, international business, and privacy concerns.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">$2.1B</div>
                <div className="text-sm text-muted-foreground">Market Size 2024</div>
              </div>
              <div className="text-center p-4 bg-gradient-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">22.5%</div>
                <div className="text-sm text-muted-foreground">Annual Growth Rate</div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Generate Custom Business Plan
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;