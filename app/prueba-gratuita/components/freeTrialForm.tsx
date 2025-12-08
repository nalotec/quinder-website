"use client";

import FormStepper from "./formStepper";
import { useForm, FormProvider } from "react-hook-form";
import z from "zod";
import { FreeTrialFormSchema } from "@/schemas/freeTrialSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useMultiFormHook } from "@/hooks/useMultiStepFormHook";
import Step1UserData from "./step1UserData";
import { Button } from "@heroui/button";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Step2EstanciaData from "./step2EstanciaData";
import Step3Confirmation from "./step3Confirmacion";

export default function FreeTrialForm() {
  const [isPending, startTransition] = useTransition();
  const { step, currentStep, next, back } = useMultiFormHook([
    <Step1UserData key={"Step1-UserData"} />,
    <Step2EstanciaData key={"Step2-EstanciaData"} />,
    <Step3Confirmation key={"Step3-Confirmation"} />,
  ]);
  const form = useForm<z.infer<typeof FreeTrialFormSchema>>({
    resolver: zodResolver(FreeTrialFormSchema),
    defaultValues: {
      userDto: {
        name: "Juan",
        last_name: "Perez",
        email: "jperez@gmail.com",
        phone: "5511223344",
        password: "123123123",
        passwordConfirm: "123123123",
        role: 1,
      },
      estanciaDto: {
        name: "Kinder Winnie Poo",
        address_1: "Emilio Carraza 38",
        colony: "Benito Juarez",
        city: "Tultitlán",
        state: "Quintana Roo",
        zip_code: "54942",
      },
    },
  });

  // Funcion para envío del formulario
  const submitForm = async (data: z.infer<typeof FreeTrialFormSchema>) => {
    console.log("Form data: ", data);
    startTransition(async () => {
      //
    });
  };

  // Función nextStep se encarga de validar que se hayan llenado
  // todos los campos necesarios antes de avanzar el formulario
  // al siguiente paso
  const nextStep = async () => {
    let valid;

    console.log("Current step: ", currentStep);

    // Paso 1: Datos del usuario
    if (currentStep === 0) {
      valid = await form.trigger([
        // "userDto.role",
        "userDto.name",
        "userDto.last_name",
        "userDto.email",
        "userDto.phone",
        "userDto.password",
        "userDto.passwordConfirm",
        "userDto.role",
      ]);

      if (valid) {
        next();
        console.log("Current step now: ", currentStep);
      } else {
        console.log(form.formState.errors);
        console.log(form.getValues("userDto.role"));
      }
    }

    // Paso 2: Datos de la estancia
    if (currentStep === 1) {
      valid = await form.trigger([
        "estanciaDto.name",
        "estanciaDto.address_1",
        "estanciaDto.city",
        "estanciaDto.colony",
        "estanciaDto.phone",
        "estanciaDto.state",
        "estanciaDto.zip_code",
      ]);

      if (valid) next();
    }
  };

  return (
    <div className="border-2 border-gray-300 p-12 rounded-[48px] space-y-12 bg-white transform -translate-y-9">
      <FormStepper currentStep={2} />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-12">
          {step}

          {/* Buttons  */}
          <div
            className={`flex items-center ${currentStep === 0 ? "justify-end" : "justify-between"}`}
          >
            {/* Botón atrás  */}
            {currentStep >= 1 && currentStep < 3 && (
              <Button
                type="button"
                variant="bordered"
                isDisabled={isPending}
                className="bg-slide-bd rounded-3xl py-8 text-lg font-medium"
                onPress={back}
              >
                <CircleArrowLeft />
                Anterior
              </Button>
            )}

            {/* Botón siguiente  */}
            {currentStep < 2 && (
              <Button
                type="button"
                variant="solid"
                color="primary"
                isDisabled={isPending}
                className="bg-primary-purple rounded-3xl py-8 text-lg font-medium"
                onPress={nextStep}
              >
                Siguiente
                <CircleArrowRight />
              </Button>
            )}

            {/* Botón submit  */}
            {currentStep === 2 && (
              <Button
                type="submit"
                variant="solid"
                color="primary"
                isDisabled={isPending}
                className="bg-primary-purple rounded-3xl py-8 text-lg font-medium"
              >
                Finalizar
                <CircleArrowRight />
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
