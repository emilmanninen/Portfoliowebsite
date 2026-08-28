import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "translucent" | "text";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

// White pill on dark is the only primary CTA shape. Secondary actions are charcoal pills — never
// bordered ghosts. Ported from components/actions/Button.jsx in the design-system handoff; the
// source drives hover/press off React state, this uses Tailwind's hover:/active: variants instead
// so Button can stay a server component (no client JS shipped just to lighten a pill on hover).
const base =
  "inline-flex items-center justify-center gap-[var(--space-xs)] min-h-[40px] " +
  "font-[family-name:var(--font-body)] text-[length:var(--type-button-size)] font-[var(--type-button-weight)] " +
  "leading-[var(--type-button-lh)] tracking-[var(--type-button-ls)] [font-feature-settings:var(--font-features-body)] " +
  "border-0 cursor-pointer no-underline whitespace-nowrap select-none " +
  "transition-[transform,background-color,opacity] duration-[var(--dur-fast)] ease-[var(--ease-standard)] " +
  "active:scale-[var(--press-scale)] " +
  "disabled:opacity-40 disabled:pointer-events-none " +
  "focus-visible:outline-none focus-visible:shadow-[var(--elev-3)]";

const variants: Record<Variant, string> = {
  // #e6e6e6 (the design system's literal spec value) reads as barely-there against white at rest
  // — darkened further here so the hover state is actually noticeable, same intent as secondary's
  // charcoal shift, just a lighter starting point to work with.
  primary:
    "bg-[var(--primary)] text-[var(--on-primary)] rounded-[var(--radius-pill)] px-[15px] py-[10px] hover:bg-[#cccccc]",
  secondary:
    "bg-[var(--surface-1)] text-[var(--ink)] rounded-[var(--radius-pill)] px-[15px] py-[10px] hover:bg-[var(--surface-2)]",
  translucent:
    "bg-[var(--surface-2)] text-[var(--ink)] rounded-[var(--radius-xxl)] px-[14px] py-[8px] hover:bg-[var(--surface-1)]",
  text:
    "bg-transparent text-[var(--ink)] rounded-[var(--radius-pill)] px-[8px] py-[10px] hover:bg-[var(--surface-1)]",
};

const sizes: Record<Size, string> = {
  sm: "px-[14px] py-[8px]",
  md: "",
  lg: "px-[22px] py-[13px] text-[length:var(--type-body-sm-size)]",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  iconLeft,
  iconRight,
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = [
    base,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconLeft}
        {children}
        {iconRight}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
