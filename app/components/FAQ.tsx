"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faDiamond,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons"; // Import card suit icons

const faqsByCategory = {
  "Getting Started": [
    {
      question: "How can I join as an affiliate?",
      answer:
        "Joining is quick and simple—it takes less than two minutes to register. Once you’ve signed up, we’ll review your account and approve it if all the details are correctly provided.",
    },
    {
      question: "Is the program free to join?",
      answer:
        "Absolutely! Joining our affiliate program is completely free. Just register—there are no fees or minimum player requirements.",
    },
  ],
  Payments: [
    {
      question: "How is my commission calculated?",
      answer: `
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>Commission = Net Gaming Revenue × Revenue Share %</li>
          <li>Net Gaming Revenue = Gross Gaming Revenue – Bonus Costs – Chargebacks – Admin Fee</li>
        </ul>
      `,
    },
    {
      question: "When will I receive my commission?",
      answer:
        "Commissions are calculated at the end of each month and are paid out by the 10th of the following month.",
    },
    {
      question: "Is there negative carry-over?",
      answer: "No, we do not practice negative carry-over.",
    },
  ],
  "Performance Tracking": [
    {
      question: "How often are my statistics updated?",
      answer:
        "Your statistics for registrations and deposits update hourly. Clicks, views, and direct referrals are updated in real-time.",
    },
    {
      question: "What if I have multiple websites?",
      answer:
        "You’re welcome to promote us from as many websites as you like. You can add multiple sites to your affiliate account.",
    },
    {
      question: "How long do cookies last?",
      answer: "Cookies are stored for 30 days.",
    },
  ],
};

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof faqsByCategory>("Getting Started");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open FAQ
  };

  return (
    <section id="faq" className="py-20 px-2 text-gray-50">
      <div className="bg-cover bg-center py-4 relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative">
        F.A.Q
        </h2>
        <p className="text-center text-gray-200 mb-6 text-lg md:text-base relative">
          Everything you need to know at one place.
        </p>
        {/* Tabs for Category Switching */}
        <div className="flex justify-center space-x-4 mb-16">
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
                  : "bg-gray-600 text-gray-200 hover:bg-gray-500"
              } uppercase text-xs`}
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

                {/* Smooth Transition Container */}
                <div
                  style={{
                    transition: "max-height 2s ease-in-out", // Apply transition for both opening and closing
                    overflow: "hidden",
                    maxHeight: openIndex === index ? "1000px" : "0", // Smoothly transition between 0 and 1000px
                  }}
                >
                  {openIndex === index && (
                    <div className="mt-3 text-gray-200 text-base md:text-sm">
                      <p
                        dangerouslySetInnerHTML={{ __html: faq.answer }} // Render the HTML content
                      />
                    </div>
                  )}
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
