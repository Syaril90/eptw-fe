import React, { ReactElement } from "react";

interface ButtonWithSvgProps {
  svg: ReactElement;
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary"; // Define the variants
}

const ButtonWithSvg: React.FC<ButtonWithSvgProps> = ({
  svg,
  label,
  onClick,
  className,
  variant = "primary", // Default variant
}) => {
  // Set classes based on the variant
  const buttonClasses =
    variant === "primary"
      ? "bg-petronas-primary hover:bg-petronas-dark text-white"
      : "bg-white hover:bg-gray-200 text-black";

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses} font-bold py-2 px-4 rounded inline-flex items-center ${className}`}
      type="button"
    >
      {svg}
      <span>{label}</span>
    </button>
  );
};

export default ButtonWithSvg;
