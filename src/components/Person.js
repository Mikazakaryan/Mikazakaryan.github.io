import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Notification from "./Notification";

const Person = ({ fullName, email, phone, links = [] }) => {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Notification
        text="Copied To Clipboard"
        isOpen={copied}
        onHide={() => setCopied(false)}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "40px",
        }}
      >
        <div style={{ fontSize: "56px", fontWeight: "bold" }}>{fullName}</div>
        <CopyToClipboard text={email} onCopy={() => setCopied(true)}>
          <div
            style={{ cursor: "pointer", fontSize: "20px", marginTop: "8px" }}
          >
            E-mail: {email}{" "}
            <span style={{ fontSize: "12px", color: "gray" }}>
              click to copy
            </span>
          </div>
        </CopyToClipboard>
        <CopyToClipboard
          text={phone.split(" ").join("")}
          onCopy={() => setCopied(true)}
        >
          <div
            style={{ cursor: "pointer", fontSize: "20px", marginTop: "8px" }}
          >
            Phone: {phone}{" "}
            <span style={{ fontSize: "12px", color: "gray" }}>
              click to copy
            </span>
          </div>
        </CopyToClipboard>
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
