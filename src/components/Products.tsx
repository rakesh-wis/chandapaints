import React, { useState } from "react";
import {
  Factory,
  Building,
  Car,
  Ship,
  Palette,
  CheckCircle,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("category");

  const categories = [
    {
      id: "category",
      name: "Category Wise",
      icon: Factory,
      description: "Heavy-duty protection for industrial applications",
    },
    {
      id: "sector",
      name: "Sector Wise",
      icon: Building,
      description: "Professional finishes for commercial spaces",
    },
  ];

  // const products = {
  const categoryProduct = [
      {
        name: "Primers",
        description:
          "High-build epoxy primer for steel structures and heavy machinery",
        features: ["Excellent adhesion", "Corrosion resistance", "Fast curing"],
        image: "https://img.freepik.com/free-photo/colorful-paint-cans-assortment-high-angle_23-2149601073.jpg?uid=R77643989&ga=GA1.1.1908691577.1743170395&semt=ais_hybrid&w=740&q=80",

      },
      {
        name: "Intermediate",
        description:
          "Specialized coating for high-temperature industrial equipment",
        features: ["Withstands 600°C", "Chemical resistant", "Long-lasting"],
        image:
          "https://img.freepik.com/premium-vector/creative-simple-design-color-theory-circle_124507-4939.jpg",
      },
      {
        name: "Top Coats",
        description: "Premium protection against rust and corrosion",
        features: ["Zinc-rich formula", "15-year warranty", "VOC compliant"],
        image:
          "https://img.freepik.com/free-photo/set-new-watercolor_23-2147895697.jpg",
      },
      {
        name: "Bituminous Products",
        description:
          "Reliable waterproofing and protective solutions for concrete and metal",
        features: ["Waterproof", "Anti-corrosive", "Economic"],
        image:
          "https://img.freepik.com/free-photo/top-view-paint-can_23-2149705393.jpg",
      },
      {
        name: "Thinners",
        description:
          "Solvent-based thinners suitable for various paint applications",
        features: ["Improves flow", "Fast drying", "Multi-purpose"],
        image:
          "https://img.freepik.com/free-photo/top-view-paint-can_23-2149705366.jpg",
      },
    ]

  const  sectorProduct = [
      {
        name: "Ductile Iron Pipes & Fittings",
        description:
          "Durable and corrosion-resistant piping solutions for water and wastewater systems.",
        features: [
          "High tensile strength",
          "Leak-free joints",
          "Long service life",
        ],
        image:
          "https://img.freepik.com/free-photo/round-steel_1127-3292.jpg",
      },
      {
        name: "Iron & Steel Industry",
        description:
          "Protective coatings and solutions for harsh iron and steel production environments.",
        features: ["Heat resistant", "Anti-corrosive", "Heavy-duty durability"],
        image:
          "https://img.freepik.com/premium-photo/stack-books-shelf-sale_1048944-7828877.jpg",
      },
      {
        name: "Engineer & Fabrication",
        description:
          "Tailored solutions for metal fabrication and engineered structures.",
        features: ["Custom coatings", "Structural strength", "Weld-friendly"],
        image:
          "https://img.freepik.com/free-photo/high-angle-measuring-tools-desk_23-2150440973.jpg",
      },
      {
        name: "Construction",
        description:
          "Protective and aesthetic coatings for the building and construction sector.",
        features: ["Weatherproof", "UV resistant", "Quick application"],
        image:
          "https://img.freepik.com/premium-photo/colorful-scaffolding-covering-modern-building_926058-37360.jpg",
      },
      {
        name: "Petrochemical & Power Plant",
        description:
          "Industrial-grade coatings for high-temperature and chemical exposure areas.",
        features: [
          "Chemical resistant",
          "Thermal stability",
          "Corrosion protection",
        ],
        image:
          "https://images.pexels.com/photos/5472021/pexels-photo-5472021.jpeg",
      },
      {
        name: "Automobile",
        description:
          "Specialized coatings for vehicle components and body parts.",
        features: ["High gloss", "Scratch resistance", "Flexible finishes"],
        image:
          "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      },
      {
        name: "Industrial Cylinder",
        description:
          "Protective paint systems for gas and hydraulic industrial cylinders.",
        features: ["Impact resistant", "Gloss retention", "Long-lasting"],
        image:
          "https://images.pexels.com/photos/960248/pexels-photo-960248.jpeg",
      },
      {
        name: "Roof Coatings",
        description:
          "Weatherproof coatings designed to protect roofs from leaks and wear.",
        features: ["Reflective", "Waterproof", "UV protection"],
        image:
          "https://images.pexels.com/photos/3935339/pexels-photo-3935339.jpeg",
      },
      {
        name: "Tea Industry",
        description:
          "Specialized coatings for machinery and structures used in tea processing plants.",
        features: [
          "Food-grade safety",
          "Corrosion prevention",
          "Easy cleaning",
        ],
        image:
          "https://images.pexels.com/photos/4050684/pexels-photo-4050684.jpeg",
      },
    ]
  

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of high-performance paints and coatings designed
            to meet the demanding requirements of modern industries.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-4">
            {/* {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                    activeCategory === category.id
                      ? "bg-brand text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              );
            })} */}
            {/* Custom Navigation Buttons */}
          </div>
          {/* {products[activeCategory as keyof typeof products].length > 3 ? (
            <div className="absolute top-4 right-0 z-10">
              <div className="space-x-6 p-4 text-sm block w-24">
                <div className="swiper-button-prev !text-white bg-brand hover:bg-brand-dark p-4 w-5 h-5 rounded-full cursor-pointer transition" />
                <div className="swiper-button-next !text-white bg-brand hover:bg-brand-dark p-4 w-5 h-5 rounded-full cursor-pointer transition" />
              </div>
            </div>
          ) : null} */}
        </div>
        {/* Products Grid */}
        <div className="flex gap-6 items-stretch">
          <div className="w-3/4 flex-1">
            {categoryProduct.length > 3 ? ((
              (
                <div className="relative">
                  {/* Swiper Slider */}
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="category-product-swiper"
                  >
                    {categoryProduct.map(
                      (product, index) => (
                        <SwiperSlide key={index}>
                          {/* Product Card */}
                          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group mb-4">
                            <div className="relative overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                              <h4 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed line-clamp-2 min-h-16">
                                {product.name}
                              </h4>
                              <p className="text-gray-600 mb-4 leading-relaxed min-h-12 line-clamp-2">
                                {product.description}
                              </p>

                              {/* <div className="space-y-2 mb-6">
                                {product.features.map(
                                  (feature, featureIndex) => (
                                    <div
                                      key={featureIndex}
                                      className="flex items-center space-x-2"
                                    >
                                      <CheckCircle
                                        className="text-green-500"
                                        size={16}
                                      />
                                      <span className="text-sm text-gray-700">
                                        {feature}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div> */}

                              <Link
                                to={`/${activeCategory}/${product.name
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}`}
                                className="w-full block text-center bg-brand hover:bg-brand-dark text-white py-3 rounded-lg font-medium transition-colors"
                              >
                                View Product
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
              ))
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProduct.map(
                  (product, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed line-clamp-2 min-h-16">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle
                                className="text-green-500"
                                size={16}
                              />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="w-full bg-brand hover:bg-brand-dark text-white py-3 rounded-lg font-medium transition-colors">
                          View Product
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}  
          </div>
          <div className="w-1/4 flex-1 bg-slate-200 p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">
              Category Wise Products
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our extensive range of products tailored for various
              industrial applications.
            </p>
            <Link
              to={`/category`}
              className="text-brand hover:underline"
            >
              View All Products
            </Link>
            {categoryProduct.length > 3 ? (
              <div className="relative mt-6">
                <div className="space-x-6 p-4 text-sm block w-24">
                  <div className="swiper-button-prev !text-white bg-brand hover:bg-brand-dark p-4 w-5 h-5 rounded-full cursor-pointer transition" />
                  <div className="swiper-button-next !text-white bg-brand hover:bg-brand-dark p-4 w-5 h-5 rounded-full cursor-pointer transition" />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex gap-6 items-stretch mt-20">
          <div className="w-1/4 bg-slate-200 p-4 flex-1 rounded-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">
              Sector Wise Products
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our extensive range of products tailored for various
              industrial applications.
            </p>
            <Link
              to={`/category`}
              className="text-brand hover:underline"
            >
              View All Products
            </Link>
            {sectorProduct.length > 3 ? (
              <div className="relative mt-6">
                <div className="space-x-6 p-4 text-sm block w-24">
                  <div className="swiper-button-prev !text-white bg-brand hover:bg-brand-dark p-4 w-5 h-5 rounded-full cursor-pointer transition" />
                  <div className="swiper-button-next !text-white bg-brand hover:bg-brand-dark p-4 w-5 h-5 rounded-full cursor-pointer transition" />
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-3/4 flex-1">
            {sectorProduct.length > 3 ? (
              (console.log("Rendering Swiper Slider", sectorProduct),
              (
                <div className="relative">
                  {/* Swiper Slider */}
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="sector-product-swiper"
                  >
                    {sectorProduct.map((product, index) => (
                      <SwiperSlide key={index}>
                        {/* Product Card */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group mb-4">
                          <div className="relative overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                              <h4 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed line-clamp-2 min-h-16">
                                {product.name}
                              </h4>
                              <p className="text-gray-600 mb-4 leading-relaxed min-h-12 line-clamp-2">
                                {product.description }
                              </p>

                              {/* <div className="space-y-2 mb-6">
                                {product.features.map(
                                  (feature, featureIndex) => (
                                    <div
                                      key={featureIndex}
                                      className="flex items-center space-x-2"
                                    >
                                      <CheckCircle
                                        className="text-green-500"
                                        size={16}
                                      />
                                      <span className="text-sm text-gray-700">
                                        {feature}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div> */}

                              <Link
                                to={`/sector/${product.name
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}`}
                                className="w-full block text-center bg-brand hover:bg-brand-dark text-white py-3 rounded-lg font-medium transition-colors"
                              >
                                View Product
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
              ))
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectorProduct.map(
                  (product, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed line-clamp-2 min-h-16">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle
                                className="text-green-500"
                                size={16}
                              />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="w-full bg-brand hover:bg-brand-dark text-white py-3 rounded-lg font-medium transition-colors">
                          View Product
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center relative overflow-hidden rounded-3xl shadow-xl">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url('../../dist/assets/img/cta-1.jpg')`,
            }} // <- your background image
          ></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 px-6 py-16 sm:px-12 text-white">
            <h3 className="text-4xl font-bold mb-4 drop-shadow">
              Need a Custom Solution?
            </h3>
            <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Our technical team can develop custom formulations tailored to
              your specific requirements and performance standards.
            </p>
            <button className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
