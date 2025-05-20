import React from "react";

const variants = {
  primary: `
    bg-[#FFB600] text-white hover:bg-[#E6A400] active:bg-[#CC9200]
    transform hover:scale-[1.02] active:scale-[0.98]
    shadow-md hover:shadow-lg 
  `,
  secondary: `
    border-2 border-[#686868] hover:bg-gray-100 active:bg-gray-200
    transform hover:scale-[1.02] active:scale-[0.98]
  `,
};

const Button = ({
  name,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2 rounded-md text-[clamp(14px,4vw,24px)] font-medium 
        focus:outline-none focus:ring-2 
        transition-all duration-300 ease-out 
        ${variants[variant]} ${className}
      `}
    >
      {name || "Button"}
    </button>
  );
};

export default Button;
