import HeroSection from "@/components/HeroSection";
import ConceptClarification from "@/components/ConceptClarification";
import BusinessModelSection from "@/components/BusinessModelSection";
import BusinessPlanGenerator from "@/components/BusinessPlanGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ConceptClarification />
      <BusinessModelSection />
      <BusinessPlanGenerator />
    </div>
  );
};

export default Index;
