import UnderlineText from "@/components/ui/underlineText";

export default function FormHeader() {
  return (
    <div className="xl:items-top xl:flex xl:gap-12">
      <div className="">
        {" "}
        <img
          src={"/images/asistente-trial.svg"}
          alt="imagen asistente telefonico"
          className="w-[120px] h-auto xl:w-auto"
        />
      </div>
      <div className="space-y-2 xl:pt-12">
        <h1 className="quinder-h1 text-left">
          Inicia una prueba <UnderlineText>gratuita</UnderlineText>
        </h1>
        <p className="quinder-p-display">
          Completa tu informaci&oacute;n y comienza a usar Quinder de inmediato
        </p>
      </div>
    </div>
  );
}
