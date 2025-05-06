import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonials: {
    id: number;
    name: string;
    company: string;
    quote: string;
    rating: number;
  }[];
}

const TestimonialCarousel: React.FC<TestimonialProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, testimonials.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ transition: 'opacity 0.5s ease-in-out' }}
            >
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? 'text-orange-accent fill-orange-accent' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <blockquote className="text-lg font-medium text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-blue-medium rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* First testimonial visible by default */}
          {testimonials.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm invisible">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonials[0].rating ? 'text-orange-accent fill-orange-accent' : 'text-gray-300'}
                  />
                ))}
              </div>
              <blockquote className="text-lg font-medium text-gray-700 mb-6">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="bg-blue-medium rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[0].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800">{testimonials[0].name}</p>
                  <p className="text-gray-600">{testimonials[0].company}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-blue-medium' : 'bg-gray-300'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;