import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  // const [visible, setVisible] = useState(false);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // Show button when scroll > 300px
  // useEffect(() => {
  //   const toggleVisibility = () => {
  //     if (window.scrollY > 300) {
  //       setVisible(true);
  //     } else {
  //       setVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);

  // if (!visible) return null;
  return (
    <footer className="bg-[#f2fff2] text-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-2">
                <img
                  src="../dist/assets/img/logo-chandapaints.png"
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <p className="text-black leading-relaxed">
              Established in 1978, Chanda Paints has been a trusted name in the
              paint industry, delivering premium quality paints and exceptional
              customer service for over four decades.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-brand-light hover:bg-brand-dark text-black hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-light hover:bg-brand-dark text-black hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-light hover:bg-brand-dark text-black hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-light hover:bg-brand-dark text-black hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <nav className="space-y-3">
              <button
                // onClick={() => scrollToSection("home")}
                className="block text-black hover:text-brand transition-colors"
              >
                Home
              </button>
              <button
                // onClick={() => scrollToSection("about")}
                className="block text-black hover:text-brand transition-colors"
              >
                About Us
              </button>
              <button
                // onClick={() => scrollToSection("products")}
                className="block text-black hover:text-brand transition-colors"
              >
                Products
              </button>
              <button
                // onClick={() => scrollToSection("clients")}
                className="block text-black hover:text-brand transition-colors"
              >
                Clients
              </button>
              <button
                // onClick={() => scrollToSection("certifications")}
                className="block text-black hover:text-brand transition-colors"
              >
                Certifications
              </button>
              <button
                // onClick={() => scrollToSection("testimonials")}
                className="block text-black hover:text-brand transition-colors"
              >
                Testimonials
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Our Services</h4>
            <nav className="space-y-3 text-black">
              <a href="#" className="block hover:text-brand transition-colors">
                Industrial Coatings
              </a>
              <a href="#" className="block hover:text-brand transition-colors">
                Commercial Paints
              </a>
              <a href="#" className="block hover:text-brand transition-colors">
                Automotive Finishes
              </a>
              <a href="#" className="block hover:text-brand transition-colors">
                Marine Coatings
              </a>
              <a href="#" className="block hover:text-brand transition-colors">
                Specialty Products
              </a>
              <a href="#" className="block hover:text-brand transition-colors">
                Technical Consultation
              </a>
              <a href="#" className="block hover:text-brand transition-colors">
                Color Matching
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-black">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-600">Mon-Fri 8AM-6PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-black">info@chandapaints.com</p>
                  <p className="text-sm text-gray-600">24/7 Email Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-black">Industrial Area</p>
                  <p className="text-black">Phase-1, Chandigarh</p>
                  <p className="text-black">Punjab, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-black">Business Hours</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Stay Updated with Industry News</h4>
              <p className="text-blue-100 mb-6">
                Get the latest updates on new products, industry trends, and technical insights 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-light">
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-black text-sm text-center">
              © 2025 Chanda Paints. All rights reserved. | Privacy Policy |
              Terms of Service
            </div>
            {/* <button
              // onClick={scrollToTop}
              className="fixed bottom-4 right-6 z-50 w-12 h-12 bg-brand hover:bg-brand-dark rounded-full flex items-center justify-center transition-colors group shadow-lg"
            >
              <ArrowUp
                className="text-white group-hover:translate-y-[-2px] transition-transform"
                size={20}
              />
            </button> */}
          </div>
        </div>
    </footer>
  );
};

export default Footer;
