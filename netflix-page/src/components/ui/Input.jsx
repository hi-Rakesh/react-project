import React from "react";

const Input = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm text-gray-300">
          {label}
        </label>
      )}

      <input
        className={`
          w-full px-4 py-3
          rounded-md
          bg-black/60
          border border-gray-600
          text-white
          placeholder-gray-400
          focus:outline-none
          focus:border-white
          transition
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;