import { InputLabel } from "@mui/material";
import React from "react";
import "./Label.scss";

const Label = ({ htmlFor, fieldName }) => {
  return (
    <InputLabel className="label" htmlFor={htmlFor}>
      {fieldName}
    </InputLabel>
  );
};

export default Label;
