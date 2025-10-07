type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="logo-gradient" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E7D6B3" />
          <stop offset="42%" stopColor="#C3A36A" />
          <stop offset="100%" stopColor="#8C6A3B" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#logo-gradient)" opacity="0.92" />
      <path
        d="M18.5 45.5C25.5 37.2 30.4 26.8 32.2 14c1.8 12.8 6.7 23.2 13.7 31.5"
        stroke="#0B0B0C"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M23 24c3.6 2.2 7.7 3.3 12.1 3.3 4.6 0 8.8-1.2 12.4-3.5"
        stroke="#0B0B0C"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
