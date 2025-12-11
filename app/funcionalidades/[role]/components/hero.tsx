import HighlightedText from "@/components/ui/highligtedText";
import UnderlineText from "@/components/ui/underlineText";

export default function Hero() {
  return (
    <div className="md:flex">
      {/* Encabezado  */}
      <div className="py-12 px-3 bg-slide-bd space-y-6">
        <h1 className="quinder-h1">
          Funcionalidades <UnderlineText>diseñadas</UnderlineText> para cada{" "}
          <HighlightedText className="py-0 px-2">rol</HighlightedText>
        </h1>
        <p className="quinder-p-display">
          Centraliza todo lo que necesitas para administrar tu guarder&iacute;a.
          Cada funci&oacute;n est&aacute; pensada para facilitar tu d&iacute;a,
          ya seas una persona propietaria, directora, educadora o padre, madre o
          tutor.
        </p>
      </div>

      {/* Imagenes  */}
      <div></div>
    </div>
  );
}
