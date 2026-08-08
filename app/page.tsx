import { HeroSection } from '@/components/home/HeroSection';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { FeaturedVendors } from '@/components/home/FeaturedVendors';
import { HowItWorks } from '@/components/home/HowItWorks';
import { CitySelector } from '@/components/home/CitySelector';
import { Testimonials } from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceGrid />
      <FeaturedVendors />
      <HowItWorks />
      <CitySelector />
      <Testimonials />
    </main>
  );
}
