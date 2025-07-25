import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "../components/Breadcrumb";
import { Building, Factory, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-[110px]">
      <Helmet>
        <title>Contact Us - MyApp</title>
        <meta
          name="description"
          content="Get in touch with MyApp – we would love to hear from you!"
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
              Contact Us
            </h1>
            {/* <p className="mt-2 text-lg md:text-xl opacity-90">
              Bringing Colors to Life Since 1985
            </p> */}

            {/* Breadcrumb (Optional) */}
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
            />
          </div>
        </div>
      </section>
      {/* Breadcrumb */}
      {/* Section 1: Contact Info */}
      <div className="space-y-16">
        {/* Section 1: Office Address Card */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-brand/10 p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-brand">Our</span>{" "}
                <span className="text-black">Offices</span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Office */}
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="flex items-start space-x-3">
                    <Building className="text-brand w-6 h-6 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Office Address</h4>
                      <p className="text-sm text-gray-700">
                        Ravi Auto House, 103, Park Street
                        
                        6th Floor, Kolkata - 700 016
                        
                        West Bengal, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Factory */}
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="flex items-start space-x-3">
                    <Factory className="text-brand w-6 h-6 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Factory Address</h4>
                      <p className="text-sm text-gray-700">
                       K2, Kalyani Industrial Growth Centre
                      
                       Phase – I, P.O. Gayeshpur, Kalyani
                      
                       Nadia, West Bengal, India.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-brand w-6 h-6 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-sm text-gray-700">+91 33 2227 2525</p>
                      <p className="text-sm text-gray-700">+91 33 2227 2526</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-5 rounded-lg shadow">
                  <div className="flex items-start space-x-3">
                    <Mail className="text-brand w-6 h-6 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-gray-700">
                        info@chandapaints.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Form with Left Image */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden">
            {/* Left Image */}
            <div className="h-full">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Form */}
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-brand">Contact Us</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-dark"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Section 3: Fullscreen Map */}
        <section className="h-[40vh] w-full">
          <iframe
            title="Saboo Sarees Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.969799892908!2d88.35192757485802!3d22.57901077948356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277aa6ae6ffbd%3A0x274e9d8b65247ff9!2sSiddha%20Point!5e0!3m2!1sen!2sin!4v1721692962611!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Contact;
