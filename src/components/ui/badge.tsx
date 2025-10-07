import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "outline";
  className?: string;
};

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default:
    "border border-[rgba(233,211,180,0.28)] bg-[rgba(17,17,22,0.72)] text-[rgba(233,211,180,0.85)] shadow-[0_10px_24px_rgba(0,0,0,0.35)]",
  accent:
    "bg-[radial-gradient(circle_at_30%_0%,rgba(245,227,197,0.95),rgba(200,173,123,0.92))] text-[#111216] border border-[rgba(233,211,180,0.4)] shadow-[0_12px_28px_rgba(233,211,180,0.24)]",
  outline: "border border-[rgba(233,211,180,0.32)] bg-transparent text-[rgba(233,211,180,0.78)]",
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-1 text-[0.68rem] font-semibold tracking-[0.22em] uppercase backdrop-blur",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
