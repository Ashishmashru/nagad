import { Button } from "@mui/material";
import React from "react";

const FilledButton = ({ buttonName, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {buttonName}
    </Button>
  );
};

export default FilledButton;
