"use client"; // Mark as a client component to use React hooks

import React, { useState } from 'react';
import Link from 'next/link';
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between space-x-0.5 py-4 px-8 mr-10">
      {/* Left section: Empty space for alignment */}
      <div className="w-1/12"></div> {/* Small left margin */}

      {/* Middle section: Navigation links (Home, Shop, About, Contact) */}
      <div className="flex justify-center w-full sm:w-auto flex-grow">
        <nav className="font-poppins flex space-x-10 sm:space-x-4 lg:space-x-10 hidden sm:flex">
          <Link href="/" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Home
          </Link>
          <Link href="/shop" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Shop
          </Link>
          <Link href="/about" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            About
          </Link>
          <Link href="/contact" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Contact
          </Link>
        </nav>
      </div>

      {/* Right section: Icons (Profile, Search, Favorites, Cart) */}
      <div className="hidden sm:flex flex space-x-8 sm:space-x-4 ml-auto">
        <Link href="/profile" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <FiUser />
        </Link>
        <Link href="/search" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <FiSearch />
        </Link>
        <Link href="/favorites" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <FiHeart />
        </Link>
        <Link href="/cart" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <FiShoppingCart />
        </Link>
      </div>

      {/* Mobile Burger Icon (will toggle the menu) */}
      <div className="sm:hidden flex items-center">
        <button className="text-lg" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
          ☰ {/* Burger Icon */}
        </button>
      </div>

      {/* Mobile Menu (appears when burger icon is clicked) */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden fixed top-16 left-0 right-0 bg-white shadow-md rounded-l-md z-50`}>
        <nav className="flex flex-col space-y-4 py-4 px-8">
          <Link href="/" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Home
          </Link>
          <Link href="/shop" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Shop
          </Link>
          <Link href="/about" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            About
          </Link>
          <Link href="/contact" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Contact
          </Link>

          {/* Mobile icons */}
          <Link href="/profile" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
            <FiUser />
          </Link>
          <Link href="/search" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
            <FiSearch />
          </Link>
          <Link href="/favorites" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
            <FiHeart />
          </Link>
          <Link href="/cart" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
            <FiShoppingCart />
          </Link>
        </nav>
      </div>
    </header>
  );
}
