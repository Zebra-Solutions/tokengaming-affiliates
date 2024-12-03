import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#161617] text-gray-50 rounded-lg shadow">
      <hr className=" border-[#f2f3f5] dark:border-gray-700 w-full" />

      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear} <Link href="/" className="hover:underline">Tokengaming affiliates</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
