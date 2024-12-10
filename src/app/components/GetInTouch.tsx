import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section className="bg-white flex items-center justify-center py-16"> 
    <div className="max-w-5xl w-full px-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black">Get In Touch With Us</h2>
        <p className="text-gray-500 mt-4">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
  
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Contact Info */}
        <div className="space-y-10">
          {/* Address */}
          <div className="flex items-start space-x-6">
            <FaMapMarkerAlt className="text-black text-2xl" />
            <div>
              <h4 className="text-black font-bold">Address</h4>
              <p className="text-gray-500">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-6">
            <FaPhoneAlt className="text-black text-2xl" />
            <div>
              <h4 className="text-black font-bold">Phone</h4>
              <p className="text-gray-500">Mobile: +(84) 546-6789</p>
              <p className="text-gray-500">Hotline: +(84) 456-6789</p>
            </div>
          </div>
          {/* Working Time */}
          <div className="flex items-start space-x-6">
            <FaClock className="text-black text-2xl" />
            <div>
              <h4 className="text-black font-bold">Working Time</h4>
              <p className="text-gray-500">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
  
        {/* Right: Contact Form */}
        <div>
          <form className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            {/* Subject */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="This is an optional"
              />
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                rows={4}
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-48 py-2 text-black bg-white border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
