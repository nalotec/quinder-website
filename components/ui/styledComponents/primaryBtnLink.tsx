import { Button } from "@heroui/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function PrimaryBtnLink({ children }: { children: ReactNode }) {
  return (
    <Button
      as={Link}
      href="/"
      variant="solid"
      color="primary"
      className="bg-primary-purple rounded-3xl py-8 text-lg font-medium"
    >
      {children}
    </Button>
  );
}
