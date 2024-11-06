import Link from "next/link";
import "./contact-us.css"; // Adjust the path if necessary
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faSkype,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Join: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-left text-white bg-center bg-cover mt-12 py-14"
      style={{
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://tokengaming.fra1.cdn.digitaloceanspaces.com/packages/media/theme/tokengaming/banners/landing-hero-desktop.webp")`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#161617] to-transparent"></div>

      {/* Animated blue gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 animate-blue-gradient z-30"></div>

      {/* Content under the header */}
      <div className="w-full max-w-screen-xl mx-auto p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-10 bg-transparent bg-opacity-50 rounded-md relative">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <Logo width={250} />

            {/* Main Grid for Contact Information and Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information on the Left */}
              <div>
                <h1 className="text-lg font-semibold mb-4 text-gray-300">
                  Contact Us
                </h1>
                <div className="space-y-2">
                  {/* Location */}
                  <div className="flex items-center text-gray-500">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      width={12}
                      className="text-gray-500 me-2 "
                    />
                    <span>123 Main St, Cityville</span>
                  </div>
                  {/* Email */}
                  <div className="flex items-center text-gray-500">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      width={12}
                      className="text-gray-500 me-2"
                    />
                    <span>contact@company.com</span>
                  </div>
                  {/* Social Media Icons */}
                  <div className="flex space-x-4 pt-8 text-gray-500">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      width={25}
                      className="hover:text-blue-600 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      width={25}
                      className="hover:text-blue-600cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      width={25}
                      className="hover:text-blue-600 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faSkype}
                      width={25}
                      className="hover:text-blue-600 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      width={25}
                      className="hover:text-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Links on the Right */}
              <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-300">
                  Quick Links
                </h2>
                <ul className="flex flex-col space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <li>
                    <Link href="#" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Licensing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
