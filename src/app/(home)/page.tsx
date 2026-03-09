import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import LearningPathsSection from "@/components/home/learning-paths-section";
import NewsletterSection from "@/components/home/newsletter-section";
import PurposeSection from "@/components/home/purpose-section";
import RecentEntriesSection from "@/components/home/recent-entries-section";

export default function HomePage() {
  return (
    <div id="home" className="pt-10 flex flex-col md:pt-14">
      <Hero />
      <LearningPathsSection />
      <RecentEntriesSection />
      <PurposeSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
