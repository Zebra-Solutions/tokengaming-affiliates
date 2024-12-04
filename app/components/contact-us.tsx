import Link from "next/link";
import logoSign from "@/public/logo-mobile.svg"; // Adjust the path if necessary
import Image from "next/image";
import "./contact-us.css";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faSkype,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

const ContactUs: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-left text-white bg-gradient-to-b from-[#161617] via-gray-900 to-[#161617] py-14"
    >
      {/* Content Container */}
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Logo Row */}
        <div className="flex justify-start mb-10">
          <Logo width={250} />
        </div>

        {/* Grid for Contact Us, Quick Links, Have Any Questions? */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Left Column (Contact Us) */}
          <div className="space-y-8 col-span-1 sm:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-100 mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-primary-500 mr-3"
                />
                <span>123 Main St, Cityville</span>
              </div>
              <div className="flex items-center text-gray-400">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-primary-500 mr-3"
              />
              <span>contact@company.com</span>
            </div>
              <div className="flex items-center text-gray-400">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary-500 mr-3"
                />
                <span>+1 (555) 123-4567</span>
              </div>
               {/* Social Media */}
               <div className="flex space-x-8 pt-6">
                {[faFacebook, faTwitter, faInstagram, faSkype, faLinkedin, faYoutube].map((icon, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={icon}
                    className="text-gray-500 hover:text-primary-500 transition-all transform hover:scale-110 cursor-pointer"
                    size="2x"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column (Quick Links) */}
          <div className="space-y-8 col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-100 mb-6">Quick Links</h2>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="#" className="hover:text-primary-500">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-500">
                  How it Works?
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column (Have Any Questions?) */}
          <div className="space-y-8 col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="text-center lg:text-right">
              <h2 className="text-2xl font-bold text-gray-100">
                Have Any Questions?
              </h2>
              <p className="text-gray-400 mt-4">
                Reach out to our team, and we’ll be happy to assist you with any inquiries or concerns.
              </p>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <input
                type="text"
                className="w-full p-3 bg-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full p-3 bg-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-3 bg-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows={4}
                placeholder="Your Message"
              />
              <Button   variant="outline"
                  className="w-full p-3 bg-primary-500 text-white rounded-3xl py-2 px-10  duration-300 ease-in-out">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
