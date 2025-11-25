import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  // Standardized rounding to rounded-xl (was rounded-full)
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Updated Palette to match PlansSection standard
  const variants = {
    // Primary is now MedSênior Green (standard for all plan buttons)
    primary:
      "bg-brand-primary text-white hover:bg-brand-dark focus:ring-brand-primary border border-transparent",

    // Secondary remains Dark Green
    secondary:
      "bg-brand-dark text-white hover:bg-black shadow-lg shadow-brand-dark/20 focus:ring-brand-dark border border-transparent",

    // Outline follows brand primary color
    outline:
      "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary",

    // Ghost for subtle actions
    ghost: "bg-transparent text-brand-dark hover:bg-brand-light",
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
