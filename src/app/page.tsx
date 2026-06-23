import HeroSection from "@/components/sections/HeroSection";
import AIShowcase from "@/components/sections/AIShowcase";
import FeatureCards from "@/components/sections/FeatureCards";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import ResearchTimeline from "@/components/sections/ResearchTimeline";
import WaitlistSection from "@/components/sections/WaitlistSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CommunitySection from "@/components/sections/CommunitySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AIShowcase />
      <FeatureCards />
      <DashboardShowcase />
      <ResearchTimeline />
      <WaitlistSection />
      <NewsletterSection />
      <CommunitySection />
    </>
  );
}
