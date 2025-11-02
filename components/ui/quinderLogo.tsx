import { dynapuff } from "./fonts";

export default function QuinderLogo({
  variant,
}: {
  variant: "home" | undefined | "legales" | "dashboardHeader";
}) {
  // Logo que se muestra en el landing page
  if (!variant || variant === "home") {
    return (
      <div className="flex items-center justify-center gap-1 text-white">
        <img
          src="/images/LogoSinFondo.png"
          className="h-[80px]"
          alt="logo principal"
        />
        <p
          className={`${dynapuff.className} mt-5 text-5xl text-white antialiased`}
        >
          uindeR
        </p>
      </div>
    );
  }

  // Logo que se muestra en el encabezado de las secciones de legales
  if (variant === "legales") {
    return (
      <div className="flex items-center justify-center gap-0.5 text-white">
        <img
          src="/images/LogoSinFondo.png"
          className="h-[52px]"
          alt="logo principal"
        />
        <p
          className={`${dynapuff.className} mt-3 text-4xl antialiased text-white`}
        >
          uindeR
        </p>
      </div>
    );
  }

  if (variant === "dashboardHeader") {
    return (
      <div className="flex items-center justify-center gap-0.5 text-white">
        <img
          src="/images/LogoSinFondo.png"
          className="h-[40px]"
          alt="logo principal"
        />
        <p
          className={`${dynapuff.className} mt-2 text-2xl antialiased text-white`}
        >
          uindeR
        </p>
      </div>
    );
  }
}
