import React from "react";

const Button: React.FC<{
  children: string | React.ReactNode;
  variant: "TRANSPARENT" | "FILLED";
}> = (props) => {

  const variants = [
    {
      variant: "TRANSPARENT",
      style: "text-blue-700",
    },
    {
      variant: "FILLED",
      style: "bg-customorange px-12 py-5 flex items-center font-medium text-white text-sm",
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
