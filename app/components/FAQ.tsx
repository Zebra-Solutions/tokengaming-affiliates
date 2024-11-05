"use client";

import bgblue2 from '../../public/bgblue2.jpg';
import { useState, useEffect, useRef } from "react";

const faqs = [
  { question: "How do I become an Affiliate?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "Is this Program free?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "How often are my statistics updated?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "How is my affiliate commission calculated?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "When will I receive my commission?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "Do you have Negative Carry-Over?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "What if I have more than one website?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "How long are cookies stored?", answer: "Lorem ipsum dolor sit amet..." },
];

const symbols = [
  { symbol: "♠", color: "text-black" },
  { symbol: "♦", color: "text-pink-500" },
  { symbol: "♣", color: "text-black" },
  { symbol: "♥", color: "text-pink-500" },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleQuestions, setVisibleQuestions] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);  // Ensure animation runs only once
          let questionCount = 0;
          const interval = setInterval(() => {
            setVisibleQuestions((prev) => prev + 1);
            questionCount++;
            if (questionCount >= faqs.length) clearInterval(interval);
          }, 150); // Adjust delay as needed
        }
      },
      { threshold: 0.3 } // Trigger when 30% of FAQ section is visible
    );

    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, [hasAnimated]);

  return (
    <section ref={faqRef} id="faq" className="py-20 px-0 bg-[#161617] text-gray-50">
      <div
        className="bg-cover bg-center py-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgblue2.src})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#161617] to-transparent"></div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#161617] to-transparent"></div>

        <h2 className="text-3xl md:text-2xl font-bold text-center mb-6 relative">
          General FAQs
        </h2>
        <p className="text-center text-gray-200 mb-6 text-lg md:text-base relative">
          Everything you need to know at one place.
        </p>
        <div className="max-w-2xl mx-auto px-4 relative">
          {faqs.map((faq, index) => {
            const { symbol, color } = symbols[index % symbols.length]; // Cycle through symbols
            return (
              <div
                key={index}
                className={`border-b border-gray-300 mb-4 pb-4 transition-opacity duration-500 ${
                  index < visibleQuestions ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }} // Staggered delay
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between text-lg md:text-base font-semibold text-gray-200"
                >
                  <div className="flex items-center">
                    <span className={`mr-2 ${color} text-2xl`}>{symbol}</span>
                    <span>{faq.question}</span>
                  </div>
                  <span
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-700 ${
                    openIndex === index ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <p className="mt-3 text-gray-200 text-base md:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
