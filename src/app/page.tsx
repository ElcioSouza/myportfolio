import React from "react";
import BannerItems from "@/components/BannerItems";
import ContactSection from "@/components/ContactSection";
import DifferentialSection from "@/components/DifferentialSection";
import HeroSection from "@/components/HeroSection";
import SpecialtySection from "@/components/SpecialtySection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <> 
      <HeroSection />
      <BannerItems />
      <SpecialtySection />
      <DifferentialSection />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}
