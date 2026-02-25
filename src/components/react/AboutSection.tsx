
import React from 'react';

// Add businessName prop
interface AboutSectionProps {
  businessName?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ businessName = "Fitness Formula 1" }) => {
  return (
    <section className="bg-white py-20 px-6 md:px-10" id="about">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            About {businessName}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Heading */}
          <div className="lg:w-2/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-nova-dark leading-tight font-medium uppercase">
              Get started with one of <span className="font-serif italic font-normal text-gray-600 normal-case">our licensed</span> nutritionists
            </h2>
          </div>

          {/* Right: Intro Text & Image */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-end w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm mb-8">
              <img
                src="/images/fitness_about.png"
                alt="Dietitian portrait"
                className="w-full h-auto rounded-none object-cover aspect-[4/5] shadow-xl"
              />
            </div>

            <div className="border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center mb-6 self-start lg:self-end">
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-[300px]">
              Dt. Ambika believes in the transformative power of food, challenging conventional diets with a balanced, commonsense approach to nutrition. In a world flooded with fleeting diet trends, her philosophy stands out for its simplicity and sustainability with an experience of 10 years.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
