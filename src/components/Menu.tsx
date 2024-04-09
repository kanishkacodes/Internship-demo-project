import React from "react";
import Image from "next/image";

import Link from "next/link";

function Menu() {
  return (
    <>

    
    <div className="bg-[#e7dfd9]">
      <div className="text-center mb-6 pt-10 text-black text-3xl font-bold">Menu</div>
      <div className="mr-5 ml-5 mt-5 pb-20 md:mr-32 md:ml-32 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
          {/* First Image */}
          <Link href="/">

          <div className="card relative  shadow-md shadow-pink-200/100 rounded-lg">
            <div className="image-overlay absolute inset-0 bg-black opacity-50 md:opacity-0  md:hover:opacity-50 transition-opacity duration-300 flex justify-center items-center rounded-lg">
              <p className="text-white text-xl font-bold">Bar Menu</p>
            </div>

            <Image
              src="/images/barmenu.jpg"
              alt="barmenu"
              width={1000}
              height={1152}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          </Link>
          {/* Second Image */}
          
          <div className="card relative shadow-md shadow-pink-200/100 rounded-lg ">
          <Link href="/">
            <div className="image-overlay absolute inset-0 bg-black opacity-50 md:opacity-0  md:hover:opacity-50 transition-opacity duration-300 flex justify-center items-center rounded-lg">
              <p className="text-white text-xl font-bold">Food Menu</p>
            </div>
            
            <Image
              src="/images/foodmenu.jpg"
              alt="foodmenu"
              width={1920}
              height={667}
              className="w-full h-full object-cover rounded-lg"
            />
            </Link>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Menu;
