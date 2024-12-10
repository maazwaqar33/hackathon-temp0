import React from "react";
import Image from "next/image";

// Define the props type
interface HeroSectionProps {
  heading?: string;
  subheading?: string;
}

export default function HeroSection({ heading, subheading }: HeroSectionProps) {
  return (
    <section className="relative min-h-[316px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/shophead.png')` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-8 gap-1">
        {/* Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Heading */}
        {heading && (
          <h1 className="text-4xl font-semibold mt-4 text-center text-black">
            {heading}
          </h1>
        )}

        {/* Subheading */}
        {subheading && (
          <h3 className="text-1xl font-light text-center text-black">
            {subheading}
          </h3>
        )}
      </div>
    </section>
  );
}
