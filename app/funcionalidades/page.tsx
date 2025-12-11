"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FuncionPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/funcionalidades/directora");
  }, [router]);
}
