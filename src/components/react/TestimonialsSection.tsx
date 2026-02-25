
import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The 12 KGS Transformation plan changed my life! I was skeptical at first, but Dt. Ambika's balanced approach made it so easy. I have never felt this energetic.",
    rating: 5,
    treatment: "12 KGS Transformation"
  },
  {
    id: 2,
    name: "Michael Torres",
    text: "I struggled with weight for years. The personalized 60 Days Transformation was a game changer. I've finally learned how to eat right without starving.",
    rating: 5,
    treatment: "60 Days Transformation"
  },
  {
    id: 3,
    name: "Emily Reus",
    text: "Loved the 21 Days Challenge. The meal plans were delicious and incredibly easy to follow. Highly recommend for a quick reset before a big event.",
    rating: 5,
    treatment: "21 Days Challenge"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative bg-nova-dark py-20 md:py-32 px-4 md:px-10 overflow-hidden" id="testimonials">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <span className="text-gray-400 text-sm flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-nova-teal rounded-full"></span>
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-medium leading-tight uppercase">
            Even your favourite <br />
            <span className="font-serif italic font-normal normal-case text-gray-300">stars love us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col h-full backdrop-blur-sm shadow-xl">
              <div className="flex gap-1 mb-6 text-nova-teal">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-8 italic flex-grow">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
