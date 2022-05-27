import { Button } from "@mui/material";
import React from "react";

const OutlinedButton = ({ buttonName, onClick, disabled }) => {
  return (
    <Button variant="outlined" onClick={onClick} disabled={disabled}>
      {buttonName}
    </Button>
  );
};

export default OutlinedButton;
