import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Clients = () => {
  const clientImages = [
    '../../dist/assets/img/clients/client-1.png',
    '../../dist/assets/img/clients/client-2.png',
    '../../dist/assets/img/clients/client-3.png',
    '../../dist/assets/img/clients/client-4.png',
    '../../dist/assets/img/clients/client-5.png',
    '../../dist/assets/img/clients/client-6.png',
    '../../dist/assets/img/clients/client-7.png',
    '../../dist/assets/img/clients/client-8.png',
    '../../dist/assets/img/clients/client-9.png',
    '../../dist/assets/img/clients/client-10.png'
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to serve leading companies across diverse industries, 
            providing reliable paint solutions that meet the highest standards.
          </p>
        </div>

        {/* Client Image Carousel */}
        <div className="">
          {/* <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Valued Partners</h3> */}
{/* 0656128314421820250713124945 */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
          >
            {clientImages.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md h-28 mb-4">
                  <img
                    src={imgSrc}
                    alt={`Client ${index + 1}`}
                    className="max-h-16 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* You can keep the "Industries We Serve" and CTA sections unchanged */}
      </div>
    </section>
  );
};

export default Clients;
