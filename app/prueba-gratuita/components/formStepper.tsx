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
      <div className="flex items-center justify-between">
        {steps.map((step) => (
          <div
            key={`step-${step.id}`}
            className={`
              w-14 h-14 rounded-full flex items-center justify-center text-[28px] font-bold 
              ${currentStep + 1 === step.id ? "bg-primary-green outline-10 outline-primary-green-light" : "bg-slide-bd border-2 border-[#d9d9d9]"}
            `}
          >
            {step.id}
          </div>
        ))}
      </div>
      <div className="absolute border-1 border-dashed border-gray-300 w-full top-8"></div>
    </div>
  );
}
