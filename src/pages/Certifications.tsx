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

const certificatesData = {
  "ISO Certificates": [
    {
      title: "ISO 9001:2015",
      description: "Quality Management Systems Certification",
      image: "../../dist/assets/img/certifications/certificate-1.jpg",
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management Systems Certification",
      image: "../../dist/assets/img/certifications/certificate-4.jpg",
    },
    {
      title: "ISO 45001:2015",
      description: "Approved for use in Central Public Works Department",
      image: "../../dist/assets/img/certifications/certificate-5.jpg",
    },
  ],
  "Product Approvals": [
    {
      title: "CPWD Product Approval",
      description: "Approved for use in Central Public Works Department",
      image: "../../dist/assets/img/certifications/certificate-3.jpg",
    },
    {
      title: "Indian Railways Approval",
      description: "Approved vendor for protective coatings",
      image: "../../dist/assets/img/certifications/certificate-6.jpg",
    },
  ],
  "Vendor Registrations": [
    {
      title: "ONGC Vendor",
      description: "Registered vendor for oil and gas supplies",
      image: "../../dist/assets/img/certifications/certificate-7.jpg",
    },
    {
      title: "NTPC Registration",
      description: "National Thermal Power Corporation approved supplier",
      image: "../../dist/assets/img/certifications/certificate-8.jpg",
    },
  ],
};


const About = () => {
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
              Certificates
            </h1>
            {/* <p className="mt-2 text-lg md:text-xl opacity-90">
                    Bringing Colors to Life Since 1985
                  </p> */}

            {/* Breadcrumb (Optional) */}
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Certificates" }]}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
          {Object.entries(certificatesData).map(([sectionTitle, items]) => (
            <section key={sectionTitle} className="">
              <h2 className="text-2xl font-semibold text-brand mb-6">
                {sectionTitle}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((cert, idx) => (
                  <a
                    key={idx}
                    className="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition"
                    href={`${cert.title.replace(/\s+/g, "-").toLowerCase()}.pdf`} download target="_blank" rel="noopener noreferrer"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{cert.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
