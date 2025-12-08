import { FreeTrialFormSchema } from "@/schemas/freeTrialSchema";
import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";
import z from "zod";

export default function Step2EstanciaData() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errores = errors as Partial<
    Record<keyof z.infer<typeof FreeTrialFormSchema>, any>
  >;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-3xl font-bold">Datos de tu estancia</p>
        <p className="text-2xl font-medium">
          Cu&eacute;ntanos un poco más sobre tu estancia.
        </p>
      </div>

      {/* Nombre de la estancia  */}
      <Input
        {...register("estanciaDto.name")}
        type="text"
        variant="bordered"
        placeholder="p. ej. Guardería y Estancia infantil Abejita"
        label="Nombre de la estancia"
        labelPlacement="outside-top"
        classNames={{
          label: "text-[18px] text-foreground font-semibold",
          input: "text-txtSecondary text-[18px] font-medium",
          errorMessage: "text-base font-medium text-danger",
        }}
        isInvalid={!!errores.estanciaDto?.name}
        errorMessage={errores.estanciaDto?.name?.message}
      />

      <div className="flex items-top justify-center gap-9">
        {/* Cantidad de salones  */}
        <Input
          {...register("estanciaDto.classrooms")}
          type="number"
          variant="bordered"
          placeholder="p. ej. 5"
          label="Número de grupos o salones"
          endContent={<OpcionalInputLabel />}
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.classrooms}
          errorMessage={errores.estanciaDto?.classrooms?.message}
        />

        {/* Cantidad de niños  */}
        <Input
          {...register("estanciaDto.children")}
          type="number"
          variant="bordered"
          placeholder="p. ej. 30"
          label="Número de niñas y niños"
          endContent={<OpcionalInputLabel />}
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.children}
          errorMessage={errores.estanciaDto?.children?.message}
        />
      </div>

      <div className="flex items-top justify-center gap-9">
        {/* Teléfono de la estancia  */}
        <Input
          {...register("estanciaDto.phone")}
          type="tel"
          variant="bordered"
          placeholder="p. ej. 5511223344"
          label="Teléfono de la estancia"
          endContent={<OpcionalInputLabel />}
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.classrooms}
          errorMessage={errores.estanciaDto?.classrooms?.message}
        />

        {/* Sitio web de la estancia  */}
        <Input
          {...register("estanciaDto.website_url")}
          type="text"
          variant="bordered"
          placeholder="p. ej. www.guarderiaabejita.com"
          label="Sitio web"
          endContent={<OpcionalInputLabel />}
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.children}
          errorMessage={errores.estanciaDto?.children?.message}
        />
      </div>

      <p className="text-2xl font-medium">Ubicaci&oacute;n de la estancia</p>

      {/* Dirección línea 1  */}
      <Input
        {...register("estanciaDto.address_1")}
        type="text"
        variant="bordered"
        placeholder="p. ej. Avenida Presidente Plutarco Elias Calles 1361"
        label="Dirección línea 1"
        labelPlacement="outside-top"
        classNames={{
          label: "text-[18px] text-foreground font-semibold",
          input: "text-txtSecondary text-[18px] font-medium",
          errorMessage: "text-base font-medium text-danger",
        }}
        isInvalid={!!errores.estanciaDto?.address_1}
        errorMessage={errores.estanciaDto?.address_1?.message}
      />

      {/* Dirección línea 2  */}
      <Input
        {...register("estanciaDto.address_2")}
        type="text"
        variant="bordered"
        placeholder=""
        label="Dirección línea 2"
        labelPlacement="outside-top"
        endContent={<OpcionalInputLabel />}
        classNames={{
          label: "text-[18px] text-foreground font-semibold",
          input: "text-txtSecondary text-[18px] font-medium",
          errorMessage: "text-base font-medium text-danger",
        }}
        isInvalid={!!errores.estanciaDto?.address_2}
        errorMessage={errores.estanciaDto?.address_2?.message}
      />

      <div className="flex items-top justify-center gap-9">
        <Input
          {...register("estanciaDto.colony")}
          type="text"
          variant="bordered"
          placeholder="p. ej. Nativitas"
          label="Colonia"
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.colony}
          errorMessage={errores.estanciaDto?.colony?.message}
        />

        {/* Alcaldía o municipio  */}
        <Input
          {...register("estanciaDto.city")}
          type="text"
          variant="bordered"
          placeholder="p. ej. Iztacalco"
          label="Alcaldía o Municipio"
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.city}
          errorMessage={errores.estanciaDto?.city?.message}
        />
      </div>

      <div className="flex items-top justify-center gap-9">
        <Input
          {...register("estanciaDto.state")}
          type="text"
          variant="bordered"
          placeholder="p. ej. Ciudad de México"
          label="Estado"
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.state}
          errorMessage={errores.estanciaDto?.state?.message}
        />

        {/* Alcaldía o municipio  */}
        <Input
          {...register("estanciaDto.zip_code")}
          type="text"
          variant="bordered"
          placeholder="p. ej. 03500"
          label="Código postal"
          labelPlacement="outside-top"
          classNames={{
            label: "text-[18px] text-foreground font-semibold",
            input: "text-txtSecondary text-[18px] font-medium",
            errorMessage: "text-base font-medium text-danger",
          }}
          isInvalid={!!errores.estanciaDto?.zip_code}
          errorMessage={errores.estanciaDto?.zip_code?.message}
        />
      </div>
    </div>
  );
}

export function OpcionalInputLabel() {
  return <p className="text-txtSecondary text-sm font-semibold">Opcional</p>;
}
