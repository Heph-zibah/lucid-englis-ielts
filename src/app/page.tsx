import PageLayout from "@/layout/PageLayout";
import HeroComponent from "@/components/custom/homePage/HeroComponent";
import AboutSection from "@/components/custom/AboutSection";
export default function Home() {
  return (
    <div>
      <PageLayout>
        <HeroComponent />
        <AboutSection />
      </PageLayout>
    </div>
  );
}
