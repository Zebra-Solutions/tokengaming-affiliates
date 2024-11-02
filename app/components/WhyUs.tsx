"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyUs: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    cssEase: "ease-in-out",
    afterChange: (current: number) => setCenterIndex(current),
  };

  const slides = [
    {
      title: "Quality Service",
      description:
        "We provide top-notch service and ensure customer satisfaction.",
      imageUrl: "/cardblue1.jpg",
    },
    {
      title: "Expert Team",
      description:
        "Our team consists of industry experts with years of experience.",
      imageUrl: "/cardblue2.jpg",
    },
    {
      title: "Innovative Solutions",
      description:
        "We bring innovative solutions to help you stay ahead of the competition.",
      imageUrl: "/cardblue3.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#161617] text-gray-50 flex flex-col md:flex-row items-center justify-center"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-8 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">Why Us?</h2>
        <p className="text-gray-200">
          Discover what makes us unique and why clients trust us with their most
          important projects.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full md:w-1/3">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="p-4">
              <div
                className={`bg-cover bg-center h-64 rounded-lg shadow-lg flex items-end text-white transition-opacity duration-500 ${
                  index === centerIndex ? "opacity-100" : "opacity-50"
                }`}
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              >
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded-b-lg w-full">
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyUs;
