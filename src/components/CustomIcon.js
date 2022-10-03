import React from "react";

const CustomIcon = ({ title, Icon, ...rest }) => {
  return (
    <div
      {...rest}
      className="flex flex-col items-center justify-center cursor-pointer"
    >
      {Icon && <Icon size={20} />}
      <p className="font-bold text-[12px]">{title}</p>
    </div>
  );
};

//I can hear you

export default CustomIcon;
