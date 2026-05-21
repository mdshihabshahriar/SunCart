"use client";
import React, { useState } from "react";
import image1 from "../../../assets/hero1.png";
import image2 from "../../../assets/hero2.png";
import image3 from "../../../assets/hero3.png";
import image4 from "../../../assets/hero4.png";
import image5 from "../../../assets/hero5.png";
import Image from "next/image";

const slides = [
  { id: "slide1", img: image1, alt: "Hero Image 1" },
  { id: "slide2", img: image2, alt: "Hero Image 2" },
  { id: "slide3", img: image3, alt: "Hero Image 3" },
  { id: "slide4", img: image4, alt: "Hero Image 4" },
  { id: "slide5", img: image5, alt: "Hero Image 5" },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  const goTo = (index) => {
    setActive(index);
    document.getElementById(`slide${index + 1}`).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <div className="relative">
      <div className="carousel w-full h-50 md:h-87.5 lg:h-170">
        {slides.map((slide, index) => (
          <div id={slide.id} key={slide.id} className="carousel-item relative w-full">
            <Image src={slide.img} alt={slide.alt} fill className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-10">
              <button
                onClick={() => goTo((index - 1 + slides.length) % slides.length)}
                className="btn btn-circle"
              >❮</button>
              <button
                onClick={() => goTo((index + 1) % slides.length)}
                className="btn btn-circle"
              >❯</button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              active === index ? "bg-orange-400" : "bg-white opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;