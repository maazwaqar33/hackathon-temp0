import React from 'react'

export default function Offer() {
  return (
    <section className="bg-[#FAF4F4] h-[300px] flex items-center justify-center px-4">
  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-black text-center">
    {/* Left Heading */}
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Free Delivery</h2>
      <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-600">
        For all orders over $50, consectetur adipim scing elit.
      </p>
    </div>

    {/* Center Heading */}
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">90 Days Return</h2>
      <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-600">
        If goods have problems, consectetur adipim scing elit.
      </p>
    </div>

    {/* Right Heading */}
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Secure Payment</h2>
      <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-600">
        100% secure payment, consectetur adipim scing elit.
      </p>
    </div>
  </div>
</section>

  )
}
