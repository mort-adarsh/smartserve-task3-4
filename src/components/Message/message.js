import React from "react";

const Message = ({ msg }) => {
  return (
    <ul
      style={{
        color: "red",
        display: "inline",
        fontSize: "10px",
        margin: "0px",
      }}
    >
      {msg.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
};

export default Message;
