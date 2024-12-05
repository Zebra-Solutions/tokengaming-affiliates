import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface GradientButtonProps {
  href?: string;
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  hoverFromColor?: string;
  hoverToColor?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  href,
  children,
  type = "button",
  fromColor = "from-[#3258FB]",
  toColor = "to-blue-500",
  hoverFromColor = "hover:from-blue-500",
  hoverToColor = "hover:to-[#3258FB]",
  className = "",
  disabled = false,
}) => {
  const baseClass = `bg-gradient-to-r ${fromColor} ${toColor} ${hoverFromColor} ${hoverToColor} text-white font-bold rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 px-8 py-[9px] ${className}`;
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Render as <button> if no `href` is provided
  if (!href) {
    return (
      <Button
        className={`${baseClass} ${disabledClass}`}
        type={type}
        disabled={disabled}
      >
        {children}
      </Button>
    );
  }

  // Render as <a> if `href` is provided
  return (
    <Button asChild className={`${baseClass} ${disabledClass}`}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default GradientButton;
