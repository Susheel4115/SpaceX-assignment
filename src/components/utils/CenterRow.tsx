import React from "react";

//props interface
interface Props {
  children: React.ReactNode;
  height?: number | string;
}

//to place items in the center of the screen

const Center = ({ children, height = 100 }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
        marginTop: "10vh",
      }}
    >
      {children}
    </div>
  );
};

export default Center;
