"use client";

import UnderlineText from "@/components/ui/underlineText";
import { Button } from "@heroui/button";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

const userCards = [
  {
    title: "Propietarias y directoras",
    features: [
      "Visualiza la ocupación y asistencia de todos los grupos",
      "Lleva el control de pagos y colegiaturas pendientes",
      "Genera reportes automáticos para análisis mensual",
      "Administra permisos y accesos de tu equipo",
      "Cumple con requisitos de documentación de forma digital",
    ],
    image:
      "https://res.cloudinary.com/quinder/image/upload/v1762218234/quinder/assets/Directora_ova5lk.png",
    background: "bg-primary-orange",
    href: "/funcionalidades/directora",
  },
  {
    title: "Educadoras",
    features: [
      "Pasa lista en un par de clics desde tu celular.",
      "Envía actualizaciones y fotos a los tutores al mismo tiempo.",
      "Notifica horarios de comida, siesta y actividades.",
      "Comunica incidencias o recordatorios importantes.",
      "Accede a la información de las niñas y niños cuando la necesites.",
    ],
    image:
      "https://res.cloudinary.com/quinder/image/upload/v1762217674/quinder/assets/young-smiling-pretty-caucasian-schoolgirl-wearing-glasses-back-bag-points-side-with-hand-holding-books-green-with-copy-space_1_rehq58.png",
    background: "bg-primary-turquoise",
    href: "/funcionalidades/educadora",
  },
  {
    title: "Tutoras",
    features: [
      "Ve fotos y reportes diarios de las actividades de tus hijas e hijos.",
      "Recibe notificaciones de su entrada y salida a la guardería.",
      "Consulta el menú de comidas y los horarios.",
      "Comunícate directamente con las Educadoras a cargo de tus hijas e hijos.",
      // "Revisa tu estado de cuenta y realiza pagos en línea.",
    ],
    image:
      "https://res.cloudinary.com/quinder/image/upload/v1762218233/quinder/assets/casual-light-lavender-outfits-mother-son-trendy-lifestyle-background-ideal-family-photoshoots-memorable-moments_1_awx9ct.png",
    background: "bg-primary-yellow",
    href: "/funcionalidades/padres",
  },
  ,
];

export default function UserSection() {
  return (
    <section className="py-20 space-y-8">
      {/* <h2 className="text-xl text-center xl:text-left xl:text-[42px] font-bold xl:py-8"> */}
      <h2 className="quinder-h2 text-center">
        ¿Para <UnderlineText>qui&eacute;n</UnderlineText> es Quinder
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-3 items-stretch gap-8">
        {userCards.map((card) => (
          <div
            key={card?.title}
            className="rounded-[48px] p-6 space-y-6 border border-gray-300"
          >
            {/* Imagen  */}
            <div
              className={`relative rounded-3xl h-[200px] ${card?.background}`}
            >
              <img
                src={card?.image}
                className="absolute bottom-0 left-[50%] h-[220px] transform -translate-x-[50%]"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-base xl:text-[22px] font-bold mb-8">
                {card?.title}
              </h3>

              <ul className="list-disc pl-6 text-txtSecondary text-sm xl:text-base font-medium">
                {card?.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <Button
              as={Link}
              href={card?.href}
              variant="bordered"
              className="w-full bg-slide-bd py-3 rounded-2xl font-semibold"
            >
              Explora m&aacute;s funcionalidades
              <CircleArrowRight />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
