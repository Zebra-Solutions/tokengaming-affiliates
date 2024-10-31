import bg from '../../public/bg.jpg';

const Join: React.FC = () => {
  return (
    <section
      id="join"
      className="py-8 bg-cover bg-center text-left text-white"
      style={{
        backgroundImage: `url(${bg.src})`, // Use bg.src to get the image URL
      }}
    >
      <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-10 space-y-6 p-6 bg-transparent bg-opacity-50 rounded-md">
        <p className="text-gray-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          perferendis unde aliquam facilis molestiae eligendi accusantium et
          corporis aliquid, sed beatae asperiores blanditiis voluptatum pariatur,
          consectetur tempore aspernatur quas enim?
        </p>
        <button className="px-6 py-3 mt-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition">
          JOIN NOW
        </button>
      </div>
    </section>
  );
};

export default Join;
