import React, { useEffect } from "react";

const Notification = ({ text, isOpen, onHide }) => {
  useEffect(() => {
    if (isOpen)
      setTimeout(() => {
        onHide(false);
      }, 3 * 1000);
  }, [isOpen, onHide]);

  return (
    <>
      {isOpen && (
        <div
          style={{
            width: "200px",
            height: "50px",
            position: "absolute",
            right: "50px",
            backgroundColor: "gray",
            borderRadius: 19,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>{text}</div>
        </div>
      )}
    </>
  );
};

export default Notification;
