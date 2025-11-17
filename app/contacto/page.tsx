import ContactForm from "./components/contactForm";

export default function ContactoPage() {
  return (
    <div className="bg-slide-bd px-20 pt-20 flex justify-between items-start">
      {/* Contenido principal  */}
      <div className="space-y-12 w-[850px]">
        {/* Encabezado  */}
        <h1 className="text-[52px] font-bold">
          ¿Tienes dudas?{" "}
          <div className="relative inline-block">
            <p className="">Escr&iacute;benos</p>
            <div className="absolute w-full h-3 bg-primary-green rounded-3xl -bottom-0.5 right-0 transform -rotate-1"></div>
          </div>
        </h1>

        <p className="text-2xl text-txtSecondary font-semibold">
          Ya sea que quieras contratar, necesites soporte o tengas una
          sugerencia, nos encantar&aacute; escucharte.
        </p>

        <ContactForm />
      </div>

      {/* Imagen derecha  */}
      <img src={"/images/Group4.svg"} alt="" />
    </div>
  );
}
