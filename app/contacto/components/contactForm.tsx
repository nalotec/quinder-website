"use client";

import { ContactFormSchema } from "@/schemas/contactFormSchema";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Radio, RadioGroup } from "@heroui/radio";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { CircleArrowRight } from "lucide-react";

const asuntos = ["contrataciones", "soporte", "sugerencias"];
const placeholders = {
  contrataciones:
    "Cuéntanos sobre tu guardería: cuántos grupos tienes, cuántas niñas y niños atiendes, cuándo te gustaría empezar a usar Quinder",
  soporte:
    "Descríbennos el problema que estás enfrentando con el mayor detalle posible para poderte ayudarte mejor.",
  sugerencias:
    "Comparte tu idea o sugerencia. Nos encanta escuchar cómo podemos mejorar Quinder para ti.",
};

type AsuntoType = keyof typeof placeholders;

const roles = [
  "Directora o propietaria",
  "Educadora",
  "Madre, padre o persona tutora",
];

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [asunto, setAsunto] = useState(asuntos[0]);
  const [placeholder, setPlaceholder] = useState<string>(
    placeholders.contrataciones,
  );
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  });

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Target value: ", e.target.value);
    const value = e.target.value as AsuntoType;
    setAsunto(e.target.value);
    setPlaceholder(placeholders[value]);
    form.setValue("subject", e.target.value as string);
  };

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    console.log(data);

    startTransition(async () => {});
  };

  return (
    <div className="bg-white border-2 border-gray-300 rounded-[48px] p-12">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Asunto  */}
        <RadioGroup
          {...form.register("role")}
          label="Asunto"
          orientation="horizontal"
          classNames={{ label: "text-[18px] text-foreground font-semibold" }}
          defaultValue={roles[0]}
          isDisabled={isPending}
        >
          {roles.map((rol) => (
            <Radio
              key={rol}
              value={rol}
              className="mr-3"
              classNames={{
                label: "text-txtSecondary text-[18px] font-medium pl-2",
              }}
            >
              {rol}
            </Radio>
          ))}
        </RadioGroup>

        {/* Nombre  */}
        <div className="pt-2">
          <Input
            {...form.register("name")}
            label="Nombre completo"
            labelPlacement="outside"
            placeholder="p. ej. Alondra Pérez García"
            variant="bordered"
            classNames={{
              label: "font-semibold text-[18px]",
              input: "text-[18px] bg-white",
              errorMessage: "text-sm font-medium",
            }}
            isInvalid={!!form.formState.errors.name}
            errorMessage={form.formState.errors.name?.message}
            isDisabled={isPending}
          />
        </div>

        {/* Rol  */}
        <RadioGroup
          {...form.register("role")}
          label="¿Cuál es tu rol dentro de la guardería?"
          orientation="horizontal"
          classNames={{ label: "text-[18px] text-foreground font-semibold" }}
          defaultValue={roles[0]}
          isDisabled={isPending}
        >
          {roles.map((rol) => (
            <Radio
              key={rol}
              value={rol}
              className="mr-3"
              classNames={{
                label: "text-txtSecondary text-[18px] font-medium pl-2",
              }}
            >
              {rol}
            </Radio>
          ))}
        </RadioGroup>

        {/* Correo electronico y teléfono  */}
        <div className="pt-2 flex justify-center items-start gap-12">
          {/* Email */}
          <Input
            {...form.register("email")}
            label="Correo electrónico"
            labelPlacement="outside"
            placeholder="p.ej. alondra@mail.com"
            variant="bordered"
            classNames={{
              label: "font-semibold text-[18px]",
              input: "text-[18px] bg-white",
              errorMessage: "text-sm font-medium",
            }}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
            isDisabled={isPending}
          />

          {/* Teléfono de contacto */}
          <Input
            {...form.register("phone")}
            label="Teléfono de contacto (opcional)"
            labelPlacement="outside"
            placeholder="p.ej. 5566778899"
            variant="bordered"
            classNames={{
              label: "font-semibold text-[18px]",
              input: "text-[18px] bg-white",
              errorMessage: "text-sm font-medium",
            }}
            isInvalid={!!form.formState.errors.phone}
            errorMessage={form.formState.errors.phone?.message}
            isDisabled={isPending}
          />
        </div>

        {/* Descripción */}
        <Textarea
          {...form.register("detail")}
          label="¿En qué te podemos ayudar?"
          labelPlacement="outside"
          placeholder={placeholder}
          variant="bordered"
          minRows={10}
          isClearable
          classNames={{
            label: "font-semibold text-[18px]",
            input: "text-[18px] bg-white",
            errorMessage: "text-sm font-medium",
          }}
          isInvalid={!!form.formState.errors.detail}
          errorMessage={form.formState.errors.detail?.message}
          isDisabled={isPending}
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="solid"
            className="bg-primary-purple py-7 pl-6 pr-4 font-semibold text-white text-[18px] rounded-3xl"
            isLoading={isPending}
          >
            Enviar formulario
            <CircleArrowRight />
          </Button>
        </div>
      </form>
    </div>
  );
}
