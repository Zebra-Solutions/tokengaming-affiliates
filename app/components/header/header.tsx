import Link from "next/link";
import clsx from "clsx"; 
import MenuLogo from "./menu-logo";
import { Button } from "@/components/ui/button";

export default function Header({ className = "" }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex justify-between items-center p-4 border-b border-border sticky top-0 z-10 shadow-xl px-20", // Changed shadow-md to shadow-xl for a stronger shadow
        className
      )}
      style={{ backgroundColor: "#162149" }}
    >
      {/* Left side: MenuLogo */}
      <div className="flex items-center space-x-4">
        <MenuLogo />

        {/* Navigation Links */}
        <nav className="hidden pl-20 md:flex md:justify-start lg:justify-start md:flex-col lg:flex-row md:gap-5 lg:gap-0 lg:flex-1 lg:pb-0 pb-12 absolute lg:static left-0 w-full lg:w-auto shadow-md lg:shadow-none text-start transition-all duration-500 ease-in top-[-700px] space-x-4">
          <Link
            href="/home"
            className="text-white hover:text-blue-300 font-medium text-md transition-colors duration-200 px-2 py-1"
          >
            About us
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-blue-300 font-medium text-md transition-colors duration-200 px-2 py-1"
          >
            Why us?
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-blue-300 font-medium text-md transition-colors duration-200 px-2 py-1"
          >
            Commission
          </Link>
          <Link
            href="/testimonials"
            className="text-white hover:text-blue-300 font-medium text-md transition-colors duration-200 px-2 py-1"
          >
            Testimonials
          </Link>
          <Link
            href="/faq"
            className="text-white hover:text-blue-300 font-medium text-md transition-colors duration-200 px-2 py-1"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-300 font-medium text-md transition-colors duration-200 px-2 py-1"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Right side: Sign Up and Log In Buttons */}
      <div className="flex items-center space-x-4">
        <Button className="bg-gradient-to-r from-indigo-900 to-indigo-400 hover:from-indigo-400 hover:to-indigo-900 text-white font-bold rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 px-8 py-[9px]">
          Sign up
        </Button>
        <Button className="bg-[#162149] text-indigo-400 border border-indigo-400 rounded-3xl py-2 px-10 transition duration-300 ease-in-out hover:bg-indigo-400 hover:text-white">
          Log in
        </Button>
      </div>
    </div>
  );
}
