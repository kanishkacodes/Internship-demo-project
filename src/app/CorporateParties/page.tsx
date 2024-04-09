import React from 'react';
import Image from 'next/legacy/image';
import Footer from '@/components/Footer';
import Partycard from '@/components/Partycard';

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
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-5/6 sm:w-2/3 lg:w-1/2 bg-black bg-opacity-50 p-2 md:p-10 rounded-lg">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6 text-yellow-500">The Happiness Bundle</h1>
          <p className="mb-8 text-sm md:text-xl text-yellow-100">Planning a large gathering, celebration or just a party with your friends, family or colleagues? You have come to the right place! Introducing The Happiness Bundle! A set of 6 party packages with a vast array of food and beverage options to choose from, including a multitude of world class freshly brewed beers, regular and seasonal, as per your need and occasion! We offer unique experiences curated to your specific needs to make your occasion as grand and special as it can be! From birthdays, engagements, anniversaries, corporate get togethers to even retirement parties, our excellent team of global Chefs, Mixologists, Brew Masters and supporting staff are equipped to make it a memorable event for you and your loved ones.</p>
        </div>
      </div>
      <Partycard />
      <Footer />
      
    </>
  );
}

export default Page;

