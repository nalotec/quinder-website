import { FreeTrialFormSchema } from "@/schemas/freeTrialSchema";
import { Checkbox } from "@heroui/checkbox";
import { CircleUser, HouseHeart } from "lucide-react";
import Link from "next/link";
import { Controller, useFormContext } from "react-hook-form";
import z from "zod";

export default function Step3Confirmation() {
  const {
    getValues,
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const errores = errors as Partial<
    Record<keyof z.infer<typeof FreeTrialFormSchema>, any>
  >;

  return (
    <div className="space-y-12">
      {/* Titulo  */}
      <div className="space-y-2">
        <p className="quinder-h2">Confirmaci&oacute;n</p>
        <p className="quindr-p-display text-[16px]">
          Antes de finalizar, confirma que todos tus datos sean correctos
        </p>
      </div>

      {/* Tarjetas de datos  */}
      <div className="space-y-6 xl:flex xl:w-full xl:items-stretch xl:gap-12">
        {/* Datos del usuario  */}
        <div className="border-2 border-gray-300 p-6 space-y-6 rounded-[20px] xl:rounded-[48px] xl:py-3 xl:pl-3 xl:pr-8 xl:flex xl:items-start xl:gap-12">
          <div className="bg-[#c39cff]/30 p-6 rounded-2xl xl:p-12 xl:rounded-tl-[40px] xl:rounded-bl-[40px] xl:rounded-tr-xl xl:rounded-br-xl flex items-center justify-center self-stretch">
            <CircleUser width={80} height={80} strokeWidth={1} />
          </div>
          <div className="py-3 space-y-3 text-[16px] text-txtSecondary font-medium">
            <p className="quinder-h1 text-left">Tus datos</p>
            <p className="quinder-p">
              <span className="font-bold">Rol: </span>
              {getValues("userDto.role")}
            </p>
            <p className="quinder-p">
              <span className="font-bold">Nombre: </span>
              {`${getValues("userDto.name")} ${getValues("userDto.last_name")}`}
            </p>
            <p className="quinder-p">
              <span className="font-bold">Tel&eacute;fono: </span>
              {getValues("userDto.phone")}
            </p>
            <p className="quinder-p">
              <span className="font-bold">Correo electrónico: </span>
              {getValues("userDto.email")}
            </p>
          </div>
        </div>

        {/* Datos de la estancia  */}
        <div className="border-2 border-gray-300 p-6 space-y-6 rounded-[20px] xl:rounded-[48px] xl:py-3 xl:pl-3 xl:pr-8 xl:flex xl:items-start xl:gap-12">
          <div className="bg-[#c39cff]/30 p-6 rounded-2xl xl:p-12 xl:rounded-tl-[40px] xl:rounded-bl-[40px] xl:rounded-tr-xl xl:rounded-br-xl flex items-center justify-center self-stretch">
            <HouseHeart width={80} height={80} strokeWidth={1} />
          </div>
          <div className="py-3 space-y-3 text-[16px] text-txtSecondary font-medium">
            <p className="quinder-h1 text-left">Datos de tu estancia</p>
            <p className="quinder-p">
              <span className="font-bold">Nombre de la estancia: </span>
              {getValues("estanciaDto.name")}
            </p>
            <p className="quinder-p">
              <span className="font-bold">Tel&eacute;fono: </span>
              {getValues("userDto.phone")}
            </p>
            <div>
              <p className="quinder-p">
                <span className="font-bold">Direcci&oacute;n: </span>
              </p>
              <p className="quinder-p">{getValues("estanciaDto.address_1")}</p>
              <p className="quinder-p">{getValues("estanciaDto.address_2")}</p>
              <p className="quinder-p">{getValues("estanciaDto.colony")}</p>
              <p className="quinder-p">{getValues("estanciaDto.city")}</p>
              <p className="quinder-p">{getValues("estanciaDto.state")}</p>
              <p className="quinder-p">
                CP: {getValues("estanciaDto.zip_code")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aceptacion de terminos y condiciones y aviso de privacidad  */}
      <div className="space-y-3 font-medium">
        <p className="quinder-p text-foreground font-semibold">
          Aceptaci&oacute;n de t&eacute;rminos y condiciones y pol&iacute;tica
          de privacidad
        </p>
        <div>
          <Controller
            name="userDto.terms_and_conditions"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                classNames={{ label: "text-sm text-txtSecondary" }}
                isInvalid={!!errores.userDto?.terms_and_conditions}
              >
                He le&iacute;do y acepto los{" "}
                <Link href="" className="text-blue-500">
                  t&eacute;rminos y condiciones
                </Link>{" "}
                de Quinder
              </Checkbox>
            )}
          />
        </div>
        <div>
          <Controller
            name="userDto.privacy_policy"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                classNames={{ label: "text-sm text-txtSecondary" }}
                isInvalid={!!errores.userDto?.privacy_policy}
              >
                He le&iacute;do y acepto la{" "}
                <Link href="" className="text-blue-500">
                  pol&iacute;tica de privacidad
                </Link>{" "}
                de Quinder
              </Checkbox>
            )}
          />
        </div>
      </div>
    </div>
  );
}
