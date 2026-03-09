import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Button = forwardRef(
  (
    { className, variant = "primary", size = "default", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crema-500 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-crema-500 text-espresso-900 hover:bg-crema-400 shadow-lg shadow-crema-500/20",
      outline:
        "border border-crema-500/30 bg-background text-crema-500 hover:bg-crema-500/10 border-solid",
      ghost:
        "bg-transparent text-foreground hover:bg-espresso-800/50 text-crema-400",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export default Button;
