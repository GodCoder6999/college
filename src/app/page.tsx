import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { CourseSection } from "@/components/CourseSection";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { GallerySection } from "@/components/GallerySection";
import { HeroSlider } from "@/components/HeroSlider";
import { MainHeader } from "@/components/MainHeader";
import { RecognitionsSection } from "@/components/RecognitionsSection";
import { RecruitersSection } from "@/components/RecruitersSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteFooter } from "@/components/SiteFooter";
import { StatsStrip } from "@/components/StatsStrip";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TickerBar } from "@/components/TickerBar";
import { TopNav } from "@/components/TopNav";
import { VisitCampusSection } from "@/components/VisitCampusSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      {/* Fixed overlays — z-index order: popup 9999 > FAB 9990 > nav 1040 > progress 100 */}
      <ScrollProgress />
      <WhatsAppFab />

      <TickerBar />
      <MainHeader />
      <TopNav />

      <HeroSlider />
      <StatsStrip />
      <AboutSection />
      <RecruitersSection />
      <CourseSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <RecognitionsSection />
      <VisitCampusSection />
      <SiteFooter />

      <EnquiryPopup />
    </>
  );
}
