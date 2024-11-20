"use client";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function BannerCarousel() {
  const settings = {
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    cssEase: "ease-in-out",
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
    { imageUrl: "/logo.png" },
    { imageUrl: "/logo.png" },
    { imageUrl: "/logo.png" },
    { imageUrl: "/logo.png" },
    { imageUrl: "/logo.png" },
  ];

  return (
    <div className="relative h-24 w-full bg-gradient-to-r from-blue-800 to-blue-900 opacity-90 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:opacity-100 overflow-hidden">
      <div className="w-full h-8 bg-gradient-to-b from-black/30 to-transparent"></div>

      <div className="w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={slide.imageUrl}
                  width={200} // Matches w-10
                  height={200}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
