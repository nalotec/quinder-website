import { dynapuff } from "@/components/ui/fonts";

export default function Test() {
  return (
    <div className="my-20">
      <div className="relative bg-sky-700 w-fit pl-8 pr-10 py-2 rounded-3xl">
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
          <p
            className={`${dynapuff.className} absolute antialiased text-lg top-3`}
          >
            Mi
          </p>
          <p
            className={`${dynapuff.className} absolute antialiased text-sm bottom-0.5 right-5`}
          >
            app
          </p>
        </div>
      </div>
    </div>
  );
}
