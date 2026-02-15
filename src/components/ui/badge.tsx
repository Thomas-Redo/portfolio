import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-neutral-800 text-neutral-300",
        variant === "outline" &&
          "border border-neutral-700 text-neutral-400",
        className
      )}
    >
      {children}
    </span>
  );
}
