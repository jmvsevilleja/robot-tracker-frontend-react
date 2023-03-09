import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ text, onClick, className }) => (
  <button
    className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
