import React from 'react';

const products = [
  {
    name: "Edelpoxy ZPPR 101",
    subtitle: "(HB Epoxy Zinc Phosphate Primer)",
    image: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg",
    pack: "20 Ltrs",
    mixingRatio: "4:1",
    volumeSolid: "45%",
    dft: "50 - 75",
    tsr: "9.0 - 6.0",
  },
  {
    name: "PCBIT III HB",
    subtitle: "(Bituminous Solution)",
    image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
    pack: "20 Ltrs",
    mixingRatio: "3:1",
    volumeSolid: "40%",
    dft: "40 - 60",
    tsr: "8.0 - 5.0",
  },
  {
    name: "Edelpoxy FN 132",
    subtitle: "(Epoxy Coating)",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
    pack: "10 Ltrs",
    mixingRatio: "2:1",
    volumeSolid: "55%",
    dft: "60 - 80",
    tsr: "7.0 - 5.0",
  },
  {
    name: "Sealcoat Black",
    subtitle: "(Protective Sealant)",
    image: "https://images.pexels.com/photos/414949/pexels-photo-414949.jpeg",
    pack: "5 Ltrs",
    mixingRatio: "1:1",
    volumeSolid: "50%",
    dft: "30 - 50",
    tsr: "10.0 - 7.0",
  },
  {
    name: "Bitalu 815",
    subtitle: "(Quick Dry Bitumen)",
    image: "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg",
    pack: "15 Ltrs",
    mixingRatio: "4:1",
    volumeSolid: "42%",
    dft: "45 - 65",
    tsr: "9.0 - 6.5",
  },
];
const ProductCategoryDetails = () => {
    return (
        <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-10">
        <span className="text-brand">Product</span> Details
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-brand mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{product.subtitle}</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <p><span className="font-medium">Pack:</span> {product.pack}</p>
                <p><span className="font-medium">Mixing:</span> {product.mixingRatio}</p>
                <p><span className="font-medium">Volume Solid:</span> {product.volumeSolid}</p>
                <p><span className="font-medium">D.F.T.:</span> {product.dft}</p>
                <p><span className="font-medium">T.S.R.:</span> {product.tsr}</p>
              </div>
              <button className="mt-4 w-full bg-brand hover:bg-brand-dark text-white py-2 rounded-md transition">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default ProductCategoryDetails;
