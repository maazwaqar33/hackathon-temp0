import React from 'react'
export default function InstaSEC() {
  return (
    <section className="relative min-h-[450px]">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: `url('/cove-img.png')` }} 
  ></div>
  <div className="relative z-10 max-w-7xl mx-auto h-auto flex flex-col items-center px-4 sm:px-8 lg:px-16 py-8 gap-8">
    {/* Content Goes Here */}
    <h1 className="text-6xl font-bold mt-20 text-center text-black">Our Instagram</h1>
    <h3 className="text-1xl font-light text-center text-black">Follow our store on instagram</h3>
    
    {/* Follow Us Button */}
    <button className='bg-white text-black rounded-full flex items-center justify-center py-3 px-8 mt-4 transition-transform duration-200 hover:scale-105 hover:bg-gray-200 w-[200px]'>
      Follow Us
    </button>
  </div>
</section>
  );
}
