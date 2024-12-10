import React from 'react'
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";
import Image from "next/image";

export default function Article() {
  return (
    <div className="bg-white px-6 py-12">
      {/* Search Bar */}
      <div className="flex justify-end mb-8">
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search"
            className="h-[58px] w-full border border-gray-300 rounded-full px-4 text-gray-600 focus:outline-none focus:ring focus:ring-[#FBEBB5]"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            🔍
          </button>
        </div>
      </div>

      {/* Articles */}
      <div className="flex flex-col gap-12">
        {/* Article 1 */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-2/3">
            <Image
              src="/blog-1.png"
              alt="Article Image 1"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h2 className="text-black font-bold text-xl">Article Title 1</h2>
            <div className="flex gap-4 items-center text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag />
                <span>Category</span>
              </div>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation...
            </p>
            <span className="text-black font-medium underline cursor-pointer">
              Read more
            </span>
          </div>
        </div>

        {/* Article 2 */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-2/3">
            <Image
              src="/blog-1.png"
              alt="Article Image 2"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h2 className="text-black font-bold text-xl">Article Title 2</h2>
            <div className="flex gap-4 items-center text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag />
                <span>Category</span>
              </div>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation...
            </p>
            <span className="text-black font-medium underline cursor-pointer">
              Read more
            </span>
          </div>
        </div>

        {/* Article 3 */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-2/3">
            <Image
              src="/blog-1.png"
              alt="Article Image 3"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h2 className="text-black font-bold text-xl">Article Title 3</h2>
            <div className="flex gap-4 items-center text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag />
                <span>Category</span>
              </div>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation...
            </p>
            <span className="text-black font-medium underline cursor-pointer">
              Read more
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="mt-12 flex flex-col gap-8">
        <div>
          <h3 className="text-black font-bold mb-4">Categories</h3>
          <ul className="text-gray-600">
            <li className="mb-2">
              Crafts <span className="text-gray-400">(2)</span>
            </li>
            <li className="mb-2">
              Design <span className="text-gray-400">(5)</span>
            </li>
            <li className="mb-2">
              Handmade <span className="text-gray-400">(8)</span>
            </li>
            <li className="mb-2">
              Interior <span className="text-gray-400">(3)</span>
            </li>
            <li className="mb-2">
              Wood <span className="text-gray-400">(1)</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-bold mb-4">Recent Posts</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4 text-gray-600">
              <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                <Image
                  src="/blog-2.jpg"
                  alt="Recent Post 1"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-black font-medium">Recent Post Title 1</p>
                <span className="text-sm">03 Aug 2022</span>
              </div>
            </li>
            <li className="flex items-center gap-4 text-gray-600">
              <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                <Image
                  src="/blog-2.jpg"
                  alt="Recent Post 2"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-black font-medium">Recent Post Title 2</p>
                <span className="text-sm">03 Aug 2022</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full cursor-default bg-[#FBEBB5] text-black">
            1
          </div>
          <div className="px-4 py-2 rounded-full cursor-default bg-[#FFF9E5] text-gray-600">
            2
          </div>
          <div className="px-4 py-2 rounded-full cursor-default bg-[#FFF9E5] text-gray-600">
            3
          </div>
          <div className="px-4 py-2 rounded-full cursor-default bg-[#FFF9E5] text-gray-600">
            Next
          </div>
        </div>
      </div>
    </div>

  )
}
