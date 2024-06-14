"use client";
import React, { useState } from 'react';

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpeg",
];

const Home: React.FC = () => {
  const prev_img = () => {
    console.log("prev_img");
  };

  const next_img = () => {
    console.log("next_img");
  };

  return (
    <div>
      <h1 className="text-center p-8">Project 1: Carousel</h1>
      <div className="flex justify-between px-16">
        <div className="flex items-center">
          <button
            className="flex justify-center bg-black p-2 rounded-full w-10 text-white"
            onClick={prev_img}
          >
            ⬅
          </button>
        </div>
        <div className="bg-red-100 w-8/12 flex justify-center">
          <img className="h-120" src="/images/img4.jpeg"></img>
        </div>
        <div className="flex items-center">
          <button
            className="flex justify-center bg-black p-2 rounded-full w-10 text-white"
            onClick={next_img}
          >
            ⮕
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
