"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import left from "/public/left.svg";
import right from "/public/right.svg";

const images = [
  {
    src: "/images/Byg Cascade Pale Ale.png",
    heading: "Byg Rauchbier",
    text: "placerat arcu. Nulla facilisi. Nulla nec maximus arcu, nec vestibulum libero. Vestibulum ultrices ipsum nec quam malesuada, vel luctus justo rutrum. Proin sed libero vel ipsum pretium rhoncus. Aliquam ultricies nunc non massa scelerisque, sit amet placerat nulla convallis. Fusce sagittis efficitur lectus, nec condimentum turpis vestibulum sed. Fusce nec nisl a neque cursus ultricies nec ac dolor. In hac habitasse platea dictumst.",
    lefttext: "ABV 5.5%",
    righttext: "IBU 40",
  },
  {
    src: "/images/Byg CoffeeChocolate Stout.png",
    heading: "Byg Hefeweizen",
    text: "Lorem ipsum dolor sit amet, consectetur adid consequat dui eget augue he  enim et, placerat arcu. Nulla facilisi. Nulla nec maximus arcu, nec vestibulum libero. Vestibulum ultrices ipsum nec quam malesuada, vel luctus justo rutrum. Proin sed libero vel ipsum pretium rhoncus. Aliquam ultricies nunc non massa scelerisque, sit amet placerat nulla convallis. Fusce sagittis efficitur lectus, nec condimentum turpis vestibulum sed. Fusce nec nisl a neque cursus ultricies nec ac dolor. In hac habitasse platea dictumst.",
    lefttext: "ABV 7.5%",
    righttext: "IBU 20",
  },
  {
    src: "/images/Byg Rauchbier.png",
    heading: "Byg Rauchbier",
    text: "placerat arcu. Nulla facilisi. Nulla nec maximus arcu, nec vestibulum libero. Vestibulum ultrices ipsum nec quam malesuada, vel luctus justo rutrum. Proin sed libero vel ipsum pretium rhoncus. Aliquam ultricies nunc non massa scelerisque, sit amet placerat nulla convallis. Fusce sagittis efficitur lectus, nec condimentum turpis vestibulum sed. Fusce nec nisl a neque cursus ultricies nec ac dolor. In hac habitasse platea dictumst. ",
    lefttext: "ABV 9.5%",
    righttext: "IBU 30",
  },
];

function BarCarousel() {
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
    const interval = setInterval(nextSlide, 4000); // Auto-advance every 4 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="carousel-container bg-transparent shadow-none p-4 rounded-lg  w-80">
    <div className="carousel-wrapper relative flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2 text-yellow-700">
        {images[currentImageIndex].heading}
      </h2>
      <div className="flex justify-between w-full mt-2">
        <span className="text-sm text-yellow-900 font-semibold">
          {images[currentImageIndex].lefttext}
        </span>
        <span className="text-sm text-yellow-900 font-semibold">
          {images[currentImageIndex].righttext}
        </span>
      </div>
      <div className="image-container w-64 h-48 mx-auto overflow-hidden rounded-lg relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={prevSlide}
        >
          <Image src={left} alt="Left Arrow" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={nextSlide}
        >
          <Image src={right} alt="Right Arrow" />
        </button>
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].heading}
          width={200}
          height={100} // Adjusted height
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-container mt-4 w-full">
        <p className="text-gray-900 text-center text-sm">{images[currentImageIndex].text}</p>
      </div>
    </div>
  </div>
  );
}

export default BarCarousel;
