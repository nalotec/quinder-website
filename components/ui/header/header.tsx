"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
// import QuinderLogo from "../quinderLogo";
// import Navbar from "./navbar";
import NavbarMobile from "./navbar-mobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 w-full h-[55px] px-3 py-2
        bg-white/90 backdrop-blur transition-all duration-300 ease-out motion-reduce:transition-none ${scrolled ? "py-1.5 shadow-lg" : "py-5 shadow-none"}
        xl:max-w-8xl xl:px-20 xd:h-auto
        `}
    >
      <NavbarMobile />
      {/* <div className="flex justify-between items-center gap-4 w-full max-w-8xl mx-auto"> */}
      {/*   <Link href="/" className="w-fit py-3 px-6 bg-sky-700 rounded-3xl"> */}
      {/*     <QuinderLogo variant="dashboardHeader" /> */}
      {/*   </Link> */}
      {/*   <Navbar /> */}
      {/* </div> */}
    </header>
  );
}
