import UnderlineText from "@/components/ui/underlineText";
import { ClockArrowDown, HouseHeart, ShieldPlus, Wallet } from "lucide-react";

const ventajas = [
  {
    title: "Ahorra tiempo en tareas administrativas",
    description:
      "Automatiza reportes, asistencias y comunicación para que tu equipo se enfoque en lo que realmente importa.",
    icon: (
      <ClockArrowDown className="w-18 h-18 xl:w-24 xl:h-24" strokeWidth={1} />
    ),
    bgColor: "bg-primary-turquoise",
  },
  {
    title: "Ten mayor control y seguridad",
    description:
      "Visibilidad completa de quién entra y sale de tu guardería, a qué hora y con quién. Todo registrado automáticamente para tu tranquilidad y la de las familias.",
    icon: <ShieldPlus className="w-18 h-18 xl:w-24 xl:h-24" strokeWidth={1} />,
    bgColor: "bg-primary-pink",
  },
  {
    title: "Simplifica la gestión de pagos",
    description:
      "Desglose completo de cobros: cuánto tiempo extra estuvieron, cuánto les corresponde pagar y el total. Sin sorpresas, sin malentendidos, y sin cálculos manuales.",
    icon: <Wallet className="w-18 h-18 xl:w-24 xl:h-24" strokeWidth={1} />,
    bgColor: "bg-primary-orange",
  },
  {
    title: "Familias más conectadas y tranquilas",
    description:
      "Los padres reciben actualizaciones y reportes diarios de las actividades de su hija o hijo, sin tener que llamar para preguntar por el estatus.",
    icon: <HouseHeart className="w-18 h-18 xl:w-24 xl:h-24" strokeWidth={1} />,
    bgColor: "bg-primary-yellow",
  },
];

export default function Ventajas() {
  return (
    <section className="py-10 space-y-6 xl:space-y-8">
      <h2 className="quinder-h2 text-center">
        <UnderlineText>Ventajas</UnderlineText> de usar Quinder
      </h2>

      <div className="space-y-6 xl:grid xl:grid-cols-2 xl:items-stretch xl:gap-8">
        {ventajas.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-3xl xl:py-3 xl:pl-3 xl:pr-8 xl:rounded-[48px] border border-gray-300 xl:flex xl:items-stretch xl:gap-5"
          >
            {/* Icono  */}
            <div
              className={`${item.bgColor} flex items-center justify-center p-6 w-full rounded-[18px] xl:w-fit xl:rounded-tl-[40px] xl:rounded-bl-[40px] xl:rounded-tr-xl xl:rounded-br-xl`}
            >
              {item.icon}
            </div>

            {/* Descripcion  */}
            <div className="space-y-6 py-5 flex flex-col justify-center">
              <p className="quinder-h3">{item.title}</p>
              <p className="quinder-p">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
