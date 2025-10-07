import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({ as: Component = "div", className, ...props }: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16",
        className,
      )}
      {...props}
    />
  );
}
