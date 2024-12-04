"use client";

const Banner: React.FC = () => {
  return (
    <section
      style={{ height: `calc(100vh - 150px)` }}
      className="text-gray-50 flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-36 main-font relative"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left md:text-right md:mb-0 space-y-6 z-30">
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight leading-tight">
        Promote Share Earn 
        </h1>
        <h4 className="text-2xl md:text-2xl text-gray-300 leading-relaxed font-light pb-10">
          Join our affiliate program and watch your profits grow! It’s simple,
          effective, and rewarding.
        </h4>
      </div>

      {/* Image Section */}
      <div className="absolute w-full h-full right-0 top-0 -ml-20 rounded-t-[150px] md:rounded-l-full z-20 sm:w-2/3">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2d2d2d] opacity-50 rounded-t-[150px] md:rounded-l-full z-30"></div>
        {/* Image */}
        <img
          src="./monkey.png" // Replace with your image
          alt="Banner"
          className="object-cover w-full h-full rounded-t-[150px] md:rounded-l-full z-10"
        />
      </div>
    </section>
  );
};

export default Banner;
