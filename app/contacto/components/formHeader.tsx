import UnderlineText from "@/components/ui/underlineText";

export default function FormHeader() {
  return (
    <div className="xl:flex xl:items-top xl:gap-12">
      <div className="">
        {" "}
        <img
          src={"/images/asistente-contacto.svg"}
          alt="imagen asistente telefonico"
          className="w-[120px] xl:w-auto"
        />
      </div>
      <div className="space-y-2 xl:pt-12">
        <h1 className="quinder-h1 text-left">
          ¿Tienes <UnderlineText>dudas</UnderlineText> ?
        </h1>
        <p className="quinder-p-display">
          Contrata, solicita soporte o danos una sugerencia, nos encantará
          escucharte.
        </p>
      </div>
    </div>
  );
}
