"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Logo from "../logo";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import GradientButton from "../GradiantButton";
import NavLink from "../NavLink";

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
        style={{ backgroundColor: "#161617" }}
      >
        <div className="flex items-center w-full">
          {/* Menu Logo */}
          <Logo width={170} />

          {/* Navigation Links (Visible on large screens and above) */}
          <nav className="hidden lg:flex lg:space-x-4 ml-10">
            <NavLink href="#home">About Us</NavLink>
            <NavLink href="#about">Why Us?</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
          </nav>

          {/* Hamburger Menu for Medium and Smaller Screens */}
          <button onClick={toggleDrawer} className="lg:hidden p-2 ml-auto">
            <MenuIcon className="text-white" />
          </button>
        </div>

        {/* Right side: Sign Up and Log In Buttons */}
        <div className="hidden custom:flex items-center space-x-4">
          <GradientButton href="/sign-up">Sign up</GradientButton>
          <Button
            asChild
            variant="outline"
            className=" rounded-3xl py-2 px-10 transition duration-300 ease-in-out"
          >
            <Link href="/login" >Log in</Link>
          </Button>
        </div>
      </div>

      {/* Drawer for Medium and Smaller Screens */}
      {drawerOpen && (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <div className="p-4 bg-[#1a1a1c] text-white lg:hidden">
            <nav className="flex flex-col space-y-4 items-center">
              <Link
                href="/home"
                onClick={toggleDrawer}
                className="text-white hover:text-blue-300"
              >
                About us
              </Link>
              <Link
                href="/about"
                onClick={toggleDrawer}
                className="text-white hover:text-blue-300"
              >
                Why us?
              </Link>
              <Link
                href="/services"
                onClick={toggleDrawer}
                className="text-white hover:text-blue-300"
              >
                Commission
              </Link>
              <Link
                href="/testimonials"
                onClick={toggleDrawer}
                className="text-white hover:text-blue-300"
              >
                Testimonials
              </Link>
              <Link
                href="/faq"
                onClick={toggleDrawer}
                className="text-white hover:text-blue-300"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={toggleDrawer}
                className="text-white hover:text-blue-300"
              >
                Contact Us
              </Link>
            </nav>
            <div className="my-5 justify-center">
            <GradientButton href="/sign-up" className="mr-3">Sign up</GradientButton>
              <Button variant='outline' className="rounded-3xl py-2 px-10 transition duration-300 ease-in-out text-slate-900">
                Log in
              </Button>
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
}
