import React from "react";

const CustomPopUp = ({ attraction }) => {
  const { name } = attraction;
  return (
    <div
      style={{
        fontSize: "22px",
        width: "300px",
        height: "100px",
        background: "white",
      }}
    >
      {name}
    </div>
  );
};

export default CustomPopUp;
