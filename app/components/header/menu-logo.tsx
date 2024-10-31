import Image from "next/image";

export default function MenuLogo() {
  return (
    <>
      <Image
        src="/logo.png"
        alt="logo image"
        width={160}
        height={100}
        priority
        style={{ width: "auto", height: "auto" }}
        className="mr-10"
      />
    </>
  );
}
