import React from "react";

const Header = ({ text, isStyled = true }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div
        style={
          isStyled
            ? {
                fontSize: "30px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }
            : {}
        }
      >
        {text}
      </div>
    </div>
  );
};

export default Header;
