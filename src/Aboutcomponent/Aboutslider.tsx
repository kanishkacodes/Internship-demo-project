"use client";
import React, { useState } from "react";
import Image from "next/legacy/image";
import left from "/public/left.svg";
import right from "/public/right.svg";
import { useEffect } from "react";

function Aboutslider() {
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
          <h1 className="text-xl md:text-4xl lg:text-4xl font-bold mb-6 text-yellow-500">
            Byg Brewski Brewing Company
          </h1>
          <p className="mb-4 text-lg md:text-2xl text-yellow-300">
            The Nordic Reign In Namma Bengaluru!
          </p>
          <p className="mb-8 text-sm md:text-xl text-yellow-100">
            The Vikings owed their giant-spirited passion for carousing to the
            most mild-mannered of deities, Byggvir (pronounced ‘big-vee-ur’).
            With his wife Beyla, they presided over the brewing of mead and
            beer. Inspired by Byggvir and Beyla’s immeasurable love of brewing
            mead & beer, and by adopting the name of Byg, we at Byg Brewski
            Brewing Company pay homage to the immortal brewer who moved an
            entire nation, and also to the great brewing traditions of the
            world, serving up delectable dishes and masterful homebrews
            surrounded by dynamic architecture and stunning skylines, with three
            magnificent outlets at Sarjapur, Hennur and Yeshwantpur, Bengaluru.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutslider;
