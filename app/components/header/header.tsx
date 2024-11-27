"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import Logo from "../logo";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import GradientButton from "../GradiantButton";
import NavLink from "../NavLink";

const sections = [
  { id: "home", label: "About Us" },
  { id: "about", label: "Why Us?" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact Us" },
];

export default function Header({ className = "" }: { className?: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(({ id }) =>
        document.getElementById(id)
      );

      let currentSection = sectionElements.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom >= 0; // Adjust threshold as needed
      });
  
      // If no section is active and scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentSection = sectionElements[sectionElements.length - 1]; // Last section
      }
  
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 w-full flex justify-between items-center p-4 border-b border-border z-50 shadow-xl lg:px-20 overflow-hidden",
          className
        )}
        style={{ backgroundColor: "#000", height: "80px" }} // Specify height here
      >
        <div className="flex items-center w-full">
          {/* Menu Logo */}
          <NavLink href="/" className="mt-9">
            <Logo />
          </NavLink>

          {/* Navigation Links (Visible on large screens and above) */}
          <nav className="hidden lg:flex lg:space-x-4 ml-10">
            {sections.map(({ id, label }) => (
              <NavLink
                key={id} // Stable key based on section ID
                href={`#${id}`}
                className={clsx("nav-link", activeSection === id && "active")}
              >
                {label}
              </NavLink>
            ))}
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
              <div className="my-5 flex justify-center items-center">
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
