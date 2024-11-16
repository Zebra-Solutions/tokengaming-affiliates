const Testimonials: React.FC = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      bgImage: "/cardblue4.jpg",
      symbol: '/symbol1.png',
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      bgImage: "/cardblue5.jpg",
      symbol: '/symbol2.png',
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      bgImage: "/cardblue6.jpg",
      symbol: '/symbol3.png',
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      bgImage: "/cardblue7.jpg",
      symbol: '/symbol4.png',
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
            className="min-h-60 p-6 text-white rounded-lg shadow-lg bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
            style={{
              /* backgroundImage: `url(${card.bgImage})`, */
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 100, 0.2)",
            }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={card.symbol} alt="Symbol" className="w-24 h-24 rounded-full" />
              </div>
            <h3 className="text-xl font-semibold mb-2 text-center pt-8">{card.title}</h3>
            <p className="text-gray-200 text-center">{card.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
