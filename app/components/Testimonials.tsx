import Image from "next/image";

const Testimonials: React.FC = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      bgImage: "/cardblue4.jpg",
      symbol: "/symbol1.png",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      bgImage: "/cardblue5.jpg",
      symbol: "/symbol2.png",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      bgImage: "/cardblue6.jpg",
      symbol: "/symbol3.png",
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      bgImage: "/cardblue7.jpg",
      symbol: "/symbol4.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-[#090909] text-gray-50">
      <h2 className="text-3xl font-bold text-center mb-24">Testimonials</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto w-9/12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative min-h-60 p-6 cards text-white rounded-lg shadow-2xl backdrop-blur-sm transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-[#020a2b]"
            >
              {/* Floating Symbol */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={card.symbol}
                  width={80} // Matches w-10
                  height={80} // Matches h-10
                  alt="Symbol"
                  className="w-24 h-24 rounded-full shadow-md"
                  unoptimized
                />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-semibold mb-2 text-center pt-12">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-300 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
