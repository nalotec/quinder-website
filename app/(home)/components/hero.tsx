"use client";

import HighlightedText from "@/components/ui/highligtedText";
import { LinkButton } from "@/components/ui/styledComponents/button";
import UnderlineText from "@/components/ui/underlineText";

export default function Hero() {
  return (
    <section className="w-full pt-12 xl:pt-20 space-y-12 xl:gap-12 xl:flex xl:justify-center xl:items-center">
      <div className="w-full space-y-12">
        {/* Título  */}
        <h1 className="quinder-h1">
          La <HighlightedText>aplicaci&oacute;n</HighlightedText> que necesitas
          para gestionar tu <UnderlineText>guarder&iacute;a</UnderlineText>
        </h1>

        <p className="quinder-p-display">
          Lleva el control de asistencias, mant&eacute;n a las madres y padres
          informados y organiza a tu equipo desde una aplicaci&oacute;n para
          todas. Simple, pr&aacute;ctica para tu d&iacute;a a d&iacute;a.
        </p>

        <LinkButton className="w-full" />
      </div>

      {/* Imagen derecha  */}
      <img
        src="https://res.cloudinary.com/quinder/image/upload/v1762217669/quinder/assets/Ilustracio%CC%81n_l7dujh.png"
        alt="ilustacion"
        className="block xl:w-[600px]"
      />
      {/* <div className="w-2/3 border border-gray-300 h-[443px]"></div> */}
    </section>
  );
}
