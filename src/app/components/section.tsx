import React from 'react';
import Image from 'next/image';

export default function ProductSection() {
  return (
    <section className="bg-[#FAF4F4] min-h-[672px] py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 mt-10">
        
        {/* First Image with Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6">
          <Image
            src="/table.png" // Replace with actual image path
            alt="Side Table"
            width={350}
            height={350}
            className="object-contain w-[90%] sm:w-[50%] md:w-[70%] lg:w-[70%]"
          />
          <h2 className="font-poppins font-medium text-xl text-gray-800">Side Table</h2>
          <button className="text-black font-semibold py-2 px-6 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
            View More
          </button>
        </div>

        {/* Second Image with Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6">
          <Image
            src="/sofa.png" // Replace with actual image path
            alt="Sofa"
            width={400}
            height={400}
            className="object-contain w-[90%] sm:w-[50%] md:w-[70%] lg:w-[70%]"
          />
          <h2 className="font-poppins font-medium text-xl text-gray-800">Sofa</h2>
          <button className="text-black font-semibold py-2 px-6 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}
