import Link from "next/link";
import QuinderLogo from "../quinderLogo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="fixed w-full py-8 text-lg font-medium bg-white z-50 shadow-lg">
      <div className="flex justify-between items-center gap-4 w-full max-w-7xl mx-auto">
        <Link href="/" className="w-fit py-3 px-6 bg-sky-700 rounded-3xl">
          <QuinderLogo variant="dashboardHeader" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
