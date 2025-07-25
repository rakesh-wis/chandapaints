// import React from 'react';

// const ProductCategory = () => {
//     return (
//         <div>
            
//         </div>
//     );
// }

// export default ProductCategory;

// src/pages/Primers.tsx
import ProductCard from "../components/ProductCard";

export const primers = [
  {
    title: "EPOXY",
    description: "High-performance epoxy primer for industrial surfaces.",
    image: "https://img.freepik.com/free-photo/colorful-paint-cans-assortment-high-angle_23-2149601073.jpg?uid=R77643989&ga=GA1.1.1908691577.1743170395&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Zinc Primer",
    description: "Zinc-rich coating for rust prevention.",
    image: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg",
  },
  {
    title: "Heat Resistant Primer",
    description: "Withstands high temperatures for machinery.",
    image: "https://images.pexels.com/photos/267089/pexels-photo-267089.jpeg",
  },
];
export default function ProductCategory() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-brand">Primers</span> Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {primers.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
