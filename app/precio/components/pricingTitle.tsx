import HighlightedText from "@/components/ui/highligtedText";
import UnderlineText from "@/components/ui/underlineText";

export default function PricingTitle() {
  return (
    <div className="pt-6 pb-13 px-12 xl:pt-20 xl:px-20 xl:pb-12 xl:text-[52px] bg-slide-bd">
      <h1 className="quinder-h1 text-center">
        <UnderlineText>Un solo plan</UnderlineText>, todas las funcionalidades.
        <br />
        T&uacute; decides cu&aacute;ndo pagar y cu&aacute;nto{" "}
        <HighlightedText>ahorrar</HighlightedText>
      </h1>
    </div>
  );
}
