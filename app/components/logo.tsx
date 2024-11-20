import Image from "next/image";
interface LogoProps {
  width?: number;
  height?: number;
  className?: string; // Add className prop
}
const Logo: React.FC<LogoProps> = ({ width = 150, height = 50, className }) => {
  return (
    <div style={{ position: "relative", width, height }} className={className}>
      <Image
        src="/logo.png"
        alt="logo image"
        width={500}
        height={500}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-contain"
        unoptimized
      />
    </div>
  );
};
export default Logo;
