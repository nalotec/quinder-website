"use client";

import { FuncionalidadType } from "@/lib/utils/getFuncionalidades";
import { Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";

const roleList = [
  { key: "directora", label: "Para directoras y propietarias" },
  { key: "educadora", label: "Para educadoras" },
  { key: "padres", label: "Para padres, madres y tutores" },
];

export default function RoleNavigation({ rol }: { rol: FuncionalidadType }) {
  const router = useRouter();
  const getIconName = () => {
    if (rol.role === "directora") return "square.svg";
    if (rol.role === "educadora") return "triangle.svg";
    return "circle.svg";
  };

  return (
    <div className={`bg-${rol.accentColor} p-3`}>
      <Select
        defaultSelectedKeys={[rol.role]}
        aria-label="rol"
        classNames={{ value: "font-semibold" }}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          router.push(`/funcionalidades/${e.target.value}`);
        }}
        startContent={<img src={`/images/${getIconName()}`} alt="" />}
      >
        {roleList.map((role) => (
          <SelectItem key={role.key}>{role.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
