import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#161617] text-gray-50 rounded-lg shadow">
      <hr className="border-[#f2f3f5] dark:border-gray-700 w-full" />
      <div className="mx-6 p-4 md:py-8 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/terms-of-condition" className="hover:underline">
            Terms of Condition
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Lorem Ipsum
          </Link>
        </div>

        {/* Right Side */}
        <div className="text-sm m-0 text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <Link href="/" className="hover:underline">
            Tokengaming Affiliates
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
