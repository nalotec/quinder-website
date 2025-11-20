import FormStepper from "./formStepper";

export default function FreeTrialForm() {
  return (
    <div className="border-2 border-gray-300 p-12">
      <FormStepper currentStep={2} />
      <div>Formulario</div>
    </div>
  );
}
