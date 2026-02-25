
import React from 'react';
import { SERVICES } from '../../constants';
import ServiceCard from './ServiceCard';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-nova-gray py-12 md:py-20 px-4 md:px-10 min-h-screen" id="services">
      <div className="max-w-[1440px] mx-auto">

        <div className="mb-10 md:mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M22 11.08V12a10 10 10 0 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
            <span className="font-bold tracking-widest text-sm uppercase">FITNESSFORMULA1 FOR YOU</span>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-7xl text-nova-dark font-medium leading-tight mb-4 md:mb-6 uppercase">
            FOLLOW <br className="hidden md:block" />
            <span className="font-serif italic font-normal normal-case">Your Gut</span>
          </h1>

          <p className="text-gray-500 max-w-lg text-sm md:text-base leading-relaxed mx-auto md:mx-0">
            100% Customised Diet Plans Designed According To Your Lifestyle!
          </p>
        </div>

        {/* Grid: Changed to grid-cols-2 for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={onOpenBooking}
            />
          ))}
        </div>

      </div>
    </section >
  );
};

export default HeroSection;
