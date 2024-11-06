import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#000] text-gray-50 rounded-lg shadow">
      {/* <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo width={150} />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div> */}
      
      {/* Full-width hr */}
      <hr className=" border-gray-200 dark:border-gray-700 w-full" />

      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear} <Link href="/" className="hover:underline">Tokengaming affiliates</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
