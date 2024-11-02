import Image from "next/image";

interface LogoProps {
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 160 }) => {
  const aspectRatio = 1.6; // Replace with actual aspect ratio if known
  const height = width / aspectRatio;

  return (
    <Image
      src="/logo.png"
      alt="logo image"
      width={width}
      height={height}
      priority
      className="mr-10"
      style={{ height: "auto", width: "auto" }} // Ensures aspect ratio is maintained
    />
  );
};

export default Logo;
