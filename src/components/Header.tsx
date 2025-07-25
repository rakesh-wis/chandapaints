import React, { useState, useEffect } from "react";
import logo from "../../dist/assets/img/logo-chandapaints.png";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    setIsProductOpen(false); // close dropdown on route change
  }, [location.pathname]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-brand text-white py-2 hidden md:block fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@chandapaints.com</span>
            </div>
          </div>
          <div className="text-white">
            Professional Paint Solutions Since 1985
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        } ${window.innerWidth >= 768 ? "top-10" : "top-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            {/* <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Chanda Paints</h1>
                <p className="text-xs text-gray-600">Quality & Trust Since 1978</p>
              </div>
            </div> */}
            <a href="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-brand transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-brand transition-colors font-medium"
              >
                About Us
              </Link>

              {/* Products Menu with Submenu */}
              <div className="relative">
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className="flex items-center text-gray-700 hover:text-brand transition-colors font-medium"
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform ${
                      isProductOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProductOpen && (
                  <div className="absolute left-0 mt-2 min-w-max bg-white border rounded-lg shadow-lg z-50 p-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-2 bg-brand-light p-2">
                        Category Wise
                      </h3>
                      <ul className="space-y-1">
                        {["Primers", "Intermediate", "Top Coats", "Bitumenous Product", "Thinners"].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center hover:text-brand text-sm text-gray-700 transition"
                          >
                            <ChevronRight size={16} />

                            <Link
                              to={`/category/${item.replace(/\s+/g, "-").toLowerCase()}`}
                              onClick={() => setIsProductOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-2 bg-brand-light p-2">
                        Sector Wise
                      </h3>
                      <ul className="space-y-1">
                        {[ " Ductile Iron Pipes & Fittings", "Iron & Steel Industry", "Engineer & Fabrication", "Construction", "Petrochemical & Power Plant", "Automobile", "Industrial cylinder", "Roof Coatings", "Tea Industry"].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center hover:text-brand text-sm text-gray-700 transition"
                          >
                            <ChevronRight size={16} />

                            <Link
                              to={`/sector/${item.replace(/\s+/g, "-").toLowerCase()}`}
                              onClick={() => setIsProductOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/clients"
                className="text-gray-700 hover:text-brand transition-colors font-medium"
              >
                Clients
              </Link>
              <Link
                to="/certifications"
                className="text-gray-700 hover:text-brand transition-colors font-medium"
              >
                Certifications
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-brand transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark transition-colors font-medium"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-brand transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <nav className="py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left text-gray-700 hover:text-brand transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-gray-700 hover:text-brand transition-colors font-medium"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="block w-full text-left text-gray-700 hover:text-brand transition-colors font-medium"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("clients")}
                  className="block w-full text-left text-gray-700 hover:text-brand transition-colors font-medium"
                >
                  Clients
                </button>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="block w-full text-left text-gray-700 hover:text-brand transition-colors font-medium"
                >
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left text-gray-700 hover:text-brand transition-colors font-medium"
                >
                  Testimonials
                </button>
                <button className="w-full bg-brand text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Quote
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
