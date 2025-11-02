"use client";

import {
  BookCheck,
  BookHeart,
  ClipboardClock,
  ClockPlus,
  NotebookPen,
  ReceiptText,
  ScanQrCode,
  Shapes,
  SmilePlus,
  UserPen,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    image: "",
    btnTitle: "check-in y check-out",
    title: "Registra entradas y salidas en segundos, con total seguridad",
    bullets: [
      {
        icon: <ScanQrCode className="w-12 h-12" strokeWidth={1} />,
        desc: "Usa el código QR único de cada niña y niño para registrar su llegada y salida al instante. El sistema verifica quién está autorizado para recogerle.",
      },
      {
        icon: <ClipboardClock className="w-12 h-12" strokeWidth={1} />,
        desc: "Cada registro queda guardado con fecha, hora exacta y responsable. Esta información alimenta automáticamente el cálculo del cobro y los reportes de asistencia mensual, sin que tengas que llevar un control aparte.",
      },
    ],
  },
  {
    image: "",
    btnTitle: "cálculo de cobro automático",
    title: "Olvídate de hacer cuentas las calculamos por ti.",
    bullets: [
      {
        icon: <ClockPlus className="w-12 h-12" strokeWidth={1} />,
        desc: "Configura una sola vez tus horarios de cierre, tolerancias y tarifas por hora extra. El sistema detecta cuando las niñas y niños se quedan más tiempo del contratado y calcula el cobro exacto al momento de registrar su salida.",
      },
      {
        icon: <ReceiptText className="w-12 h-12" strokeWidth={1} />,
        desc: "Las personas tutoras ven al instante el desglose completo: cuánto tiempo extra estuvieron, cuánto les corresponde pagar y el total. Sin sorpresas, sin malentendidos, y sin cálculos manuales.",
      },
    ],
  },
  {
    image: "",
    btnTitle: "planes semanales",
    title: "Planea, aprueba y consulta las actividades de cada grupo",
    bullets: [
      {
        icon: <NotebookPen className="w-12 h-12" strokeWidth={1} />,
        desc: "Las personas educadoras crean planes semanales estructurados con objetivos claros, actividades por día, ámbitos de experiencia a desarrollar, materiales necesarios y duración.",
      },
      {
        icon: <BookCheck className="w-12 h-12" strokeWidth={1} />,
        desc: "Las personas propietarias y directoras pueden revisar y aprobar los planes antes de que inicien, dejando observaciones si es necesario. Además todas pueden consultar planes anteriores para reutilizar ideas o dar seguimiento al progreso educativo de cada grupo.",
      },
    ],
  },
  {
    image: "",
    btnTitle: "salones y maestras",
    title: "Organiza tu estancia por grupos y asigna responsables",
    bullets: [
      {
        icon: <Shapes className="w-12 h-12" strokeWidth={1} />,
        desc: "Crea todos los salones que necesites definiendo el rango de edad de cada uno. Asigna a la persona educadora encargada de cada grupo y mantén la estructura de tu guardería organizada en un solo lugar.",
      },
      {
        icon: <UserPen className="w-12 h-12" strokeWidth={1} />,
        desc: "Administra la información de tu equipo educativo: nombres, contactos y a qué salón pertenecen. Puedes actualizar datos, reasignar personas educadoras a diferentes grupos en cualquier momento.",
      },
    ],
  },
  {
    image: "",
    btnTitle: "registro diario de actividades",
    title: "Todo lo que pasó en el día documentado y compartido",
    bullets: [
      {
        icon: <SmilePlus className="w-12 h-12" strokeWidth={1} />,
        desc: "Las personas educadoras registran en minutos toda la información de las niñas y niños durante el día: que comió, cuánto durmió, cambios de pañal, estado de ánimo, participación en actividades, incidentes y observaciones especiales.",
      },
      {
        icon: <BookHeart className="w-12 h-12" strokeWidth={1} />,
        desc: "Las personas tutoras pueden consultar el reporte completo de cualquier día desde su app, viendo exactamente cómo estuvo su hija o hijo. Pueden revisar el histórico mensual menteniéndose siempre informadas.",
      },
    ],
  },
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      {/* Carousel  */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container  */}
        <div className="flex">
          {/* Slides  */}
          {slides.map((slide) => (
            <div
              key={slide.btnTitle}
              className="flex-none bg-slide-bd basis-full min-w-0"
            >
              <div className="w-full flex items-center gap-12 p-12 max-w-[1100px] mx-auto">
                {/* Imagen  */}
                <div className="min-w-[400px] h-[499px] border border-gray-300"></div>

                {/* Descripcion  */}
                <div className="space-y-8">
                  {/* Higlighted title  */}
                  <div className="w-fit flex items-center justify-center py-3 px-5 bg-primary-green rounded-full ">
                    <p className="uppercase text-[18px] font-bold ">
                      {slide.btnTitle}
                    </p>
                  </div>

                  {/* Subtitle  */}
                  <p className="text-[30px] font-bold">{slide.title}</p>

                  {/* Features  */}
                  <div className="space-y-8">
                    {slide.bullets.map((bullet) => (
                      <div
                        key={bullet.desc}
                        className="w-full flex items-start gap-3"
                      >
                        <div className="w-12 h-12">{bullet.icon}</div>
                        <p className="font-semibold text-[18px] text-txtSecondary">
                          {bullet.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
