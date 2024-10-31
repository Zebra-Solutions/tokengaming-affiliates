"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I become an Affiliate?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
  {
    question: "Is this Program free?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
  {
    question: "How often are my statistics updated?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
  {
    question: "How is my affiliate commission calculated?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
  {
    question: "When will I receive my commission?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
  {
    question: "Do you have Negative Carry-Over?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
  {
    question: "What if I have more than one website?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
  {
    question: "How long are cookies stored?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nulla at facilisis laoreet, turpis massa vehicula risus.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-2 bg-gray-900 text-gray-50">
      <h2 className="text-3xl md:text-2xl font-bold text-center mb-6">
        General FAQs
      </h2>
      <p className="text-center text-gray-200 mb-6 text-lg md:text-base">
        Everything you need to know at one place.
      </p>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg md:text-base font-semibold text-gray-200 flex justify-between items-center"
            >
              {faq.question}
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
        ))}
      </div>
    </section>
  );
};

export default FAQ;
