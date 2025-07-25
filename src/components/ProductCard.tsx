// src/components/ProductCard.tsx
import { FC } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={title.replace(/\s+/g, "-").toLowerCase()} className="bg-brand text-white py-2 px-4 rounded-lg hover:bg-brand-dark transition-colors">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
