import React from "react";

const Button: React.FC<{
  children: string;
  variant: "TRANSPARENT" | "FILLED";
}> = (props) => {

  const variants = [
    {
      variant: "TRANSPARENT",
      style: "text-blue-700",
    },
    {
      variant: "FILLED",
      style: "bg-customgold px-8 py-3 flex items-center rounded-full font-semibold",
    },
  ];

  return (
    <button
      className={
        variants.find((option) => option.variant === props.variant)?.style
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
