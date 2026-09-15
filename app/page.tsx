import { BottomCta } from "@/components/homepage/BottomCta";
import { FeatureShowcase } from "@/components/homepage/FeatureShowcase";
import { Footer } from "@/components/homepage/Footer";
import { Hero } from "@/components/homepage/Hero";
import { Navbar } from "@/components/homepage/Navbar";
import { Testimonial } from "@/components/homepage/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <Testimonial />
      <BottomCta />
      <Footer />
    </main>
  );
}
