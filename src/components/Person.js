import React from "react";

const Person = ({ fullName, email, phone, links = [] }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "40px",
        }}
      >
        <div style={{ fontSize: "56px", fontWeight: "bold" }}>{fullName}</div>
        <div style={{ fontSize: "20px", marginTop: "8px" }}>
          E-mail: {email}
        </div>
        <div style={{ fontSize: "20px", marginTop: "8px" }}>Phone: {phone}</div>
        {links.map((el) => (
          <div style={{ fontSize: "20px", marginTop: "8px" }} key={el.link}>
            <a href={el.link}>{el.name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Person;
