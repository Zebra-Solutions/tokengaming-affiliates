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
  { id: "about", label: "Why Us?" },
  { id: "faq", label: "FAQ" },
  { id: "howitworks", label: "How it Works?" },
  { id: "contact", label: "Contact Us" },
];

export default function Header({ className = "" }: { className?: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

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
        return rect.top <= 100 && rect.bottom >= 120;
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentSection = sectionElements[sectionElements.length - 1];
      }

      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }

      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 w-full flex justify-between items-center z-50 lg:px-36 overflow-hidden px-4 py-4 transition-all duration-300",
          className
        )}
        style={{
          backgroundColor: isScrolled ? "#161617" : "transparent",
          height: "80px",
        }}
      >
        <div className="flex items-center w-full">
          {/* Menu Logo */}
          <NavLink href="/" className="mt-5">
            <Logo />
          </NavLink>

          {/* Navigation Links */}
          <nav className="hidden custom:flex lg:space-x-7 ml-16">
            {sections.map(({ id, label }) => (
              <NavLink
                key={id}
                href={`#${id}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();

                  const element = document.getElementById(id);
                  if (element) {
                    const headerOffset = 50; // Adjust this based on your header height
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });

                    // Remove focus after the scroll is complete
                    e.currentTarget.blur();
                  }
                }}
                className={clsx("nav-link", activeSection === id && "active")}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Menu */}
          <button onClick={toggleDrawer} className="custom:hidden p-2 ml-auto">
            <MenuIcon className="text-white" />
          </button>
        </div>

        {/* Right side */}
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

      <main style={{ paddingTop: "80px" }}>
        {/* Drawer */}
        {drawerOpen && (
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <div className="fixed left-0 w-full p-4 bg-[#141419] text-white lg:hidden z-40 overflow-auto">
              <nav className="flex flex-col space-y-4 items-center">
                {sections.map(({ id, label }) => (
                  <NavLink
                    key={id}
                    href={`#${id}`}
                    onClick={toggleDrawer}
                    className="text-white hover:text-blue-300"
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
              <div className="my-5 flex justify-center items-center">
                <GradientButton href="/sign-up" className="mr-3">
                  Sign up
                </GradientButton>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-3xl py-2 px-10 transition duration-300 ease-in-out text-slate-900"
                >
                  <Link href="/login">Log in</Link>
                </Button>
              </div>
            </div>
          </Drawer>
        )}
      </main>
    </>
  );
}
