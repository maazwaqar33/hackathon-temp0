import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";

export default function Article() {
  return (
    <div className="bg-white px-6 py-6 font-poppins">
    <div className="container mx-auto flex flex-col lg:flex-row gap-12">
      {/* Left Section: Blog Posts */}
      <div className="lg:w-2/3 flex flex-col gap-12">
        {/* Article 1 */}
        <div className="flex flex-col gap-6 items-start">
          <div className="w-full ">
            <Image
              src="/blog-1.png"
              alt="Article Image 1"
              width={600}
              height={500}
              className="w-full h-[500px] rounded-[10px] object-cover"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4 items-center text-gray-500 text-sm justify-start">
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
            <h2 className="text-black font-bold text-xl">Going all-in with millennial design</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices...
            </p>
            <button className="w-40 text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
              Read more
            </button>
          </div>
        </div>
  
        {/* Article 2 */}
        <div className="flex flex-col gap-6 items-start">
          <div className="w-full">
            <Image
              src="/blog-1.png"
              alt="Article Image 2"
              width={600}
              height={500}
              className="w-full h-[500px] rounded-[10px] object-cover"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4 items-center text-gray-500 text-sm justify-start">
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
            <h2 className="text-black font-bold text-xl">Exploring new ways of decorating</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices...
            </p>
            <button className="w-40 text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
              Read more
            </button>
          </div>
        </div>
      </div>
  
      {/* Right Section: Sidebar */}
      <div className="lg:w-1/3 flex flex-col gap-8">
        
        {/* Search Bar */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="h-[58px] w-full border border-gray-300 rounded-[10px] px-4 text-gray-600 focus:outline-none focus:ring focus:ring-[#FBEBB5]"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch />
          </button>
        </div>
  
        {/* Categories */}
        <div className="w-full ml-4">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="grid gap-4 text-sm">
            <li className="flex justify-between text-gray-600">
              <span>Crafts</span>
              <span className="ml-auto pr-6">2</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Design</span>
              <span className="ml-auto pr-6">5</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Handmade</span>
              <span className="ml-auto pr-6">8</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Interior</span>
              <span className="ml-auto pr-6">3</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Wood</span>
              <span className="ml-auto pr-6">1</span>
            </li>
          </ul>
        </div>
  
        {/* Recent Posts */}
        <div className="w-full ml-4">
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
      </div>
    </div>
  
    {/* Pagination */}
    <div className="flex justify-center mt-auto gap-2">
      
      <div className="w-10 h-10 flex items-center justify-center bg-[#FBEBB5] text-black font-semibold rounded-[10px] cursor-pointer">
        1
      </div>
    
      <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9E5] text-gray-500 font-semibold rounded-[10px] cursor-pointer">
        2
      </div>
      
      <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9E5] text-gray-500 font-semibold rounded-[10px] cursor-pointer">
        3
      </div>
      
      <div className="w-12 h-10 flex items-center justify-center bg-[#FFF9E5] text-gray-500 font-semibold rounded-[10px] cursor-pointer">
        Next
      </div>
    </div>
  </div>
  

  );
}
