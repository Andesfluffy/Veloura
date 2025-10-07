import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  glow?: boolean;
};

export function Card({ className, children, glow = false, ...props }: CardProps) {
  return (
    <div
      data-surface="secondary"
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(233,211,180,0.18)] p-8 shadow-[0_14px_48px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_24px_70px_rgba(0,0,0,0.48)]",
        glow &&
          "before:absolute before:inset-[-40%] before:rounded-[999px] before:bg-[radial-gradient(circle_at_center,rgba(233,211,180,0.22),rgba(233,211,180,0)_62%)] before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] hover:before:opacity-100",
        className,
      )}
      {...props}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
