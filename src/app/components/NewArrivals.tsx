import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewArrivals() {
  return (
    <section className="bg-[#FFF9E5] h-auto lg:h-[700px] flex flex-col lg:flex-row justify-between items-center px-8 py-10">
      {/* Left Side: Image */}
      <div className="flex-1 relative w-full h-[300px] lg:h-full mt-10 lg:mt-0">
        <Image
          src="/asgaard-sofa.png" // Replace with actual image path
          alt="Asgaard sofa"
          layout="fill"
          objectFit="contain"
          className="object-center"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex flex-col justify-center items-center lg:items-start space-y-4 lg:ml-12 text-center lg:text-left">
        <p className="text-lg font-medium text-black">
          New Arrivals
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold text-black leading-snug">
          Asgaard Sofa
        </h1>
        <Link href="/product">
        <button className="px-6 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition duration-300">
          Order Now
        </button>
        </Link>
      </div>
    </section>
  );
}
