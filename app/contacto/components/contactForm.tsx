"use client";

import { ContactFormSchema } from "@/schemas/contactFormSchema";
import { Controller, useForm, useWatch } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Radio, RadioGroup } from "@heroui/radio";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { FormStateT } from "@/types/formStateType";
import { LinkButton } from "@/components/ui/styledComponents/button";

const asuntos = ["contrataciones", "soporte", "sugerencias"];

const roles = ["Directora o propietaria", "Educadora", "Madre, padre o tutor"];

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<FormStateT>({
    status: "",
    message: "",
  });
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      subject: asuntos[0],
      role: roles[0],
      detail: "",
    },
  });
  const control = form.control;
  const watchSubject = useWatch({
    control,
    name: "subject",
    defaultValue: asuntos[0],
  });

  /**
   * Función envío del formulario
   */
  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    console.log(data);
    setFormState({ status: "", message: "" });
    startTransition(async () => {
      //Este es un mensaje de prueba desde el el formulario de contacto desde el nuevo website de quinder
      try {
        console.log("Entramos en el try");
        const res = await fetch("/api/contact-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Error en el envío,");
        }

        setFormState({ status: "success", message: "" });
      } catch (error) {
        console.log(error);
        setFormState({
          status: "error",
          message:
            "Ha habido un error el enviar el correo, intenta neuvamente más tarde.",
        });
      }
    });
  };

  // Función asigna el placeholder dependiendo del asunto seleccionado
  const setPlaceholder = (asunto: string) => {
    let placeholder = "";
    switch (asunto) {
      case "soporte":
        placeholder =
          "Descríbe el problema que estás enfrentando con el mayor detalle posible para que podamos ayudarte mejor.";
        break;
      case "sugerencias":
        placeholder =
          "Comparte tu idea o sugerencia. Nos encanta escuchar cómo podemos mejorar Quinder para ti.";
        break;
      default:
        placeholder =
          "Cuéntanos sobre tu guardería: cuántos grupos tienes, cuántas niñas y niños atiendes, cuándo te gustaría empezar a usar Quinder";
    }

    return placeholder;
  };

  return (
    <div className="bg-white border-2 border-gray-300 rounded-3xl p-6 xl:rounded-[48px] xl:p-12 xl:transform xl:-translate-y-10">
      {/* Formulario principal  */}
      {formState.status !== "success" && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Asunto  */}
          <Controller
            name="subject"
            control={form.control}
            render={({ field }) => (
              <RadioGroup
                {...field}
                label="Asunto"
                // orientation="horizontal"
                classNames={{
                  label: "text-sm text-foreground font-bold",
                }}
                defaultValue={asuntos[0]}
                isDisabled={isPending}
                isInvalid={!!form.formState.errors.subject}
                errorMessage={form.formState.errors.subject?.message}
              >
                {asuntos.map((asunto) => (
                  <Radio
                    key={asunto}
                    value={asunto as string}
                    className="mr-3"
                    classNames={{
                      label: "text-sm text-txtSecondary font-medium pl-2",
                    }}
                  >
                    <p className="capitalize">{asunto}</p>
                  </Radio>
                ))}
              </RadioGroup>
            )}
          />

          {/* Nombre  */}
          <div className="pt-2">
            <Input
              {...form.register("name")}
              label="Nombre completo"
              labelPlacement="outside-top"
              placeholder="p. ej. Alondra Pérez García"
              variant="bordered"
              classNames={{
                label: "quinder-p font-bold",
                input: "quider-p bg-white",
                errorMessage: "text-sm font-medium",
              }}
              isInvalid={!!form.formState.errors.name}
              errorMessage={form.formState.errors.name?.message}
              isDisabled={isPending}
            />
          </div>

          {/* Rol  */}
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <RadioGroup
                {...field}
                label="¿Cuál es tu rol dentro de la guardería?"
                orientation="horizontal"
                classNames={{
                  label: "text-sm xl:text-[18px] text-foreground font-semibold",
                }}
                defaultValue={roles[0]}
                isDisabled={isPending}
              >
                {roles.map((rol) => (
                  <Radio
                    key={rol}
                    value={rol}
                    className="mr-3"
                    classNames={{
                      label:
                        "text-txtSecondary text-sm xl:text-[18px] font-medium pl-2",
                    }}
                  >
                    {rol}
                  </Radio>
                ))}
              </RadioGroup>
            )}
          />

          {/* Correo electronico y teléfono  */}
          <div className="space-y-6 pt-2 xl:flex xl:justify-center xl:items-start xl:gap-12">
            {/* Email */}
            <Input
              {...form.register("email")}
              label="Correo electrónico"
              labelPlacement="outside-top"
              placeholder="p.ej. alondra@mail.com"
              variant="bordered"
              classNames={{
                label: "font-semibold text-sm xl:text-[18px]",
                input: "text-sm xl:text-[18px] bg-white",
                errorMessage: "text-xs xl:text-sm font-medium",
              }}
              isInvalid={!!form.formState.errors.email}
              errorMessage={form.formState.errors.email?.message}
              isDisabled={isPending}
            />

            {/* Teléfono de contacto */}
            <Input
              {...form.register("phone")}
              label="Teléfono de contacto (opcional)"
              labelPlacement="outside-top"
              placeholder="p.ej. 5566778899"
              variant="bordered"
              classNames={{
                label: "font-semibold text-sm xl:text-[18px]",
                input: "text-sm xl:text-[18px] bg-white",
                errorMessage: "text-xs xl:text-sm font-medium",
              }}
              isInvalid={!!form.formState.errors.phone}
              errorMessage={form.formState.errors.phone?.message}
              isDisabled={isPending}
            />
          </div>

          {/* Descripción */}
          <Controller
            name="detail"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                label="¿En qué te podemos ayudar?"
                labelPlacement="outside-top"
                placeholder={setPlaceholder(watchSubject)}
                variant="bordered"
                minRows={10}
                isClearable={true}
                classNames={{
                  label: "font-semibold text-sm xl:text-[18px]",
                  input: "text-sm xl:text-[18px] bg-white",
                  errorMessage: "text-xs xl:text-sm font-medium",
                }}
                isInvalid={!!form.formState.errors.detail}
                errorMessage={form.formState.errors.detail?.message}
                isDisabled={isPending}
              />
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="solid"
              className="bg-primary-purple py-2 pl-3 pr-2 rounded-[18px] text-sm xl:py-7 xl:pl-6 xl:pr-4 font-semibold text-white xl:text-[18px] xl:rounded-3xl"
              isLoading={isPending}
            >
              Enviar formulario
              <CircleArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </form>
      )}

      {/* Mensaje de confirmación  */}
      {formState.status === "success" && (
        <div className="quinder-p space-y-8">
          <p className="quinder-h1 text-left">¿Que sigue?</p>
          <div>
            <p>
              Recibimos tu solicitud sobre{" "}
              <span className="font-bold text-foreground capitalize">
                {form.getValues("subject")}
              </span>
            </p>
            <p>
              Revisaremos tu mensaje y te responderemos a{" "}
              <span className="font-bold text-foreground">
                {form.getValues("email")}
              </span>{" "}
              en las pr&oacute;ximas 24 horas h&aacute;biles.
            </p>
          </div>

          <p>Mientras tanto: </p>

          <div>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Explora nuestras{" "}
                <Link
                  href="/funcionalidades"
                  className="text-blue-600 underline"
                >
                  funcionalidades
                </Link>
              </li>
              <li>
                Conoce nuestros{" "}
                <Link href="/precio" className="text-blue-600 underline">
                  planes y precios
                </Link>
              </li>
              <li>O inicia tu prueba gratuita de 30 d&iacute;as</li>
            </ul>
          </div>

          <LinkButton />
        </div>
      )}
    </div>
  );
}
