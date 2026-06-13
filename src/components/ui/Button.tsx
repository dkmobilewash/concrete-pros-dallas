import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline-white" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

interface LinkProps extends BaseProps {
  href: string;
}

interface ButtonProps
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent",
  secondary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
  "outline-white":
    "border-2 border-white text-white hover:bg-white hover:text-dark focus-visible:ring-white",
  ghost:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function classes(
  variant: Variant,
  size: Size,
  fullWidth?: boolean,
  extra?: string,
): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-display font-medium uppercase tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px]",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    extra,
  );
}

/**
 * Button renders an anchor (next/link or tel/mailto) when `href` is provided,
 * otherwise a native <button>. tel: and mailto: links use a plain <a>.
 */
export function Button(props: LinkProps | ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    className,
    children,
  } = props;
  const cls = classes(variant, size, fullWidth, className);

  if (props.href !== undefined) {
    const { href } = props;
    const isExternal = /^(tel:|mailto:|https?:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    fullWidth: _f,
    className: _c,
    children: _ch,
    href: _h,
    ...rest
  } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
