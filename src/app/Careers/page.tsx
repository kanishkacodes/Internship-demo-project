import React from 'react';
import Image from 'next/legacy/image';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Aboutslider from '@/Aboutcomponent/Aboutslider';

function Page() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <Image
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="reservation"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-5/6 sm:w-2/3 lg:w-1/2 bg-black bg-opacity-50 p-2 md:p-10 rounded-lg">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6 text-yellow-500">Why work with us</h1>
          <p className="mb-8 text-sm md:text-xl text-yellow-100">Asias largest microbrewery is looking for like-minded people to join its crazy yet committed family! Dedicated to the Fun at Work culture, we believe in providing a career, not just handing out jobs! If you are up for an experience of a lifetime, just click on the Apply button and we will take care of the rest.</p>
          <Link href="/">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">Apply</button>
          </Link>
        </div>
      </div>
      <Footer />
      
    </>
  );
}

export default Page;
