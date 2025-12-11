"use client";

import { LinkButton } from "@/components/ui/styledComponents/button";
import UnderlineText from "@/components/ui/underlineText";
import {
  Ban,
  CalendarCheck2,
  Headset,
  HeartHandshake,
  Settings,
  ThumbsUp,
} from "lucide-react";
import { usePathname } from "next/navigation";

const features = [
  {
    title: "30 días completamente gratis",
    icon: (
      <CalendarCheck2 strokeWidth={1} className="w-6 h-6 xl:w-12 xl:h-12" />
    ),
  },
  {
    title: "Soporte personalizado en cada paso",
    icon: <Headset strokeWidth={1} className="w-6 h-6 xl:w-12 xl:h-12" />,
  },
  {
    title: "Cancela cuando quieras, sin compromisos",
    icon: <ThumbsUp strokeWidth={1} className="w-6 h-6 xl:w-12 xl:h-12" />,
  },
  {
    title: "Configuración rápida y sencilla",
    icon: <Settings strokeWidth={1} className="w-6 h-6 xl:w-12 xl:h-12" />,
  },
  {
    title: "Sin tarjeta de crédito",
    icon: <Ban strokeWidth={1} className="w-6 h-6 xl:w-12 xl:h-12" />,
  },
  {
    title: "Equipo disponible para ayudarte",
    icon: (
      <HeartHandshake strokeWidth={1} className="w-6 h-6 xl:w-12 xl:h-12" />
    ),
  },
];

export default function FreeTrial() {
  const pathname = usePathname();
  return (
    <section className="px-6 py-12 xl:px-20 xl:pt-20 pb-0 space-y-12 xl:space-y-20">
      {/* Encabezado  */}
      <div className="space-y-12 text-center">
        <h2 className="quinder-h2">
          {(pathname === "/" ||
            pathname === "/funcionalidades/directora" ||
            pathname === "/precio") && (
            <p>
              Organ&iacute;zate mejor <UnderlineText>hoy mismo</UnderlineText>
            </p>
          )}
          {pathname === "/precio" && "¿Qué esperas?"}
          {pathname === "/funcionalidades/educadora" && (
            <p>
              <UnderlineText>Empieza hoy</UnderlineText> a simplificar tu
              trabajo
            </p>
          )}
          {pathname === "/funcionalidades/padres" && (
            <p>
              <UnderlineText>Acomp&aacute;ñale</UnderlineText> en su d&iacute;a
              a d&iacute;a
            </p>
          )}
        </h2>
        <p className="quinder-h3">Prueba todas las funciones sin compromiso</p>
        <div>
          <LinkButton />
        </div>
      </div>

      {/* Features  */}
      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:justify-center md:items-center w-full xl:max-w-[1082px] md:mx-auto">
        {features.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            {item.icon}
            <p className="quinder-p-display">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Imagen de footer  */}
      <img
        src="https://res.cloudinary.com/quinder/image/upload/v1762217718/quinder/assets/Ilustracio%CC%81nCTA_je1wwg.png"
        alt="dibujitos"
        className="block mx-auto"
      />
    </section>
  );
}
