'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export default function ProductDetail() {
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  return (
    <section className="bg-white h-auto p-4 md:p-8 flex justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        {/* Left Column: Small Images */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 justify-center md:justify-start mb-4 md:mb-0">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="cursor-pointer">
                <Image
                  src="/asgaard-sofa.png"
                  alt={`Product image ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] bg-[#FFF9E5]"
                />
              </div>
            ))}
        </div>

        {/* Center: Large Image */}
        <div className="mb-6 md:mb-0 mx-0 md:mx-8 flex justify-center">
          <div className="rounded-lg bg-[#FFF9E5] p-4">
            <Image
              src="/asgaard-sofa.png"
              alt="Selected Product"
              width={300}
              height={300}
              className="object-contain w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
            />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex-1 mx-0 md:mx-8">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Asgaard Sofa
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-2 mb-4">
            Rs. 250,000.00
          </p>
          <div className="flex items-center mt-2 mb-4">
            <div className="flex text-yellow-500">
              <span>⭐⭐⭐⭐</span> {/* Static star rating */}
            </div>
            <span className="ml-2 text-gray-500 text-sm sm:text-base">
              (5 Customer Reviews)
            </span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base mt-4 mb-6">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced
            audio...
          </p>

          {/* Size Selector */}
          <div className="mt-6 mb-6">
            <h4 className="text-gray-700 font-medium mb-2">Size</h4>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 text-black">
                L
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 text-black">
                XL
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 text-black">
                XS
              </button>
            </div>
          </div>

          {/* Color Selector */}
          <div className="mt-6 mb-6">
            <h4 className="text-gray-700 font-medium mb-2">Color</h4>
            <div className="flex space-x-2">
              <div
                style={{ backgroundColor: '#6A5ACD' }}
                className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
              ></div>
              <div
                style={{ backgroundColor: '#000000' }}
                className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
              ></div>
              <div
                style={{ backgroundColor: '#D2B48C' }}
                className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
              ></div>
            </div>
          </div>

          {/* Quantity Picker & Add to Cart Button */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md w-[20%] sm:w-auto">
              <button className="px-3 py-1 text-lg text-black">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 text-lg text-black">+</button>
            </div>
            <button
              className="w-[40%] sm:w-[160px] bg-transparent text-black border border-black py-2 rounded-md hover:bg-black hover:text-white text-center"
              onClick={() => setShowModal(true)}
            >
              Add to Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-sm text-gray-600 space-y-2">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
            <div className="mt-6 flex items-center space-x-2 text-gray-600 text-sm">
              <span>Share:</span>
              <FaFacebook className="text-black cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-black cursor-pointer hover:text-blue-700" />
              <FaTwitter className="text-black cursor-pointer hover:text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-[400px] rounded-lg shadow-lg p-6 relative overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button onClick={() => setShowModal(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#BFBBBB"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Product Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#FBEBB5] rounded-md"></div>
              <div className="flex-1">
                <h3 className="font-bold">Asgaard Sofa</h3>
                <p className="text-sm text-gray-600">1 x Rs. 250,000.00</p>
              </div>
            </div>

            {/* Spacer for Bottom Alignment */}
            <div className="flex-grow"></div>

            {/* Subtotal */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-[#B88E2F]">Rs. 250,000.00</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 border border-black text-black rounded-full py-3 font-semibold">
                View Cart
              </button>
              <button className="flex-1 border border-black text-black rounded-full py-3 font-semibold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}