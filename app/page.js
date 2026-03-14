"use client";

import HeroSection from '@/components/home/HeroSection';
import ValueProps from '@/components/home/ValueProps';
import PackageCards from '@/components/home/PackageCards';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <PackageCards />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
