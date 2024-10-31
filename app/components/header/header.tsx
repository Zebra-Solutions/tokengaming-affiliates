"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx"; 
import MenuLogo from "./menu-logo";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer"; 
import { MenuIcon } from "lucide-react";

export default function Header({ className = "" }: { className?: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={clsx(
          "flex justify-between items-center p-4 border-b border-border sticky top-0 z-10 shadow-xl lg:px-20",
          className
        )}
        style={{ backgroundColor: "#162149" }}
      >
        <div className="flex items-center w-full">
          {/* Menu Logo */}
          <MenuLogo/>

          {/* Navigation Links (Visible on large screens and above) */}
          <nav className="hidden lg:flex lg:space-x-4">
            <a href="#home" className="text-white hover:text-blue-300 font-semibold text-md">About us</a>
            <a href="#about" className="text-white hover:text-blue-300 font-semibold text-md">Why us?</a>
            <a href="#testimonials" className="text-white hover:text-blue-300 font-semibold text-md">Testimonials</a>
            <a href="#faq" className="text-white hover:text-blue-300 font-semibold text-md">FAQ</a>
            <a href="#contact-us" className="text-white hover:text-blue-300 font-semibold text-md">Contact Us</a>
          </nav>

          {/* Hamburger Menu for Medium and Smaller Screens */}
          <button onClick={toggleDrawer} className="lg:hidden p-2 ml-auto">
            <MenuIcon className="text-white" />
          </button>
        </div>

        {/* Right side: Sign Up and Log In Buttons */}
        <div className="hidden custom:flex items-center space-x-4">
          <Button className="bg-gradient-to-r from-indigo-900 to-indigo-400 hover:from-indigo-400 hover:to-indigo-900 text-white font-bold rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 px-8 py-[9px]">
            Sign up
          </Button>
          <Button className="bg-[#162149] text-indigo-400 border border-indigo-400 rounded-3xl py-2 px-10 transition duration-300 ease-in-out hover:bg-indigo-400 hover:text-white">
            Log in
          </Button>
        </div>
      </div>

      {/* Drawer for Medium and Smaller Screens */}
      {drawerOpen && (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <div className="p-4 bg-[#162149] text-white lg:hidden">
            <nav className="flex flex-col space-y-4">
              <Link href="/home" onClick={toggleDrawer} className="text-white hover:text-blue-300">About us</Link>
              <Link href="/about" onClick={toggleDrawer} className="text-white hover:text-blue-300">Why us?</Link>
              <Link href="/services" onClick={toggleDrawer} className="text-white hover:text-blue-300">Commission</Link>
              <Link href="/testimonials" onClick={toggleDrawer} className="text-white hover:text-blue-300">Testimonials</Link>
              <Link href="/faq" onClick={toggleDrawer} className="text-white hover:text-blue-300">FAQ</Link>
              <Link href="/contact" onClick={toggleDrawer} className="text-white hover:text-blue-300">Contact Us</Link>
            </nav>
            <div className="my-5 gap-3">
              <Button className="bg-gradient-to-r from-indigo-900 to-indigo-400 hover:from-indigo-400 hover:to-indigo-900 text-white font-bold rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 px-8 py-[9px] mr-6">
                Sign up
              </Button>
              <Button className="bg-[#162149] text-indigo-400 border border-indigo-400 rounded-3xl py-2 px-10 transition duration-300 ease-in-out hover:bg-indigo-400 hover:text-white">
                Log in
              </Button>
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
}
