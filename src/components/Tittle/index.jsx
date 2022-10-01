import React from "react";
import "./Title.styles.css";

const Tittle = ({ title, sub_title }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="sub_title">
        <span>{sub_title}</span>
      </p>
    </div>
  );
};

export default Tittle;
