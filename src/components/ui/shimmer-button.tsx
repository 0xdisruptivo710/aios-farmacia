import { cn } from "@/lib/utils";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  shimmerColor?: string;
  shimmerSize?: string;
  background?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255,255,255,0.3)",
  background = "hsl(156 25% 23%)",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-10 py-4 font-body font-medium text-[15px] tracking-wide text-white transition-all duration-500 hover:shadow-lifted",
        className
      )}
      style={{ background }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
        }}
      />
    </button>
  );
}
