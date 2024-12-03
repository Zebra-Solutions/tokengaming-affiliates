"use client";
import Link from "next/link";
import "./banner.css";
import { Button } from "@/components/ui/button";
import FolderCard from "./folderShapedElement";

const Banner: React.FC = () => {
  return (
    <section
      style={{ height: `calc(100vh - 250px)` }}
      className="  text-gray-50 flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-36 main-font relative"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left md:text-right md:mb-0 space-y-6 z-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          {["Promote.", " ", "Share. ", "Earn. "].map((word, index) => (
            <span
              key={index}
              className="modern-fade-in block md:inline-block"
              style={{
                animationDelay: `${index * 0.4}s`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Join our affiliate program and watch your profits grow! It’s simple,
          effective, and rewarding.
        </p>
      </div>

      {/* Image Section */}
      <div className="absolute w-2/3 h-5/6 right-0 top-0 -ml-20 rounded-l-full z-10 bg-blend-overlay bg-[#96969680]">
        <img
          src="./monkey.png" // Replace with your image
          alt="Banner"
          className="object-cover w-full h-full rounded-l-full"
        />
      </div>
    </section>
  );
};

export default Banner;
