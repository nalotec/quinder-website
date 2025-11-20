"use client";

import { cn } from "@/lib/stylesUtils";
import { Button as HeroUIButton, ButtonProps } from "@heroui/button";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

type StyledButtonProps = ButtonProps;

export const LinkButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ children, className, variant, color, href, ...props }, ref) => (
    <HeroUIButton
      {...props}
      ref={ref}
      as={Link}
      href={href || "/prueba-gratuita"}
      variant={variant || "solid"}
      color={color || "primary"}
      className={cn(
        "bg-primary-purple rounded-3xl py-8 text-lg font-medium",
        className,
      )}
    >
      {!children && (
        <>
          Iniciar prueba gratuita
          <CircleArrowRight />
        </>
      )}
      {children}
    </HeroUIButton>
  ),
);

LinkButton.displayName = "Button";
