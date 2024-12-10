import Link from 'next/link';
import React from 'react';

export default function Product() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {/*Product 1 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
            <Link href="/product">
            <img
              src="/asgaard-sofa.png"
              alt="Trenton modular sofa_3"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Trenton modular sofa_3
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>

        {/*Product 2 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
            <Link href="/product">
            <img
              src="/bar-table.png"
              alt="Granite dining table with dining chair"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Granite dining table with dining chair
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
          <Link href="/product">
            <img
              src="/granite-chair.png"
              alt="Outdoor bar table and stool"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Outdoor bar table and stool
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>

        {/*Product 4 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
          <Link href="/product">
            <img
              src="/output-onlinepngtools.png"
              alt="Plain console with teak mirror"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Plain console with teak mirror
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>

        {/* Product 5 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
          <Link href="/product">
            <img
              src="/sofa.png"
              alt="Grain coffee table"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Grain coffee table
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>

        {/*  Product 6 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
          <Link href="/product">
            <img
              src="/table.png"
              alt="Kent coffee table"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Kent coffee table
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>

        {/* Product 7 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
          <Link href="/product">
            <img
              src="/teak-mirror.png"
              alt="Round coffee table_color 2"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Round coffee table_color 2
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>

        {/* Hardcoded Product 8 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="w-full aspect-square rounded-lg overflow-hidden">
          <Link href="/product">
            <img
              src="/trenton-sofa.png"
              alt="Reclaimed teak coffee table"
              className="object-contain w-full h-full"
            />
            </Link>
          </div>
          {/* Product Info */}
          <h3 className="font-poppins font-medium text-base md:text-lg text-gray-800 text-center">
            Reclaimed teak coffee table
          </h3>
          <p className="font-poppins text-gray-700 text-center">Rs. 25,000.00</p>
        </div>
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
