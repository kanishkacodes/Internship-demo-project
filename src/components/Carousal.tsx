"use client";
import React, { useState } from "react";
import Image from "next/image";
import left from "/public/left.svg";
import right from "/public/right.svg";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"

const images = [
    {
      src: '/event1.jpg',
      heading: 'Event 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris sit amet nulla pharetra mattis eget quis magna. Sed consequat dui eget augue hendrerit, sit amet consequat risus eleifend. Integer nec tortor vestibulum, tempor enim et, placerat arcu. Nulla facilisi. Nulla nec maximus arcu, nec vestibulum libero. Vestibulum ultrices ipsum nec quam malesuada, vel luctus justo rutrum. Proin sed libero vel ipsum pretium rhoncus. Aliquam ultricies nunc non massa scelerisque, sit amet placerat nulla convallis. Fusce sagittis efficitur lectus, nec condimentum turpis vestibulum sed. Fusce nec nisl a neque cursus ultricies nec ac dolor. In hac habitasse platea dictumst.',
    },
    {
      src: '/event2.jpg',
      heading: 'Event 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris sit amet nulla pharetra mattis eget quis magna. Sed consequat dui eget augue hendrerit, sit amet consequat risus eleifend. Integer nec tortor vestibulum, tempor enim et, placerat arcu. Nulla facilisi. Nulla nec maximus arcu, nec vestibulum libero. Vestibulum ultrices ipsum nec quam malesuada, vel luctus justo rutrum. Proin sed libero vel ipsum pretium rhoncus. Aliquam ultricies nunc non massa scelerisque, sit amet placerat nulla convallis. Fusce sagittis efficitur lectus, nec condimentum turpis vestibulum sed. Fusce nec nisl a neque cursus ultricies nec ac dolor. In hac habitasse platea dictumst.',
    },
    {
      src: '/event3.jpg',
      heading: 'Event 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris sit amet nulla pharetra mattis eget quis magna. Sed consequat dui eget augue hendrerit, sit amet consequat risus eleifend. Integer nec tortor vestibulum, tempor enim et, placerat arcu. Nulla facilisi. Nulla nec maximus arcu, nec vestibulum libero. Vestibulum ultrices ipsum nec quam malesuada, vel luctus justo rutrum. Proin sed libero vel ipsum pretium rhoncus. Aliquam ultricies nunc non massa scelerisque, sit amet placerat nulla convallis. Fusce sagittis efficitur lectus, nec condimentum turpis vestibulum sed. Fusce nec nisl a neque cursus ultricies nec ac dolor. In hac habitasse platea dictumst.',
    },
  ];
  

function Carousal() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-advance every 3 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative w-full h-screen">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        onClick={prevSlide}
      >
        <Image src={left} alt="Left arrow" />
      </button>
      <div className="relative h-full">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].heading}
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-5/6 sm:w-2/3 lg:w-1/2 bg-black bg-opacity-70 p-2 md:p-10 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-yellow-500">
              {images[currentImageIndex].heading}
            </h2>
            <p className="text-md text-yellow-100">
              {images[currentImageIndex].text}
            </p>
          </div>
        </div>
      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 "
        onClick={nextSlide}
      >
        <Image src={right} alt="Right arrow" />
      </button>
    </div>
  );
}

export default Carousal;
