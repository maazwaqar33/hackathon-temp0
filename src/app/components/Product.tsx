import React from 'react';

const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/asgaard-sofa.png" },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "/bar-table.png" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/granite-chair.png" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/output-onlinepngtools.png" },
    { id: 5, name: "Grain coffee table", price: "Rs. 25,000.00", image: "/sofa.png" },
    { id: 6, name: "Kent coffee table", price: "Rs. 25,000.00", image: "/table.png" },
    { id: 7, name: "Round coffee table_color 2", price: "Rs. 25,000.00", image: "/teak-mirror.png" },
    { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,000.00", image: "/trenton-sofa.png" },
    { id: 9, name: "Teakwood dining table", price: "Rs. 25,000.00", image: "/asgaard-sofa.png" },
    { id: 10, name: "Vintage teak armoire", price: "Rs. 25,000.00", image: "/teak-mirror.png" },
    { id: 11, name: "Rustic outdoor set", price: "Rs. 25,000.00", image: "/trenton-sofa.png" },
    { id: 12, name: "Green metal chairs set", price: "Rs. 25,000.00", image: "/output-onlinepngtools.png" },
    { id: 13, name: "Oakwood side table", price: "Rs. 25,000.00", image: "/granite-chair.png" },
    { id: 14, name: "Rattan armchairs set", price: "Rs. 25,000.00", image: "/bar-table.png" },
    { id: 15, name: "Modern sofa set", price: "Rs. 25,000.00", image: "/asgaard-sofa.png" },
    { id: 16, name: "Blue lounge chair", price: "Rs. 25,000.00", image: "/trenton-sofa.png" },
];

export default function Product() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center space-y-4">
            {/* Image */}
            <div className="w-full aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>
            {/* Product Info */}
            <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
              {product.name}
            </h3>
            <p className="font-poppins text-gray-700 text-center">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center gap-4">
        <button className="w-10 h-10 bg-[#FBEBB5] text-black font-medium rounded-md">1</button>
        <button className="w-10 h-10 bg-[#FFF9E5] text-black font-medium rounded-md">2</button>
        <button className="w-10 h-10 bg-[#FFF9E5] text-black font-medium rounded-md">3</button>
        <button className="w-20 h-10 bg-[#FFF9E5] text-black font-medium rounded-md">Next</button>
      </div>
    </section>
  );
}
