import { FuncionalidadType } from "@/lib/utils/getFuncionalidades";
import { CircleCheck } from "lucide-react";

export default function Features({
  features,
}: {
  features: FuncionalidadType;
}) {
  return (
    <div className="py-3 space-y-6">
      {features.funciones.map((feature) => (
        <div
          key={feature.title}
          className="rounded-3xl p-6 space-y-12 border-2 border-gray-300"
        >
          {/* Higlighted title  */}
          <div
            className={`bg-${features.accentColor} py-3 px-5 space-y-2.5 rounded-full w-fit flex items-center justify-center`}
          >
            <p className="text-sm uppercase font-bold">{feature.title}</p>
          </div>

          {/* Subtitulo  */}
          <p className="quinder-h3">{feature.subtitle}</p>

          {/* Imagen  */}
          <div>
            <img src={feature.coverUrl} alt="" />
          </div>

          {/* Listado de características */}
          <div className="space-y-6">
            {feature.bullets.map((bullet, index) => (
              <div
                key={`bullet-${index}`}
                className="quinder-p flex gap-2.5 items-center"
              >
                <CircleCheck
                  className={`shrink-0 text-foreground w-6 h-6 bg-${features.accentColor} rounded-full`}
                />
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
