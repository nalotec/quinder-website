import FreeTrialForm from "./components/freeTrialForm";
import FormHeader from "./components/header";

export default function FreeTrial() {
  return (
    <div className="relative p-3 space-y-6 xl:pt-12 xl:px-20 bg-slide-bd">
      <FormHeader />
      <FreeTrialForm />
    </div>
  );
}
