import { ClockArrowDown, HouseHeart, ShieldPlus, Wallet } from "lucide-react";

const ventajas = [
  {
    title: "Ahorra tiempo en tareas administrativas",
    description:
      "Automatiza reportes, asistencias y comunicación para que tu equipo se enfoque en lo que realmente importa.",
    icon: <ClockArrowDown className="w-24 h-24" strokeWidth={1} />,
    bgColor: "bg-turquoise-card",
  },
  {
    title: "Ten mayor control y seguridad",
    description:
      "Visibilidad completa de quién entra y sale de tu guardería, a qué hora y con quién. Todo registrado automáticamente para tu tranquilidad y la de las familias.",
    icon: <ShieldPlus className="w-24 h-24" strokeWidth={1} />,
    bgColor: "bg-pink-card",
  },
  {
    title: "Simplifica la gestión de pagos",
    description:
      "Desglose completo de cobros: cuánto tiempo extra estuvieron, cuánto les corresponde pagar y el total. Sin sorpresas, sin malentendidos, y sin cálculos manuales.",
    icon: <Wallet className="w-24 h-24" strokeWidth={1} />,
    bgColor: "bg-orange-card",
  },
  {
    title: "Familias más conectadas y tanquilas",
    description:
      "Los padres reciben actualizaciones y reportes diarios de las actividades de su hija o hijo, sin tener que llamar para preguntar por el estatus.",
    icon: <HouseHeart className="w-24 h-24" strokeWidth={1} />,
    bgColor: "bg-yellow-card",
  },
];

export default function Ventajas() {
  return (
    <section className="py-10 space-y-8">
      <h2 className="text-[42px] font-bold py-8">Ventajas de usar Quinder</h2>

      <div className="grid grid-cols-2 items-stretch gap-8">
        {ventajas.map((item) => (
          <div
            key={item.title}
            className="py-3 pl-3 pr-8 rounded-[48px] border border-gray-300 flex items-stretchr gap-5"
          >
            <div
              className={`${item.bgColor} p-6 w-fit rounded-tl-[40px] rounded-bl-[40px] rounded-tr-xl rounded-br-xl flex items-center`}
            >
              {item.icon}
            </div>
            <div className="space-y-6 py-5 flex flex-col justify-center">
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-base font-medium text-txtSecondary">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
