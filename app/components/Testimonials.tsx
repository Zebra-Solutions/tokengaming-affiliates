const Testimonials: React.FC = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      bgImage: "/card1.jpg",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      bgImage: "/card2.jpg",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      bgImage: "/card3.jpg",
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      bgImage: "/card1.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-900 text-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>

      <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto w-9/12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-h-60 p-6 text-white rounded-lg shadow-lg bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay to improve text readability
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-200">{card.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
