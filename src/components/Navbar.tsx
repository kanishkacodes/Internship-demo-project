"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    
    <nav className="bg-yellow-600 bg-opacity-50 py-3 flex items-center justify-between sticky top-0 w-full z-50">
      {/* Logo */}
      <div className="ml-4 md:ml-6 mt-2 mb-4 pb-2">
        <div className="h-8 md:h-12">
          <Link href="/">
            <Image
              src="/demologo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
      {/* Hamburger menu for tablet and mobile */}
      <div className="md:hidden mr-4">
        <button className="text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Menu items for desktop view */}
      <div className="hidden md:flex flex-grow  justify-end pr-3 mr-3">
        <Link
          href="/"
          className="transition duration-300 hover:text-white mx-4"
        >
          Home
        </Link>
        <Link
          href="/About"
          onClick={closeMenu}
          className="transition duration-300 hover:text-white mx-4"
        >
          About
        </Link>
        <Link
          href="/Brevary"
          onClick={closeMenu}
          className="transition duration-300 hover:text-white mx-4"
        >
          Brewery
        </Link>
        <Link
          href="/Reservation"
          onClick={closeMenu}
          className="transition duration-300 hover:text-white mx-4"
        >
          Reservation
        </Link>
        <Link
          href="/CorporateParties"
          onClick={closeMenu}
          className="transition duration-300 hover:text-white mx-4"
        >
          Corporate Parties
        </Link>
        <Link
          href="/Contact"
          onClick={closeMenu}
          className="transition duration-300 hover:text-white mx-4"
        >
          Contact Us
        </Link>
        <Link
          href="/Careers"
          onClick={closeMenu}
          className="transition duration-300 hover:text-white mx-4"
        >
          Careers
        </Link>
       
      </div>
      
      <div
        className={`md:hidden absolute top-16 right-0 left-0 bg-yellow-500 bg-opacity-50 mt-6 rounded-bl-xl rounded-br-xl py-2 ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/About"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-white"
        >
          About
        </Link>
        <Link
          href="/Brevary"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-white"
        >
          Brewery
        </Link>
        <Link
          href="/Reservation"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-white"
        >
          Reservation
        </Link>
        <Link
          href="/CorporateParties"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-white"
        >
          Corporate Parties
        </Link>
        <Link
          href="/Contact"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-white"
        >
          Contact Us
        </Link>
        <Link
          href="/Careers"
          onClick={closeMenu}
          className="block py-2 px-4 text-white hover:text-white"
        >
          Careers
        </Link>
        
      </div>
    </nav>
    </>
  );
}

export default Navbar;

