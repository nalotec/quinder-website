import { ReactNode } from "react";

interface UnderlineTextI {
  children: ReactNode;
}

export default function UnderlineText({ children }: UnderlineTextI) {
  return (
    <span className="relative inline-block">
      <span>{children}</span>
      <span className="absolute w-full h-1 xl:h-3 bg-primary-green rounded-3xl bottom-0 right-0 transform -rotate-1"></span>
    </span>
  );
}
