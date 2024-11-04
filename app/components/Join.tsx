import "./styles.css";

const Join: React.FC = () => {
  return (
    <section
      id="join"
      className="py-0 bg-[#161617] text-gray-50 flex flex-col md:flex-row items-center justify-center" // Change 'justify-around' to 'justify-center'
    >
      <div className="w-full md:w-1/2 text-right md:text-right px-8 mb-8 md:mb-0">
        <p className="text-gray-200 text-5xl slide-in">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          perferendis?
        </p>
        <button className="px-6 py-3 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition slide-in-pulse">
          JOIN NOW
        </button>
      </div>
      <div className="flex justify-left items-center w-full md:w-1/2 px-40 mb-8 md:mb-0"> {/* Add flex properties to center items */}
        <span className="spade-symbol metallic-text">
          ♠
        </span>
      </div>
    </section>
  );
};

export default Join;
