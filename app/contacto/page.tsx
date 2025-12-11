import ContactForm from "./components/contactForm";
import FormHeader from "./components/formHeader";

export default function ContactoPage() {
  return (
    <section className="relative p-3 space-y-6 xl:pt-12 xl:px-20 bg-slide-bd">
      <FormHeader />
      <ContactForm />
    </section>
  );
}
