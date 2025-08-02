import PageLayout from "@/layout/PageLayout";
import HeroSection from "@/components/custom/homePage/HeroSection";
import AboutSection from "@/components/custom/homePage/AboutSection";
import WhyChooseUs from "@/components/custom/homePage/WhyChooseUs";
import StatsSection from "@/components/custom/homePage/StatsSection";
import TestimonialSection from "@/components/custom/homePage/TestimonialSection";
export default function Home() {
  return (
    <div>
      <PageLayout>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <StatsSection />
        <TestimonialSection />
      </PageLayout>
    </div>
  );
}
