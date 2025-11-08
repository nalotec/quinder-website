import { Button } from "@heroui/button";
import { CircleArrowRight } from "lucide-react";

export default function PricingCards() {
  const prices = [
    {
      periodo: "mensual",
      precioPeriodo: 700,
      precioMensual: 700,
      line1: "Cancela",
      line2: "cuando quieras",
      color: "pink-card",
      recommended: false,
    },
    {
      periodo: "trimestral",
      precioPeriodo: 1900,
      precioMensual: 633,
      line1: "ahorra $210",
      line2: "Obtén 3 meses con descuento",
      color: "orange-card",
      recommended: false,
    },
    {
      periodo: "semestral",
      precioPeriodo: 3500,
      precioMensual: 583,
      line1: "ahorra $700",
      line2: "6 meses por el precio de 5",
      color: "turquoise-card",
      recommended: true,
    },
    {
      periodo: "anual",
      precioPeriodo: 7000,
      precioMensual: 583,
      line1: "Ahorra $1,400",
      line2: "12 meses por el precio de 10",
      color: "yellow-card",
      recommended: false,
    },
  ];

  return (
    <div className="p-20">
      <div className="grid grid-cols-4 gap-6">
        {prices.map((price) => (
          <div
            key={price.periodo}
            className="relative space-y-12 pt-12 pb-8 px-8 border border-gray-300 rounded-[48px]"
          >
            {/* Decoracion para plan recomendado  */}
            {price.recommended && (
              <div className="absolute -top-16 left-12 flex justify-between items-start gap-1">
                {/* Image  */}
                <div>
                  <div className="">
                    <div
                      className={`rounded-t-full w-[105px] h-16 bg-${price.color} flex items-center justify-center`}
                    >
                      <img src={"/images/Carita.svg"} alt="" className="pt-4" />
                    </div>
                    <div>
                      <img src={"/images/Bracito.svg"} alt="" />
                    </div>
                  </div>
                </div>

                <p className="mt-4 py-1.5 px-2.5 text-sm border-2 border-gray-300 rounded-2xl font-semibold">
                  Recomendado
                </p>
              </div>
            )}

            {/* Main content */}
            <div className="space-y-8">
              {/* Periodo  */}
              <div className="relative w-fit mx-auto">
                <p className="capitalize font-bold text-[26px] text-center">
                  {price.periodo}
                </p>
                <div
                  className={`absolute w-full h-1.5 bg-${price.color} rounded-3xl -bottom-0.5 right-0 transform -rotate-1`}
                ></div>
              </div>

              {/* Precio  */}
              <div className="font-bold w-fit mx-auto">
                <div className="flex justify-center items-start gap-1 leading-none py-0">
                  <p className="text-[42px] pt-1.5">$</p>
                  <p className="text-[72px]">
                    {price.precioPeriodo.toLocaleString("es-MX")}
                  </p>
                </div>
                <p className="text-[24px] text-right ">{price.periodo}es</p>
                {/* {price.precioMensual && ( */}
                <p
                  className={`text-[18px] text-txtSecondary text-right ${price.periodo === "mensual" ? "text-white" : ""} `}
                >
                  {!!price.precioMensual
                    ? `$${price.precioMensual} al mes`
                    : " "}
                </p>
              </div>

              {/* Descuento  */}
              <div
                className={`relative rounded-[50px] bg-${price.color} py-3 px-5 text-center text-[18px] font-bold `}
              >
                <p className="uppercase">{price.line1}</p>
                <p
                  className={`${price.periodo === "mensual" ? "uppercase" : "text-[14px] py-0.5"}`}
                >
                  {price.line2}
                </p>
              </div>

              {/* Funcionalidades  */}
              <div className="text-txtSecondary font-medium space-y-3 text-[15px]">
                <p>
                  Incluye <b>todas</b> las funcionalidades:
                </p>
                <ul className="list-disc pl-4 space-y-1.5">
                  <li>Check-in y check-out</li>
                  <li>C&aacute;lculo de cobro autom&aacute;tico</li>
                  <li>Planes semanales</li>
                  <li>Salones y maestras</li>
                  <li>Registro diaria de actividades</li>
                </ul>
              </div>
            </div>

            <div>
              <Button
                className="w-full font-semibold  py-5 pl-6 pr-4 flex items-center justify-between bg-slide-bd rounded-[18px]"
                variant="bordered"
              >
                Contratar
                <CircleArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
