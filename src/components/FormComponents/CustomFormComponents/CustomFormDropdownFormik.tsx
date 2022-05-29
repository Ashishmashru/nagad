import {
  FormControl,
  MenuItem,
  FormLabel,
  Select,
  makeStyles,
} from "@mui/material";

import React from "react";
import "./CustomFormComponents.scss";

const CustomFormDropdownFormik = (props) => {
  const { type, label, placeholder, name } = props;

  return (
    <FormControl hiddenLabel={true} component="fieldset">
      <FormLabel component="label">{label}</FormLabel>
      <Select
        className="dropdown"
        type={type}
        placeholder={placeholder}
        variant="outlined"
        name={name}
        autoWidth={true}
      >
        <MenuItem>One</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CustomFormDropdownFormik;
