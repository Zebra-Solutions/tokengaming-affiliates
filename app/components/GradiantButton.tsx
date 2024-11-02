import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; 

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  hoverFromColor?: string;
  hoverToColor?: string;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  href,
  children,
  fromColor = 'from-blue-900',
  toColor = 'to-blue-600',
  hoverFromColor = 'hover:from-blue-600',
  hoverToColor = 'hover:to-blue-900',
  className = '',
}) => {
  return (
    <Button
      asChild
      className={`bg-gradient-to-r ${fromColor} ${toColor} ${hoverFromColor} ${hoverToColor} text-white font-bold rounded-3xl transition duration-300 ease-in-out transform hover:scale-105 px-8 py-[9px] ${className}`}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default GradientButton;
