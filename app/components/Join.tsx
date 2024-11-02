import bgblue1 from "../../public/bgblue1.jpg";

const Join: React.FC = () => {
  return (
    <section
      id="join"
      className="py-8 bg-cover bg-center text-left text-white relative"
      style={{
        backgroundImage: `url(${bgblue1.src})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#161617] to-transparent"></div>
      <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-10 space-y-6 p-6 bg-transparent bg-opacity-50 rounded-md">
        <p className="text-gray-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          perferendis unde aliquam facilis molestiae eligendi accusantium et
          corporis aliquid, sed beatae asperiores blanditiis voluptatum
          pariatur, consectetur tempore aspernatur quas enim?
        </p>
        <button className="px-6 py-3 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition">
          JOIN NOW
        </button>
      </div>
    </section>
  );
};

export default Join;
