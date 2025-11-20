"use client";

import Link from "next/link";
import QuinderLogo from "../quinderLogo";
import { Button } from "@heroui/button";
import { CircleArrowRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <section className="py-[100px] w-full max-w-8xl px-20 flex items-start justify-center gap-30">
      {/* Logo  */}
      <Link href="/" className="w-fit py-3 px-6 bg-sky-700 rounded-3xl">
        <QuinderLogo variant="dashboardHeader" />
      </Link>

      <div>
        <ul className="space-y-4 underline font-semibold">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/funciones">Funciones</Link>
          </li>
          <li>
            <Link href="/precios">Precios</Link>
          </li>
        </ul>
      </div>

      <div className="space-y-4 font-semibold">
        <p>Prueba gratuita</p>
        <div>
          <Button
            as={Link}
            href="/prueba-gratuita"
            variant="bordered"
            className="font-semibold"
          >
            Iniciar ahora
            <CircleArrowRight />
          </Button>
        </div>
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
