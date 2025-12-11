import {
  FuncionalidadType,
  getFuncionalidades,
} from "@/lib/utils/getFuncionalidades";
import Hero from "./components/hero";
import RoleNavigation from "./components/roleNavigation";
import Features from "./components/features";
import FreeTrial from "@/app/(home)/components/freetrial";

export default async function FuncionalidadesPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const role = (await params).role;
  const roleFunctionality = getFuncionalidades(role);
  return (
    <section>
      <Hero />
      <RoleNavigation rol={roleFunctionality as FuncionalidadType} />
      <Features features={roleFunctionality as FuncionalidadType} />
      <FreeTrial />
    </section>
  );
}
