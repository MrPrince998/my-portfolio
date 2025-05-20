import React from "react";

const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={`
        w-full
        px-4 py-3
        rounded-lg border
        bg-[#BFBFBF]
        text-white
        border-gray-300 
        placeholder-white
        focus:outline-none focus:ring-2
        focus:ring-gray-300 
        focus:border-transparent
        transition-all duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        ${disabled ? "bg-gray-100 " : ""}
      `}
    />
  );
};

export default Input;
