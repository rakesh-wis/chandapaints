const productData = {
  "Bitumenous Coatings": [
    {
      name: "PCBIT III HB Bitumenous Solution",
      image: "https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg",
      certification: "ISO 9001",
      mixingRatio: "Single Pack",
      volumeSolid: "60%",
      dft: "100 µm",
      tsr: "6 m²/ltr",
    },
    {
      name: "PCBIT III HT",
      image: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg",
      certification: "API Compliant",
      mixingRatio: "Single Pack",
      volumeSolid: "62%",
      dft: "110 µm",
      tsr: "5.5 m²/ltr",
    },
    {
      name: "Bitumenous III QD 828",
      image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
      certification: "BIS Approved",
      mixingRatio: "Single Pack",
      volumeSolid: "58%",
      dft: "90 µm",
      tsr: "6.5 m²/ltr",
    },
    {
      name: "Bitalu 815",
      image: "https://images.pexels.com/photos/2383538/pexels-photo-2383538.jpeg",
      certification: "Industrial Grade",
      mixingRatio: "Single Pack",
      volumeSolid: "64%",
      dft: "105 µm",
      tsr: "5.8 m²/ltr",
    },
    {
      name: "Sealcoat Black",
      image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
      certification: "Lead-Free",
      mixingRatio: "Single Pack",
      volumeSolid: "66%",
      dft: "95 µm",
      tsr: "6.3 m²/ltr",
    },
  ],

  "Epoxy Coating": [
    {
      name: "Edelpoxy FN 132",
      image: "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg",
      certification: "ISO 12944",
      mixingRatio: "4:1",
      volumeSolid: "65%",
      dft: "125 µm",
      tsr: "5.2 m²/ltr",
    },
    {
      name: "Edelpoxy FN TM 142",
      image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
      certification: "REACH Compliant",
      mixingRatio: "4:1",
      volumeSolid: "68%",
      dft: "130 µm",
      tsr: "4.9 m²/ltr",
    },
    {
      name: "Edelpoxy FN SL 151",
      image: "https://images.pexels.com/photos/2383538/pexels-photo-2383538.jpeg",
      certification: "Heavy Duty Grade",
      mixingRatio: "3:1",
      volumeSolid: "70%",
      dft: "150 µm",
      tsr: "4.5 m²/ltr",
    },
  ],
  "Chlorinated Rubber Coatings": [
    {
      name: "ChloroCoat CR",
      image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
      certification: "REACH Compliant",
      mixingRatio: "Single Pack",
      volumeSolid: "55%",
      dft: "100 µm",
      tsr: "5.0 m²/ltr",
    },
  ],
  "Zinc Based Primers": [
    {
      name: "Zinc Shield",
      image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
      certification: "ISO 12944",
      mixingRatio: "3:1",
      volumeSolid: "70%",
      dft: "80 µm",
      tsr: "8 m²/ltr",
    },
  ],
  Thinners: [
    {
      name: "Thinner XPT",
      image: "https://images.pexels.com/photos/2383538/pexels-photo-2383538.jpeg",
      certification: "Industrial Grade",
      mixingRatio: "N/A",
      volumeSolid: "N/A",
      dft: "N/A",
      tsr: "As required",
    },
  ],
};

export default function ProductSector() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {Object.entries(productData).map(([section, products]) => (
        <div key={section}>
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-brand">{section.split(" ")[0]}</span>{" "}
            <span className="text-black">{section.split(" ").slice(1).join(" ")}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden group transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Certification:</strong> {product.certification}</li>
                    <li><strong>Mixing Ratio:</strong> {product.mixingRatio}</li>
                    <li><strong>Volume Solid:</strong> {product.volumeSolid}</li>
                    <li><strong>D.F.T. per coat:</strong> {product.dft}</li>
                    <li><strong>T.S.R.:</strong> {product.tsr}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
