import Image from "next/image";
import { useEffect, useState } from "react";
interface LogoProps {
  width?: number;
  height?: number;
  className?: string; // Add className prop
}
const Logo: React.FC<LogoProps> = ({ width = 150, height = 50, className }) => {


  return (
    <div style={{ position: 'relative', width, height }} className={className}>
      <Image
        src="/logo.png"
        alt="logo image"
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-contain"
      />
    </div>
  );
};
export default Logo;