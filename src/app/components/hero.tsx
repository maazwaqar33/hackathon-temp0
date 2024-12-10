import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#FBEBB5] min-h-[700px] pt-16">
      <div className="max-w-7xl mx-auto h-auto flex flex-col-reverse sm:flex-row items-center px-4 sm:px-8 lg:px-16 py-8 gap-8">

        {/* Left Section: Heading */}
        <div className="w-full sm:w-1/2 text-center sm:text-left space-y-6">
          <h1 className="font-poppins font-medium text-4xl sm:text-5xl lg:text-6xl text-gray-800">
            Rocket Single Seater
          </h1>
          <button className="text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
            Shop Now
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <Image
            src="/output-onlinepngtools.png" // Replace with actual image path
            alt="Sofa"
            width={400}
            height={500}
            className="object-contain w-[70%] sm:w-[300px] lg:w-[500px] h-auto"
          />
        </div>

      </div>
    </section>
  );
}
