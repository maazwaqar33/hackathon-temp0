import React from 'react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-12 px-12">
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 space-y-8 lg:space-y-0">
          
          {/* Address Section */}
          <div className="text-gray-500 text-sm mb-8 lg:mb-0 mr-10">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </div>

          {/* Links and Help Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-16 w-full lg:w-auto">
            {/* Links Menu */}
            <div className="mb-8 lg:mb-0 w-full lg:w-auto">
              <h2 className="font-semibold text-[#9F9F9F] mb-6">Links</h2>
              <ul className="space-y-4 text-black-700 font-semibold">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Menu */}
            <div className="mb-8 lg:mb-0 w-full lg:w-auto">
              <h2 className="font-semibold text-[#9F9F9F] mb-6">Help</h2>
              <ul className="space-y-4 text-black-700 font-semibold">
                <li>
                  <Link href="/payment" className="hover:underline">
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:underline">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-8 lg:mb-0 lg:flex-1 flex justify-start lg:justify-end w-full">
          <div>
            <h2 className="font-semibold text-[#9F9F9F] mb-6">Newsletter</h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-white focus:outline-none border-b border-black text-gray-700 placeholder-gray-500 flex-1 py-1"
              />
              <button className="text-black-700 font-semibold border-b border-black px-4 hover:text-gray-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 pt-4 text-left text-gray-500 text-sm px-8">
        2022 Meubel House. All rights reserved.
      </div>
    </footer>
  );
}
