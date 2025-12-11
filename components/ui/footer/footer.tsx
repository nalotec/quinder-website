"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <section className="py-12 px-6 space-y-6 xl:py-[100px] w-full xl:max-w-8xl xl:px-20 xl:flex xl:items-start xl:justify-center xl:gap-30 bg-white">
      <img
        src="/images/quinder-logo.png"
        className="h-[39px]"
        alt="quinder-logo"
      />

      <div>
        <ul className="space-y-2 xl:space-y-4 underline font-semibold">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/funciones">Funciones</Link>
          </li>
          <li>
            <Link href="/precio">Precios</Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <p className="font-semibold">Cont&aacute;ctanos</p>

        <Link
          href="mailto:contacto@quinder.com"
          className="flex items-center gap-2 font-medium text-txtSecondary"
        >
          <Mail />
          contacto@quinder.com
        </Link>
        <Link
          href="tel:5511223344"
          className="flex items-center gap-2 font-medium text-txtSecondary"
        >
          <Phone />
          55 1122 3344
        </Link>
      </div>
    </section>
  );
}
