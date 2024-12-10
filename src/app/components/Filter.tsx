import React from 'react'
import { FiGrid, FiList, FiFilter } from 'react-icons/fi';

export default function Filter() {
  return (
    <section className="bg-[#FAF4F4] h-[100px] flex items-center justify-between px-6 sm:px-10">
      {/* Left Section: Filter, Grid, and List Icons */}
      <div className="flex items-center gap-4">
        {/* Filter Icon */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FiFilter className="text-lg text-black cursor-pointer hover:text-gray-700" />
          <span className="text-black font-medium cursor-pointer hover:text-gray-700">Filter</span>
        </div>

        {/* Grid and List Icons */}
        <div className="flex items-center gap-2">
          <FiGrid className="text-xl text-black cursor-pointer hover:text-gray-700" />
          <FiList className="text-xl text-black cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Center Divider */}
      <div className="h-[20px] w-[1px] bg-black-700 hidden sm:block"></div>

      {/* Middle Section: Showing Results */}
      <div className="hidden sm:block text-black font-medium text-sm cursor-pointer hover:text-gray-700">
        Showing 1–16 of 32 results
      </div>

      {/* Right Section: Show and Sort */}
      <div className="flex items-center gap-4">
        {/* Show Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-black font-medium cursor-pointer hover:text-gray-700">Show</span>
          <span className="bg-gray-200 text-black py-1 px-3 rounded-md text-sm cursor-pointer hover:text-gray-700">
            16
          </span>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-black font-medium">Short by</span>
          <span className="bg-gray-200 text-black py-1 px-3 rounded-md text-sm cursor-pointer">
            Default
          </span>
        </div>
      </div>
    </section>
  )
}
