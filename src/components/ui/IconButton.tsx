import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  size?: number;
  variant?: Variant;
  children: ReactNode;
};

// 40px charcoal circle for inline icon actions. Ported from components/actions/IconButton.jsx.
const bg: Record<Variant, string> = {
  primary: "bg-[var(--primary)] text-[var(--on-primary)] hover:bg-[#e6e6e6]",
  secondary: "bg-[var(--surface-1)] text-[var(--ink)] hover:bg-[var(--surface-2)]",
  ghost: "bg-transparent text-[var(--ink)] hover:bg-[var(--surface-2)]",
};

export default function IconButton({
  label,
  size = 40,
  variant = "secondary",
  className = "",
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      style={{ width: size, height: size }}
      className={[
        "inline-flex items-center justify-center rounded-[var(--radius-full)] border-0 cursor-pointer",
        "transition-[transform,background-color] duration-[var(--dur-fast)] ease-[var(--ease-standard)]",
        "active:scale-[var(--press-scale)] focus-visible:outline-none focus-visible:shadow-[var(--elev-3)]",
        bg[variant],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
