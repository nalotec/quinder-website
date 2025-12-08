import { Checkbox } from "@heroui/checkbox";
import { CircleUser, HouseHeart } from "lucide-react";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

export default function Step3Confirmation() {
  const { getValues, register } = useFormContext();

  return (
    <div className="space-y-12">
      {/* Titulo  */}
      <div className="space-y-2">
        <p className="text-3xl font-bold">Confirmaci&oacute;n</p>
        <p className="text-2xl font-medium">
          Antes de finalizar, confirma que todos tus datos sean correctos
        </p>
      </div>

      {/* Tarjetas de datos  */}
      <div className="flex w-full items-stretch gap-12">
        {/* Datos del usuario  */}
        <div className="border-2 border-gray-300 rounded-[48px] py-3 pl-3 pr-8 flex items-start gap-12">
          <div className="bg-[#c39cff]/30 p-12 rounded-tl-[40px] rounded-bl-[40px] rounded-tr-xl rounded-br-xl flex items-center justify-center self-stretch">
            <CircleUser width={80} height={80} strokeWidth={1} />
          </div>
          <div className="py-3 space-y-3 text-[16px] text-txtSecondary font-medium">
            <p className="text-[22px] font-semibold text-foreground">
              Tus datos
            </p>
            <p>
              <span className="font-bold">Rol: </span>
              {getValues("userDto.role")}
            </p>
            <p>
              <span className="font-bold">Nombre: </span>
              {`${getValues("userDto.name")} ${getValues("userDto.last_name")}`}
            </p>
            <p>
              <span className="font-bold">Tel&eacute;fono: </span>
              {getValues("userDto.phone")}
            </p>
            <p>
              <span className="font-bold">Correo electrónico: </span>
              {getValues("userDto.email")}
            </p>
          </div>
        </div>

        {/* Datos de la estancia  */}
        <div className="border-2 border-gray-300 rounded-[48px] py-3 pl-3 pr-8 flex items-start gap-12">
          <div className="bg-[#c39cff]/30 p-12 rounded-tl-[40px] rounded-bl-[40px] rounded-tr-xl rounded-br-xl flex items-center justify-center self-stretch">
            <HouseHeart width={80} height={80} strokeWidth={1} />
          </div>
          <div className="py-3 space-y-3 text-[16px] text-txtSecondary font-medium">
            <p className="text-[22px] font-semibold text-foreground">
              Datos de tu estancia
            </p>
            <p>
              <span className="font-bold">Nombre de la estancia: </span>
              {getValues("estanciaDto.name")}
            </p>
            <p>
              <span className="font-bold">Tel&eacute;fono: </span>
              {getValues("userDto.phone")}
            </p>
            <div>
              <p>
                <span className="font-bold">Direcci&oacute;n: </span>
              </p>
              <p>{getValues("estanciaDto.address_1")}</p>
              <p>{getValues("estanciaDto.address_2")}</p>
              <p>{getValues("estanciaDto.colony")}</p>
              <p>{getValues("estanciaDto.city")}</p>
              <p>{getValues("estanciaDto.state")}</p>
              <p>CP: {getValues("estanciaDto.zip_code")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Aceptacion de terminos y condiciones y aviso de privacidad  */}
      <div className="space-y-3 font-medium">
        <p className="text-[18px] font-semibold">
          Aceptaci&oacute;n de t&eacute;rminos y condiciones y pol&iacute;tica
          de privacidad
        </p>
        <div>
          <Checkbox
            {...register("terms_and_conditions")}
            classNames={{ label: "text-txtSecondary" }}
          >
            He le&iacute;do y acepto los{" "}
            <Link href="" className="text-blue-500">
              t&eacute;rminos y condiciones
            </Link>{" "}
            de Quinder
          </Checkbox>
        </div>
        <div>
          <Checkbox
            {...register("privacy_policy")}
            classNames={{ label: "text-txtSecondary" }}
          >
            He le&iacute;do y acepto la{" "}
            <Link href="" className="text-blue-500">
              pol&iacute;tica de privacidad
            </Link>{" "}
            de Quinder
          </Checkbox>
        </div>
      </div>
    </div>
  );
}
