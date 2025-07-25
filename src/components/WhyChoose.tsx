import React from 'react';
import { BadgeCheck, PaintRoller, Wrench, Shield } from 'lucide-react';

const features = [
  {
    icon: <Shield size={26} className='text-white'/>,
    title: 'Coating solutions for Ductile Iron Pipes',
    description: 'Precise quotations that include advice on products specific to your requirements',
  },
  {
    icon: <PaintRoller size={26} className='text-white'/>,
    title: 'Synthetic Enamel Coatings Solutions',
    description: 'Supervised painting and expert advised colour consultations from our professional team',
  },
  {
    icon: <Wrench size={26} className='text-white'/>,
    title: 'Inhouse R&D Facility',
    description: 'A quick, low-sound and dust-free painting experience with a variety of modernised tools',
  },
  {
    icon: <BadgeCheck size={26} className='text-white'/>,
    title: 'High build Bituminous Based Coatings For Pipes',
    description: 'We cover your belongings while painting to avoid an unpleasant experience',
  },
];

const WhyChooseChandaPaints = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          {/* <img
            src="/images/painter.png"
            alt="Painter on ladder"
            className="mx-auto lg:mx-0 max-h-80 object-contain mb-6"
          /> */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Chanda Paints?</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Looking for end-to-end solutions for all your painting needs? Chanda Paints offers a 
            complete and professional approach to home and commercial painting. Enjoy a hassle-free 
            and high-quality finish with us!
          </p>
          <button className="bg-brand-dark text-white px-6 py-3 rounded-md hover:bg-brand transition">
            Contact Us Now
          </button>
        </div>

        {/* Right Side: Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-md transition-all duration-300"
            >
              <div className="flex space-x-3 mb-2 items-center">
                <div className="p-2 bg-brand-dark rounded-md shadow-sm">{item.icon}</div>
                <h4 className="text-md font-semibold text-gray-800">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseChandaPaints;
