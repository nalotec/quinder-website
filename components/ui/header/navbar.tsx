"use client";

import Link from "next/link";
import { CircleArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import PrimaryBtnLink from "../styledComponents/primaryBtnLink";

const navlinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Funciones",
    href: "/funciones",
  },
  {
    label: "Precio",
    href: "/precio",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex items-center">
      <ul className="flex items-center">
        {navlinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`${pathName === link.href ? "text-foreground font-semibold" : "text-foreground/60"} py-4 px-6`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <PrimaryBtnLink>
          Inicia una prueba gratuita
          <CircleArrowRight />
        </PrimaryBtnLink>
      </div>
    </div>
  );
}
