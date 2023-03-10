import React from "react";

//props interface
interface Props {
  children: React.ReactNode;
  height?: number | string;
}

//to place items in the center of the screen

const Center = ({ children, height = 100 }: Props) => {
  let useHeight;
  if (typeof height === "string") useHeight = height;
  else useHeight = height + "vh";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: useHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Center;
