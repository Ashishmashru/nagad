import { Input } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import "./TextField.css";

const TextField = ({ type, id, placeholder, name }) => {
  return (
    <Input
      className="textfield"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default TextField;
