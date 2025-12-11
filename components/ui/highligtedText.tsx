import { ReactNode } from "react";
import { cn } from "@/lib/stylesUtils";

interface HighlightedTextI {
  children: ReactNode;
  className?: string;
}

export default function HighlightedText({
  children,
  className,
}: HighlightedTextI) {
  return (
    <span
      className={cn(
        "bg-primary-green rounded-full px-2 xl:px-4 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
}
