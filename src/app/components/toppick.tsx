import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopPicks() {
  return (
    <section className="bg-white min-h-[600px] py-8">
      <div className="max-w-7xl mx-auto px-4 mt-10 mb-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-800">
            Top Picks For You
          </h2>
          <p className="mt-2 text-gray-500 text-base lg:text-lg">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[200px] h-[170px] flex items-center justify-center">
              <Image
                src="/trenton-sofa.png" // Replace with the actual image path
                alt="Trenton Modular Sofa"
                width={200}
                height={139}
                className="object-contain"
              />
            </div>
            <h3 className="font-medium text-lg text-gray-800 mt-4">
              Trenton modular sofa_3
            </h3>
            <p className="text-gray-700 font-semibold mt-2">Rs. 25,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[200px] h-[170px] flex items-center justify-center">
              <Image
                src="/granite-chair.png" // Replace with the actual image path
                alt="Granite Dining Table"
                width={200}
                height={139}
                className="object-contain"
              />
            </div>
            <h3 className="font-medium text-lg text-gray-800 mt-4">
              Granite dining table with dining chair
            </h3>
            <p className="text-gray-700 font-semibold mt-2">Rs. 25,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[200px] h-[170px] flex items-center justify-center">
              <Image
                src="/bar-table.png" // Replace with the actual image path
                alt="Outdoor Bar Table"
                width={200}
                height={170}
                className="object-contain"
              />
            </div>
            <h3 className="font-medium text-lg text-gray-800 mt-4">
              Outdoor bar table and stool
            </h3>
            <p className="text-gray-700 font-semibold mt-2">Rs. 25,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-[200px] h-[170px] flex items-center justify-center">
              <Image
                src="/teak-mirror.png" // Replace with the actual image path
                alt="Plain Console with Teak Mirror"
                width={200}
                height={143}
                className="object-contain"
              />
            </div>
            <h3 className="font-medium text-lg text-gray-800 mt-4">
              Plain console with teak mirror
            </h3>
            <p className="text-gray-700 font-semibold mt-2">Rs. 25,000.00</p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
        <Link href="/shop">
          <button className="text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
            View More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
