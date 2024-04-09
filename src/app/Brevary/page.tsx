'use client'
import { useState } from 'react';
import Image from 'next/image';
import BarCarousel from '@/components/BarCarousal';
import Footer from '@/components/Footer';

function Page() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className=' bg-yellow-950 border-solid border-2 border-yellow-900 md:h-[50rem] h-screen pt-60 md:pt-0'>
        <div onClick={togglePopup} style={{ cursor: 'pointer' }}>
          <Image
            alt='Brevary'
            src='/images/Brevary.png'
            width={1885}
            height={968}
          />
        </div>
      </div>
      
      {showPopup && (
        <div
          className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'
        >
          <div className='bg-white bg-opacity-70 p-0 m-0 rounded-lg mt-28 '>
            
            <BarCarousel />{/* Render BarCarousel component inside the popup */}
            <button
              className=' bottom-2 right-2 mt-2  ml-56 mb-2 bg-red-500 text-white px-4 py-2 rounded-md'
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
      
    </>
  );
}

export default Page;
