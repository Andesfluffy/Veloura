import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type FieldBaseProps = {
  label?: string;
  description?: string;
  error?: string;
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & FieldBaseProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, description, error, id, required, ...props }, ref) => {
    const fieldId = id ?? props.name;

    return (
      <div className="space-y-2.5">
        {label ? (
          <label
            htmlFor={fieldId}
            className="flex items-center justify-between text-[0.65rem] font-semibold tracking-[0.22em] text-[rgba(233,211,180,0.72)] uppercase"
          >
            <span>{label}</span>
            {required ? <span className="text-[rgba(233,211,180,0.5)]">Required</span> : null}
          </label>
        ) : null}
        <input
          id={fieldId}
          ref={ref}
          required={required}
          className={cn(
            "w-full rounded-[var(--radius-lg)] border border-[rgba(233,211,180,0.25)] bg-[rgba(15,16,22,0.78)] px-5 py-3.5 text-sm text-[rgba(233,211,180,0.9)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 placeholder:text-[rgba(233,211,180,0.35)] focus:border-[rgba(233,211,180,0.45)] focus:bg-[rgba(18,19,26,0.92)] focus:ring-1 focus:ring-[rgba(233,211,180,0.45)] focus:outline-none",
            error && "border-red-400/70 focus:ring-red-400/40",
            className,
          )}
          {...props}
        />
        {description ? (
          <p className="text-[0.65rem] tracking-[0.18em] text-[rgba(233,211,180,0.55)] uppercase">
            {description}
          </p>
        ) : null}
        {error ? (
          <p className="text-xs font-medium text-red-300/90" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
