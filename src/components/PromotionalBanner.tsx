import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { useEffect, useState } from "react";

const images = [
  "http://www.chandapaints.com/images/chandapaints-banner-02.png",
  "http://www.chandapaints.com/images/chandapaints-banner-01.png",
  "http://www.chandapaints.com/images/chandapaints-banner-03.png",
  "http://www.chandapaints.com/images/chandapaints-banner-04.jpg"
];

const PromotionalBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg"
          alt="Industrial painting"
          className="w-full h-full object-cover transform scale-100 animate-zoomIn"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-brand/70"></div>
      </div> */}
      <div className="absolute inset-0 z-0">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 transform scale-100 animate-zoomIn ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-brand/50 z-20" />

      
    </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Professional Paint Solutions for
                <span className="text-brand-light"> Every Industry</span>
              </h1>
              <p className="text-xl text-white leading-relaxed">
                Trusted by thousands of businesses across India. We deliver premium quality paints 
                and coatings engineered for durability, performance, and exceptional results since 1978.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-dark hover:bg-brand text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
                <span>Request Quote</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand px-8 py-4 rounded-lg font-semibold transition-all">
                View Our Products
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-300/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-light mb-2">45+</div>
                <div className="text-white text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-light mb-2">3,000+</div>
                <div className="text-white text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-light mb-2">24/7</div>
                <div className="text-white text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Premium Quality</h3>
                  <p className="text-brand-light text-sm">ISO certified formulations</p>
                </div>
              </div>
              <p className="text-white">
                Our paints are formulated with the highest quality materials, ensuring long-lasting 
                protection and exceptional finish quality.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Industry Leading</h3>
                  <p className="text-brand-light text-sm">Multiple certifications</p>
                </div>
              </div>
              <p className="text-white">
                Recognized by industry leaders and certified by international standards 
                for quality and environmental compliance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Expert Support</h3>
                  <p className="text-brand-light text-sm">Technical consultation</p>
                </div>
              </div>
              <p className="text-white">
                Our team of paint specialists provides comprehensive technical support 
                and customized solutions for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;