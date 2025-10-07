type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      Veloura
    </span>
  );
}
