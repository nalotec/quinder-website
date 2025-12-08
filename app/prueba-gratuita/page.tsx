import FreeTrialForm from "./components/freeTrialForm";
import FormHeader from "./components/header";

export default function FreeTrial() {
  return (
    <div className="relative pt-12 px-20 bg-slide-bd">
      <FormHeader />
      <FreeTrialForm />
    </div>
  );
}
