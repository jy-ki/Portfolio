import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { MorePerspectives } from "@/components/MorePerspectives";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <SelectedWork />
        <MorePerspectives />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
