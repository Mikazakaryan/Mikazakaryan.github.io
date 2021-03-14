import React from "react";

const Section = ({
  title,
  link,
  linkName,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          fontWeight: "bold",
        }}
      >
        <div>
          {title && `${title} `}
          {link && linkName && <a href={link}>{linkName}</a>}
        </div>
        {startDate && (
          <div>
            {startDate}
            {" - "}
            {endDate || "current"}
          </div>
        )}
      </div>
      <div
        style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
      >
        {description}
      </div>
    </div>
  );
};

export default Section;
