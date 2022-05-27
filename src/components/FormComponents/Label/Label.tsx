import TextLabel from "../Label/LabelStyles.ts";
import React from "react";
import "./LabelStyles.ts";

const Label = ({ htmlFor, fieldName }) => {
  return (
    <TextLabel className="label" htmlFor={htmlFor}>
      {fieldName}
    </TextLabel>
  );
};

export default Label;
