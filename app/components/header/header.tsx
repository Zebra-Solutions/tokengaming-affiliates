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
      <header
        className={clsx(
          "fixed top-0 w-full flex justify-between items-center p-4 border-b border-border z-50 shadow-xl lg:px-20 overflow-hidden",
          className
        )}
        style={{ backgroundColor: "#161617", height: "80px" }} // Specify height here
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
            className="rounded-3xl py-2 px-10 transition duration-300 ease-in-out"
          >
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </header>

      {/* Main content wrapper with padding-top to account for fixed header height */}
      <main style={{ paddingTop: "80px" }}>
        {/* Drawer for Medium and Smaller Screens */}
        {drawerOpen && (
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <div className="fixed left-0 w-full p-4 bg-[#141419] text-white lg:hidden z-40 overflow-auto">
              <nav className="flex flex-col space-y-4 items-center">
                <NavLink
                  href="#home"
                  onClick={toggleDrawer}
                  className="text-white hover:text-blue-300"
                >
                  About Us
                </NavLink>
                <NavLink
                  href="#about"
                  onClick={toggleDrawer}
                  className="text-white hover:text-blue-300"
                >
                  Why Us?
                </NavLink>
                <NavLink
                  href="#testimonials"
                  onClick={toggleDrawer}
                  className="text-white hover:text-blue-300"
                >
                  Testimonials
                </NavLink>
                <NavLink
                  href="#faq"
                  onClick={toggleDrawer}
                  className="text-white hover:text-blue-300"
                >
                  FAQ
                </NavLink>
                <NavLink
                  href="#contact"
                  onClick={toggleDrawer}
                  className="text-white hover:text-blue-300"
                >
                  Contact Us
                </NavLink>
              </nav>
              <div className="my-5 justify-center">
                <GradientButton href="/sign-up" className="mr-3">
                  Sign up
                </GradientButton>
                <Button
                  variant="outline"
                  className="rounded-3xl py-2 px-10 transition duration-300 ease-in-out text-slate-900"
                >
                  Log in
                </Button>
              </div>
            </div>
          </Drawer>
        )}
      </main>
    </>
  );
}
