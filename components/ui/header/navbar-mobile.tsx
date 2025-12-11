"use client";

import { Button, Drawer, DrawerContent, useDisclosure } from "@heroui/react";
import { CircleArrowRight, Menu } from "lucide-react";
import { LinkButton } from "../styledComponents/button";
import Link from "next/link";
import { getNavLinks } from "@/lib/utils/getNavLinks";

export default function NavbarMobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navLinks = getNavLinks();

  return (
    <div
      id="navbar-mobile"
      className="relative flex justify-between items-center h-full w-full z-50"
    >
      <div className="flex items-center gap-3">
        <Button
          variant="bordered"
          className="border-none"
          isIconOnly
          onPress={onOpen}
        >
          <Menu width={20} height={20} />
        </Button>
        <div>
          <img src="/images/quinder-logo.png" className="h-[42px] w-auto" />
        </div>
      </div>

      <LinkButton className="w-fit text-xs py-1.5 pl-3 pr-2">
        Prueba gratuita
        <CircleArrowRight className="w-4 h-4" />
      </LinkButton>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        backdrop="transparent"
        className="w-full z-10"
      >
        <DrawerContent className="w-full py-6 px-3">
          <div className="py-6 space-y-1">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.id}
                href={navLink.href}
                className="block w-full py-2 border-b border-gray-300"
              >
                {navLink.label}
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
