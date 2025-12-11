export type FuncionalidadType = {
  role: string;
  accentColor: string;
  funciones: {
    title: string;
    subtitle: string;
    coverUrl: string;
    bullets: string[];
  }[];
};

const funcionalidades: FuncionalidadType[] = [
  {
    role: "directora",
    accentColor: "primary-orange",
    funciones: [
      {
        title: "salones y maestras",
        subtitle: "Organiza tu estancia por grupos y asigna responsables",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/checkin-checkout_pa3cah.webp",
        bullets: [
          "Crea salones ilimiatados con nombres personalizados",
          "Define rangos de edad mínima y máxima para cada grupo",
          "Asigna una educadora responsable a cada salón",
          "Visualiza qué salones tienen educadora asignada y cuales no.",
          "Reasigna educadores entre diferentes grupos cuando lo nececites",
          "Edita información de salones en cualquier momento.",
          "Administra los datos completos personales y de contacto de tu equipo: nombres, apellidos, teléfonos y correo electrónico.",
          "Elimina salones o personal que ya no forme parte de tu equipo.",
        ],
      },
      {
        title: "cálculo de cobro automático",
        subtitle: "Olvídate de hacer cuentas, las calculamos por ti.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/cobro-automatico_q4ldix.webp",
        bullets: [
          "Configura tus horarios de cierre para días entre semana y sábados.",
          "Establece los minutos de tolerancia para el cálculo de cobro de tiempo extra.",
          "Define tu tarifa por hora extra.",
          "Crea una tabla de multas progresivas por rangos de minutos si se recoge al menor después del horario de cierre.",
          "Visualiza el desglose autmático de cada cobro: tiempo extra, tarifa y/o multa aplicada y total.",
          "Consulta reportes mensuales de cobros extras generados.",
          "Modifica tus tarifas y configuraciones cuando lo requieras,",
        ],
      },
      {
        title: "planes semanales",
        subtitle: "Aprueba y consulta las actividades de cada grupo.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395440/quinder/assets/planes-semanales_z2ctqc.webp",
        bullets: [
          "Revisa los polanes que crean tus educadoras antes de que inicien la semana.",
          "Visualiza objetivos, actividades diarias y ámbitos de experiencia de cada plan.",
          "Aprueba planes que cumplan con tus estándares educativos.",
          "Rechaza palnes que nececiten ajustes y deja observaciones.",
          "Consulta el historial completo de planes semanales anteriores por grupo.",
          "Verifica la variedad y prograsión de actividades a lo largo del tiempo.",
        ],
      },
      {
        title: "check-in y check-out",
        subtitle: "Consulta entradas de asistencia para un mejor control.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/checkin-checkout_pa3cah.webp",
        bullets: [
          "Consulta reportes de asistencia mensual por niño o por grupo.",
          "Identifica patrones de asistencia y ausentismo.",
          "Verifica ocupaciónn real vs capacidad de cada salón.",
          "Exporta datos de asistencia para tu control administrarivo y facturación.",
        ],
      },
    ],
  },
  {
    role: "educadora",
    accentColor: "primary-turquoise",
    funciones: [
      {
        title: "check-in y check-out",
        subtitle: "Registra entradas y salidas en segundos, con seguridad",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/checkin-checkout_pa3cah.webp",
        bullets: [
          "Registra la entrada y salida de cada niña y niño escaneando su código QR único.",
          "Registra entradas y salidas manualmente cuando sea necesario",
          "Verifica quién está autorizado para recoger a cada menor antes de entregarle.",
          "Visualiza en tiempo real quiénes están presentes en tu salón.",
          "Consulta los horarios de entrada y salida de las niñas y niños de tu grupo.",
        ],
      },
      {
        title: "registro diario de actividades",
        subtitle: "Documenta lo que pasó en el día.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/cobro-automatico_q4ldix.webp",
        bullets: [
          "Captura la información de alimentación: que comió y cantidad (nada, poco, todo, pidió más).",
          "Registra si las niñas y niños durmieron siesta y cuántos minutos descansaron",
          "Anota cambios de pañal, y las veces que hicieron pipí o popó.",
          "Selecciona el estado de ánimo durante la estandía.",
          "Marca si lloró, peleó o participó en las actividades del día.",
          "Documenta cualquier incidente que haya ocurrido.",
          "Registra problemas de salud o situaciones especiales.",
          "Agrega observaciones generales sobre el día de cada niña y niño.",
          "Realiza reportes individuales o de varios menores a la vez.",
        ],
      },
      {
        title: "planes semanales",
        subtitle: "Planea yorganiza las actividades de tu grupo.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395440/quinder/assets/planes-semanales_z2ctqc.webp",
        bullets: [
          "Crea planes semanales para tu grupo con objetivos educativos claros.",
          "Define actividades específicas para cada día de la semana.",
          "Selecciona las estrategias a utilizar (juegos, dinámicas, etc).",
          "Elige los ámbitos de experiencia a desarrollar: conocimiento, interacción social, entorno físico, pensamiento y creatividad.",
          "Describe el inicio, desarrollo y cierre de cada actividad.",
          "Especifica los materiales didácticos necesarios.",
          "Indica la duración estimada de cada actividad en minutos.",
          "Marca días inhábiles cuando corresponda.",
          "Revisa planes de semanas anteriores para reutilizar ideas.",
          "Envía tus planes a revisión de la dirección.",
        ],
      },
      {
        title: "Gestión de tu salón",
        subtitle:
          "Consulta la información relevante de los niños y niñas dentro de tu salón.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/checkin-checkout_pa3cah.webp",
        bullets: [
          "Visualiza el listado de las niñas y niños que se encuentran en tu salón.",
          "Consulta si alguno de ellos tiene alergías o requiere cuidados especiales.",
          "Visualiza la información de los alumnos que no acudieron a la guardería.",
        ],
      },
    ],
  },
  {
    role: "padres",
    accentColor: "primary-yellow",
    funciones: [
      {
        title: "registro diario de actividades",
        subtitle: "Entérate de todo lo que pasó en el día.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/checkin-checkout_pa3cah.webp",
        bullets: [
          "Revisa qué comió y cuánto en cada tiempo de comida.",
          "Verifica cuánto tiempo durmió la siesta.",
          "Conoce el número de cambios de pañal o veces de pipí o popó.",
          "Visualiza su estado de ánimo durante el día: feliz, triste o enojada/o.",
          "Recibe notificaciones sobre cualquier incidente ocurrido.",
          "Actualiza la foto y datos generales de tu hija o hijo.",
          "Registra alergias importantes que la estancia debe conocer.",
          "Indica si tu hija o hijo requiere cuidados especiales.",
          "Configura permisos para que la guardería comparta fotografías de tu hija o hijo en sus redes sociales.",
          "Lee observaciones generales de las educadoras.",
        ],
      },
      {
        title: "check-in y check-out",
        subtitle: "Recibe notificaciones de entradas y salidas.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395439/quinder/assets/cobro-automatico_q4ldix.webp",
        bullets: [
          "Recibe notificaciones automáticas cuando tu hija o hijo llega a la guardería.",
          "Recibe confiramción cuando tu hija o hijo sale de la estancia.",
          "Define quién está autorizado a dejar y recoger a tu menor en la estancia.",
          "Incluye datos de contacto y parentesco de cada persona autorizada.",
          "Edita o elimina personas autorizadas en cualquier momento.",
          "Verifica quién dejó y quién recogió a tu hija o hijo cada día.",
          "Consulta el historial de entradas y salidas por fecha.",
          "Revisa horarios exactos y tiempo total de estadía en la guardería.",
        ],
      },
      {
        title: "planes semanales",
        subtitle:
          "Consulta las actividades semanales planeadas para tu hija o hijo.",
        coverUrl:
          "https://res.cloudinary.com/quinder/image/upload/v1765395440/quinder/assets/planes-semanales_z2ctqc.webp",
        bullets: [
          "Consulta las actividades planeadas para la semana de tu hija o hijo.",
          "Conoce los objetivos educativos que trabajarán.",
          "Revisa qué ámbitos de experiencia desarrollarán.",
          "Visualiza qué materiales se utilizarán en las actividades.",
        ],
      },
    ],
  },
];

export const getFuncionalidades = (role: string) => {
  switch (role) {
    case "padres":
      return funcionalidades[2];
    case "educadora":
      return funcionalidades[1];
    default:
      return funcionalidades[0];
  }
};
