import React from 'react'
import Image from 'next/image';

export default function ProdDesc() {
  return (
    <section className="bg-white h-[744px] px-8 py-10 flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="flex space-x-8 mb-8">
        <button className="text-black text-lg font-medium border-b-2 border-black pb-2">
          Description
        </button>
        <button className="text-gray-500 text-lg font-medium">
          Additional Information
        </button>
        <button className="text-gray-500 text-lg font-medium">
          Reviews [5]
        </button>
      </div>

      {/* Content */}
      <div className="max-w-5xl text-left mb-10">
        <p className="text-gray-600 font-normal text-[16px] leading-7">
          Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-600 font-normal text-[16px] leading-7 mt-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Images */}
      <div className="flex justify-center space-x-6">
        <div className="bg-[#FFF9E5] p-4 rounded-lg">
          <Image
            src="/asgaard-sofa.png"
            alt="Sofa 1"
            width={500}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="bg-[#FFF9E5] p-4 rounded-lg">
          <Image
            src="/asgaard-sofa.png"
            alt="Sofa 3"
            width={500}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
