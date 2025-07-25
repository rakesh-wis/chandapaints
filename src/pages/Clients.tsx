import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";

const Clients = () => {
  const clientImages = [
    "../../dist/assets/img/clients/client-1.png",
    "../../dist/assets/img/clients/client-2.png",
    "../../dist/assets/img/clients/client-3.png",
    "../../dist/assets/img/clients/client-4.png",
    "../../dist/assets/img/clients/client-5.png",
    "../../dist/assets/img/clients/client-6.png",
    "../../dist/assets/img/clients/client-7.png",
    "../../dist/assets/img/clients/client-8.png",
    "../../dist/assets/img/clients/client-9.png",
    "../../dist/assets/img/clients/client-10.png",
  ];

  return (
    <section id="clients" className="pt-[110px] bg-gray-50">
      <Helmet>
        <title>Clients - MyApp</title>
        <meta
          name="description"
          content="Discover the clients who trust MyApp for their paint solutions."
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
              Our Esteemed Clients
            </h1>
            {/* <p className="mt-2 text-lg md:text-xl opacity-90">
              Bringing Colors to Life Since 1985
            </p> */}

            {/* Breadcrumb (Optional) */}
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Our Esteemed Clients" }]}
            />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to serve leading companies across diverse industries,
            providing reliable paint solutions that meet the highest standards.
          </p>
        </div>

        {/* Client Image Carousel */}
        <div className="">
          {/* <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Valued Partners</h3> */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {clientImages.map((imgSrc, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md h-28 mb-4"
              >
                <img
                  src={imgSrc}
                  alt={`Client ${index + 1}`}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* You can keep the "Industries We Serve" and CTA sections unchanged */}
      </div>
    </section>
  );
};

export default Clients;
