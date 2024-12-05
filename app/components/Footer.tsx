import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#161617] text-gray-50 rounded-lg shadow">
      <hr className="border-[#f2f3f5] dark:border-gray-700 w-full" />
      <div className="mx-6 p-4 md:py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row w-full md:w-auto text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/terms-of-condition"
            className="hover:underline w-full md:w-auto text-center md:text-left md:mx-2"
          >
            Terms of Condition 
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:underline w-full md:w-auto text-center md:text-left md:mx-2"
          >
            Privacy Policy 
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:underline w-full md:w-auto text-center md:text-left"
          >
            Lorem Ipsum 
          </Link>
        </div>

        {/* Right Side */}
        <div className="text-sm text-center text-gray-500 dark:text-gray-400">
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
