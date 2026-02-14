import React from 'react'

const Button = ({children, onClick, className,variant='primary',size='md',type='button',disabled=false,
}) => {
const baseStyle ="btn-base";
const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",
};
const sizes = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};
return (
  <button
    type={type}
    className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

}
export default Button;