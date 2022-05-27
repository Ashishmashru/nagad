import { MenuItem, TextField } from "@mui/material";
import React from "react";
import "./DropDown.scss";

const DropDown = ({ options }) => {
  return (
    <TextField
      className="dropdown"
      select
      placeholder="Please Select"
      variant="outlined"
      value="Please Select"
    >
      {options.map((option) => {
        console.log(option);
        return (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default DropDown;
