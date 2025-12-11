import { Check } from "lucide-react";

interface FormStepperI {
  currentStep: number;
}

export default function FormStepper({ currentStep }: FormStepperI) {
  const steps = [
    {
      id: 1,
      description: "Datos del usuario",
    },
    {
      id: 2,
      description: "Datos de la estancia",
    },
    {
      id: 3,
      description: "Resumen",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Pasos  */}
      <div className="flex gap-0 items-center justify-between">
        {steps.map((step) => (
          <div
            key={`step-${step.id}`}
            className={`
              w-12 h-12 flex items-center justify-center text-[22px] font-bold shrink-0 z-10
              xl:w-14 xl:h-14 rounded-full  xl:text-[28px] 
              ${currentStep === step.id ? "bg-primary-green outline-10 outline-primary-green-light" : `${currentStep > step.id ? "bg-primary-green-light" : "bg-slide-bd border-2 border-[#d9d9d9]"}`}
              
            `}
          >
            {currentStep > step.id ? <Check /> : `${step.id}`}
          </div>
        ))}
      </div>

      {/* Barra de progreso  */}
      <div className="absolute h-2 top-5 xl:top-6 flex items-center gap-0 z-0 w-full">
        <div
          className={`w-full ${currentStep > 1 ? "h-2 bg-primary-green-light" : "border-1 border-dashed border-primary-green-light"} `}
        ></div>
        <div
          className={`w-full ${currentStep > 2 ? "h-2 bg-primary-green-light" : "border-1 border-dashed border-primary-green-light"} `}
        ></div>
      </div>
    </div>
  );
}
