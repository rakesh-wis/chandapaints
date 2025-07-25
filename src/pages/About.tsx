// src/pages/About.tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import AboutUs from "../components/AboutUs";
import {
  Target,
  Eye,
  Award,
  HeartHandshake,
  Wrench,
  Globe,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver high-performance solutions that enhance efficiency, durability, and sustainability for our clients.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a global leader in innovation and quality, setting the benchmark in every industry we serve.",
    },
    {
      icon: HeartHandshake,
      title: "Our Values",
      description:
        "Integrity, excellence, collaboration, and commitment to customer success drive everything we do.",
    },
  ];
  return (
    <div className="pt-[110px]">
      <Helmet>
        <title>About Us - MyApp</title>
        <meta
          name="description"
          content="Learn more about MyApp – our mission, our team, and the values that drive us."
        />
      </Helmet>

      {/* Breadcrumb */}

      <section className="relative w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          {/* Gradient Paint Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-yellow-400 to-green-400 opacity-90 mix-blend-multiply z-0" />

          {/* Optional: Paint Texture Overlay (you can use a PNG/SVG for more style) */}
          {/* <img src="/assets/bg-paint-texture.png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Paint Texture" /> */}

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
              About Us
            </h1>
            <p className="mt-2 text-lg md:text-xl opacity-90">
              Bringing Colors to Life Since 1985
            </p>

            {/* Breadcrumb (Optional) */}
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
            />
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Chanda Paints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the industry with innovative paint solutions, exceptional
              quality, and unmatched customer service for over four decades.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Transforming Industries with Premium Paint Solutions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 1978, Chanda Paints has been at the forefront of paint
                technology innovation. We specialize in developing
                high-performance coatings for industrial, commercial, and
                specialty applications, serving clients across manufacturing,
                construction, automotive, and marine industries throughout
                India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to research and development has resulted in
                breakthrough formulations that offer superior durability,
                environmental compliance, and cost-effectiveness. We don't just
                sell paint – we provide complete coating solutions.
              </p>

              {/* Key Numbers */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand mb-2">45+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand mb-2">500+</div>
                  <div className="text-gray-600">Product Variants</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
                alt="Paint manufacturing facility"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      ISO 9001:2015
                    </div>
                    <div className="text-sm text-gray-600">
                      Certified Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Target className="text-brand" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide innovative, high-performance paint solutions that protect, 
                    beautify, and enhance the durability of industrial and commercial assets 
                    while maintaining environmental responsibility.
                  </p>
                </div>
      
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the global leader in specialty coatings, recognized for innovation, 
                    quality excellence, and sustainable practices that create value for our 
                    customers and communities.
                  </p>
                </div>
      
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Users className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Excellence in quality, integrity in business practices, innovation in solutions, 
                    sustainability in operations, and dedication to customer success drives 
                    everything we do.
                  </p>
                </div>
              </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand to-brand-dark flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Key Advantages */}
          {/* <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Chanda Paints?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto">
                      <Wrench className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Technical Expertise</h4>
                    <p className="text-gray-600">
                      Our R&D team develops custom formulations tailored to your specific 
                      application requirements and performance standards.
                    </p>
                  </div>
      
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                      <Globe className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-gray-600">
                      With distribution networks across 40+ countries, we ensure consistent 
                      supply and local support wherever your business operates.
                    </p>
                  </div>
      
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                      <Award className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600">
                      Every batch undergoes rigorous testing and quality control measures 
                      to ensure consistent performance and reliability.
                    </p>
                  </div>
                </div>
              </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
