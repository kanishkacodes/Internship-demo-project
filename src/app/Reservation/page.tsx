import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

function Page() {
  return (
    <>
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <Image
        src="https://images.unsplash.com/photo-1710880694019-0e03ea3f011c?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="reservation"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-5/6 sm:w-2/3 lg:w-1/2">
        <h1 className=" text-xl md:text-4xl lg:text-5xl font-bold mb-6 text-yellow-500">Byg Brewski Brewing Company</h1>
        <p className="mb-8 text-sm md:text-xl text-yellow-300">Select Your Preferred Location to Book a Table.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/">
            <button className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg">
              Hennur
            </button>
          </Link>
          <Link href="/">
            <button className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg">
              Sarjapur
            </button>
          </Link>
          <Link href="/">
            <button className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg">
              Yeshwantpur
            </button>
          </Link>
        </div>
      </div>

    </div>
    <Footer />
    </>
  );
}

export default Page;
