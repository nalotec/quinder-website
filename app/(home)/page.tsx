import Carousel from "./components/carousel";
import FreeTrial from "./components/freetrial";
import Hero from "./components/hero";
import UserSection from "./components/users";
import Ventajas from "./components/ventajas";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <UserSection />
      <Carousel />
      <Ventajas />
      <FreeTrial />
    </div>
  );
}
