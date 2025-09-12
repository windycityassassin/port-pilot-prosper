import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Network, Phone, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/telecom-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          <Zap className="w-4 h-4 mr-2" />
          Telecommunications Business Opportunity
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Port Number 
          <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Business Empire
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Transform virtual phone number arbitrage into a million-dollar automated business with AI-powered validation and customer service.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <Network className="w-8 h-8 text-primary-glow mx-auto mb-3" />
            <div className="text-2xl font-bold">$2B+</div>
            <div className="text-sm opacity-80">Virtual Number Market</div>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <Phone className="w-8 h-8 text-primary-glow mx-auto mb-3" />
            <div className="text-2xl font-bold">65M+</div>
            <div className="text-sm opacity-80">Numbers in Circulation</div>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <TrendingUp className="w-8 h-8 text-primary-glow mx-auto mb-3" />
            <div className="text-2xl font-bold">300%</div>
            <div className="text-sm opacity-80">Potential ROI</div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
            Build Business Plan
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Explore Market Data
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-2 h-2 bg-white rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-primary-glow rounded-full animate-pulse opacity-50"></div>
    </section>
  );
};

export default HeroSection;