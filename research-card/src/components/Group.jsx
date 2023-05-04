import * as React from "react";
import doneFill0Wght400Grad0Opsz from "../assets/doneFill0Wght400Grad0Opsz.svg";
const Group = (props) => {
  return (
    <div
      className={props.className || ""}
      style={{
        fontSize: "1.25rem",
        color: "#fbfbf8",
        lineHeight: "24px",
        fontFamily: "Inter, Arial",
        fontWeight: "600",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        ...props.style,
      }}
    >
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: "#38a98e",
          border: "2px solid #fbfbf8",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          alignSelf: "flex-start",
          flexBasis: "100%",
          paddingLeft: "14px",
          paddingBottom: "1px",
        }}
      >
        <img
          style={{
            borderRadius: "5px",
            border: "2px solid #fbfbf8",
            width: "30px",
            height: "30px",
            alignSelf: "center",
            objectFit: "cover",
          }}
          src={props.doneFill0Wght400Grad0Opsz || doneFill0Wght400Grad0Opsz}
        />
        <span
          style={{
            alignSelf: "center",
            marginLeft: "13px",
            marginTop: "3px",
          }}
        >
          {props.policyOne || "Policy One"}
        </span>
      </div>
    </div>
  );
};
export default Group;
