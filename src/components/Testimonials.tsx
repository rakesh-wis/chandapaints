import React, { useEffect, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Amit Sharma',
    position: 'Site Engineer',
    company: 'RealBuild Corp',
    image: '../../dist/assets/img/testimonial-1.jpg',
    rating: 5,
    text: 'Chanda Paints transformed our construction workflow. High durability and easy application!',
  },
  {
    name: 'Neha Rao',
    position: 'Interior Designer',
    company: 'VisionSpaces',
    image: '../../dist/assets/img/testimonial-2.jpg',
    rating: 4,
    text: 'Their color range and finish quality impressed every one of my clients. Highly recommended!',
  },
  {
    name: 'Rakesh Kumar',
    position: 'Project Manager',
    company: 'MegaWorks Pvt Ltd',
    image: '../../dist/assets/img/testimonial-1.jpg',
    rating: 5,
    text: 'Fantastic technical support and timely delivery. Perfect partner for any large-scale project.',
  },
  {
    name: 'Priya Mehta',
    position: 'Architect',
    company: 'DesignCube',
    image: '../../dist/assets/img/testimonial-2.jpg',
    rating: 5,
    text: 'Paint adhesion and gloss retention over time is excellent. Will keep using for all upcoming work.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 sec
    return () => clearInterval(interval);
  }, []);

  // Show two testimonials
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what professionals say about Chanda Paints.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 transition-all duration-500">
            {visibleTestimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-brand w-12 h-12 rounded-full flex items-center justify-center">
                    <Quote className="text-white" size={24} />
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-center italic mb-6">"{t.text}"</blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-brand text-sm font-medium">{t.position}</p>
                    <p className="text-gray-600 text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
