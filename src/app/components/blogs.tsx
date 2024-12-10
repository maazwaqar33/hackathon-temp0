import Image from 'next/image';
import { FiCalendar, FiClock } from 'react-icons/fi';
import React from 'react';

export default function Blogs() {
  const blogData = [
    {
      image: '/blog-1.png',
      title: 'Going all-in with millennial design',
      readTime: '5 min',
      date: '12th Oct 2022',
    },
    {
      image: '/blog-2.jpg',
      title: 'Going all-in with millennial design',
      readTime: '5 min',
      date: '12th Oct 2022',
    },
    {
      image: '/blog-3.jpg',
      title: 'Going all-in with millennial design',
      readTime: '5 min',
      date: '12th Oct 2022',
    },
  ];

  return (
    <section className="py-12 px-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-5">Our Blogs</h2>
        <p className="text-gray-500">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden p-4"
          >
            {/* Blog Image */}
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-[250px] object-cover rounded-lg"
            />
            {/* Blog Content */}
            <div className="p-4 text-center space-y-4">
              <h3 className="text-lg font-semibold text-black">{blog.title}</h3>
              <button className="text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
                Read More
              </button>
              <div className="flex justify-center items-center text-black text-sm space-x-4 mt-4">
                <span className="flex items-center">
                  <FiCalendar className="mr-1" /> {blog.date}
                </span>
                <span className="flex items-center">
                  <FiClock className="mr-1" /> {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
          View All Post
        </button>
      </div>
    </section>
  );
}
