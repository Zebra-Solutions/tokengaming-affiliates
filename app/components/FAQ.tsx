"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDiamond, faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Import card suit icons

const faqsByCategory = {
  "Getting Started": [
    { question: "How do I become an Affiliate?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "Is this Program free?", answer: "Lorem ipsum dolor sit amet..." },
  ],
  Payments: [
    { question: "How is my affiliate commission calculated?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "When will I receive my commission?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "Do you have Negative Carry-Over?", answer: "Lorem ipsum dolor sit amet..." },
  ],
  "Performance Tracking": [
    { question: "How often are my statistics updated?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "What if I have more than one website?", answer: "Lorem ipsum dolor sit amet..." },
    { question: "How long are cookies stored?", answer: "Lorem ipsum dolor sit amet..." },
  ],
};

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof faqsByCategory>("Getting Started");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-0 text-gray-50">
      <div className="bg-cover bg-center py-4 relative overflow-hidden">
        <h2 className="text-3xl md:text-2xl font-bold text-center mb-6 relative">
          General FAQs
        </h2>
        <p className="text-center text-gray-200 mb-6 text-lg md:text-base relative">
          Everything you need to know at one place.
        </p>
        {/* Tabs for Category Switching */}
        <div className="flex justify-center space-x-4 mb-6">
          {Object.keys(faqsByCategory).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category as keyof typeof faqsByCategory);
                setOpenIndex(null); // Reset open index on category change
              }}
              className={`py-2 px-4 font-semibold rounded-lg transition ${
                activeCategory === category
                  ? "bg-[#3258FB] text-white"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto px-4 relative">
          {faqsByCategory[activeCategory].map((faq, index) => {
            const iconList = [faHeart, faDiamond];
            const icon = iconList[index % iconList.length]; // Select a different icon for each FAQ

            return (
              <div key={index} className="border-b border-gray-300 mb-4 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between text-lg md:text-base font-semibold text-gray-200"
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={icon} // Use the card suit icon
                      className="mr-2 text-l text-[#3258FB]"
                    />
                    <span>{faq.question}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faChevronDown} // Icon for the dropdown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div>
                    <p className="mt-3 text-gray-200 text-base md:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
