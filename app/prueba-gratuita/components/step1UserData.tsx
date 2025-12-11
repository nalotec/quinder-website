"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Radio, RadioGroup } from "@heroui/radio";
import { Input } from "@heroui/input";
import { FreeTrialFormSchema } from "@/schemas/freeTrialSchema";
import z from "zod";

const roles = [
  {
    id: 1,
    desc: "Directora o propietaria",
  },
  {
    id: 2,
    desc: "Educadora",
  },
  {
    id: 3,
    desc: "Madre, padre o tutor",
  },
];

export default function Step1UserData() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const errores = errors as Partial<
    Record<keyof z.infer<typeof FreeTrialFormSchema>, any>
  >;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="quinder-h2">Tus datos</p>
        <p className="quinder-p-display text-[16px]">
          {/* Cu&eacute;ntanos un poco más sobre ti. */}
          Ingresa tus datos
        </p>
      </div>

      <Controller
        name="userDto.role"
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            label="¿Cuál es tu rol dentro de la guardería?"
            // orientation="horizontal"
            classNames={{
              label: "quinder-p font-bold text-foreground",
            }}
            isInvalid={!!errores.userDto?.role}
            errorMessage={errores.userDto?.role?.message}
          >
            {roles.map((rol) => (
              <Radio
                key={`role-${rol.id}`}
                defaultChecked={rol.id === 1 ? true : false}
                defaultValue={"1"}
                value={rol.id.toString()}
                className="mr-3"
                classNames={{
                  label: "text-sm text-txtSecondary font-medium pl-1",
                }}
              >
                {rol.desc}
              </Radio>
            ))}
          </RadioGroup>
        )}
      />

      <div className="space-y-6 xl:flex xl:items-start xl:gap-8">
        {/* Nombre  */}
        <Input
          {...register("userDto.name")}
          type="text"
          variant="bordered"
          placeholder="p. ej. Juan"
          label="Nombre"
          labelPlacement="outside-top"
          classNames={{
            label: "text-sm xl:text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-sm xl:text-[18px] font-medium",
            errorMessage: "text-xs xl:text-base font-medium text-danger",
          }}
          isInvalid={!!errores.userDto?.name}
          errorMessage={errores.userDto?.name?.message}
        />

        {/* Apellidos  */}
        <Input
          {...register("userDto.last_name")}
          type="text"
          variant="bordered"
          placeholder="p. ej. Pérez"
          label="Apellidos"
          labelPlacement="outside-top"
          classNames={{
            label: "text-sm xl:text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-sm xl:text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.userDto?.last_name}
          errorMessage={errores.userDto?.last_name?.message}
        />
      </div>

      <div className="space-y-6 xl:flex xl:items-start xl:gap-8">
        {/* Correo electrónico  */}
        <Input
          {...register("userDto.email")}
          type="email"
          variant="bordered"
          placeholder="p. ej. jperez@mail.com"
          label="Correo Electrónico"
          labelPlacement="outside-top"
          classNames={{
            label: "text-sm xl:text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-sm xl:text-[18px] font-medium",
            errorMessage: "text-xs xl:text-base font-medium text-danger",
          }}
          isInvalid={!!errores.userDto?.email}
          errorMessage={errores.userDto?.email?.message}
        />

        {/* Teléfono */}
        <Input
          {...register("userDto.phone")}
          type="tel"
          variant="bordered"
          placeholder="p. ej. 5511223344"
          label="Teléfono"
          labelPlacement="outside-top"
          classNames={{
            label: "text-sm xl:text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-sm  xl:text-[18px] font-medium",
            errorMessage: "text-xs xl:text-base font-medium text-danger",
          }}
          isInvalid={!!errores.userDto?.phone}
          errorMessage={errores.userDto?.phone?.message}
          maxLength={10}
        />
      </div>

      <div className="space-y-6 xl:flex xl:items-start xl:gap-8">
        {/* Contraseña */}
        <Input
          {...register("userDto.password")}
          type="password"
          variant="bordered"
          placeholder="**********"
          label="Contraseña"
          labelPlacement="outside-top"
          classNames={{
            label: "text-sm xl:text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-sm xl:text-[18px] font-medium",
            errorMessage: "text-xd xl:text-base font-medium text-danger",
          }}
          isInvalid={!!errores.userDto?.password}
          errorMessage={errores.userDto?.password?.message}
        />

        {/* Confirmación de contraseña */}
        <Input
          {...register("userDto.passwordConfirm")}
          type="password"
          variant="bordered"
          placeholder="p. ej. Pas$word1"
          label="Confirmar contraseña"
          labelPlacement="outside-top"
          classNames={{
            label: "text-sm xl:text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-sm xl:text-[18px] font-medium",
            errorMessage: "text-sm xl:text-base font-medium text-danger",
          }}
          isInvalid={!!errores.userDto?.passwordConfirm}
          errorMessage={errores.userDto?.passwordConfirm?.message}
        />
      </div>
    </div>
  );
}
