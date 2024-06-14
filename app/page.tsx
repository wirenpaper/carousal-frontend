"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpeg",
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev_img = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const next_img = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
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
            <b>⬅</b>
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            className="h-120"
            src={images[currentIndex]}
            alt="ha"
            width={640}
            height={20}
            style={{ width: "auto" }} // Override with auto width
          ></Image>
        </div>
        <div className="flex items-center">
          <button
            className="flex justify-center bg-black p-2 rounded-full w-10 text-white"
            onClick={next_img}
          >
            <b>⮕</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
