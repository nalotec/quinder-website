"use client";

import { LinkButton } from "@/components/ui/styledComponents/button";

export default function Hero() {
  return (
    <section className="pt-20 flex justify-center items-center">
      <div className="w-full space-y-12">
        {/* Título  */}
        <h1 className="text-[52px] font-bold">
          La{" "}
          <span className="bg-primary-green rounded-full px-4 py-0.5">
            aplicaci&oacute;n
          </span>{" "}
          que necesitas para gestionar tu{" "}
          <div className="relative inline-block">
            <p className="">guarder&iacute;a</p>
            <div className="absolute w-full h-3 bg-primary-green rounded-3xl bottom-1 right-0"></div>
          </div>
        </h1>

        <p className="text-2xl font-semibold text-txtSecondary">
          Lleva el control de asistencias, mant&eacute;n a las madres y padres
          informados y organiza a tu equipo desde una aplicaci&oacute;n para
          todas. Simple, pr&aacute;ctica para tu d&iacute;a a d&iacute;a.
        </p>
        <LinkButton />
      </div>

      {/* Imagen derecha  */}
      <img
        src="https://res.cloudinary.com/quinder/image/upload/v1762217669/quinder/assets/Ilustracio%CC%81n_l7dujh.png"
        alt="ilustacion"
        className="block w-full"
      />
      {/* <div className="w-2/3 border border-gray-300 h-[443px]"></div> */}
    </section>
  );
}
