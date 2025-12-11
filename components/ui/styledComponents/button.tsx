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
        `bg-primary-purple font-semibold text-[16px] rounded-xl pr-4 pl-6 w-full 
         md:w-fit
         xl-text-lg xl:rounded-3xl xl:py-8

        `,
        className,
      )}
    >
      {!children && (
        <>
          Iniciar prueba gratuita
          <CircleArrowRight className="w-6 h-6 xl:w-6 xl:h-6" />
        </>
      )}
      {children}
    </HeroUIButton>
  ),
);

LinkButton.displayName = "Button";
