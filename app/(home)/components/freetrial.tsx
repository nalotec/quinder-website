"use client";

import PrimaryBtnLink from "@/components/ui/styledComponents/primaryBtnLink";
import {
  Ban,
  CalendarCheck2,
  CircleArrowRight,
  Headset,
  HeartHandshake,
  Settings,
  ThumbsUp,
} from "lucide-react";

const features = [
  {
    title: "30 días completamente gratis",
    icon: <CalendarCheck2 strokeWidth={1} className="w-12 h-12" />,
  },
  {
    title: "Soporte personalizado en cada paso",
    icon: <Headset strokeWidth={1} className="w-12 h-12" />,
  },
  {
    title: "Cancela cuando quieras, sin compromisos",
    icon: <ThumbsUp strokeWidth={1} className="w-12 h-12" />,
  },
  {
    title: "Configuración rápida y sencilla",
    icon: <Settings strokeWidth={1} className="w-12 h-12" />,
  },
  {
    title: "Sin tarjeta de crédito",
    icon: <Ban strokeWidth={1} className="w-12 h-12" />,
  },
  {
    title: "Equipo disponible para ayudarte",
    icon: <HeartHandshake strokeWidth={1} className="w-12 h-12" />,
  },
];

export default function FreeTrial() {
  return (
    <section className="px-20 pt-20 pb-0 space-y-20">
      {/* Encabezado  */}
      <div className="space-y-12 text-center">
        <h2 className="text-[52px] font-bold">
          Organ&iacute;zate mejor hoy mismo
        </h2>
        <p className="text-3xl font-semibold">
          Prueba todas las funciones sin compromiso
        </p>
        <div>
          <PrimaryBtnLink>
            Inicia una prueba gratuita
            <CircleArrowRight />
          </PrimaryBtnLink>
        </div>
      </div>

      {/* Features  */}
      <div className="grid grid-cols-2 gap-6 justify-center items-center w-full max-w-[1082px] mx-auto">
        {features.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            {item.icon}
            <p className="text-[22px] font-medium text-txtSecondary">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Imagen de footer  */}
      <img
        src="https://res.cloudinary.com/quinder/image/upload/v1762217718/quinder/assets/Ilustracio%CC%81nCTA_je1wwg.png"
        alt="dibujitos"
        className="block mx-auto"
      />
      {/* <div className="h-[446px] border border-gray-300 rounded-md"></div> */}
    </section>
  );
}
