"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyUs: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    cssEase: "ease-in-out",
    afterChange: (current: number) => {
      const newCenterIndex = (current + 1) % slides.length;
      setCenterIndex(newCenterIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Quality Service",
      description:
        "We provide top-notch service and ensure customer satisfaction.",
      imageUrl: "/card1.jpg",
    },
    {
      title: "Expert Team",
      description:
        "Our team consists of industry experts with years of experience.",
      imageUrl: "/card2.jpg",
    },
    {
      title: "Innovation",
      description:
        "We bring innovative solutions to help you stay ahead of the competition.",
      imageUrl: "/card3.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#161617] text-gray-50 flex flex-col items-center"
    >
      {/* Title Section */}
      <div className="w-full text-center px-8 mb-8">
        <h2 className="text-4xl font-bold mb-4">Why Us?</h2>
        <p className="text-gray-200">
          Discover what makes us unique and why clients trust us with their most
          important projects.
        </p>
      </div>

      {/* Full-Width Carousel Section */}
      <div className="w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <div
                className={`bg-cover bg-center h-96 flex items-end text-white transition-opacity duration-300 ${
                  !isMobile && index === centerIndex
                    ? "opacity-100"
                    : !isMobile
                    ? "opacity-50"
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              >
                <div className="bg-gray-800 bg-opacity-60 p-4 w-full h-48 relative flex flex-col items-center justify-center">
                  <h3 className="text-2xl shadowtitle font-semibold uppercase absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-center">{slide.description}</p>
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
