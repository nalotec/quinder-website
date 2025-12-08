export default function FormHeader() {
  return (
    <div className="flex items-top gap-12">
      <div className="">
        {" "}
        <img
          src={"/images/asistente-contacto.svg"}
          alt="imagen asistente telefonico"
        />
      </div>
      <div className="pt-12">
        <h1 className="text-[52px] font-bold">¿Tienes dudas?</h1>
        <p className="text-2xl font-semibold text-txtSecondary">
          Contrata, solicita soporte o danos una sugerencia, nos encantará
          escucharte.
        </p>
      </div>
    </div>
  );
}
