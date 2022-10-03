import React from "react";

const CustomButton = ({ text, className, ...rest }) => {
  return (
    <p
      {...rest}
      className={`py-1 px-2 text-center bg-pink-500 text-white rounded-md cursor-pointer ${className}`}
    >
      {text || "Default Text"}
    </p>
  );
};

export default CustomButton;
