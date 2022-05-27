import { Box, Tabs, Tab, Paper } from "@mui/material";
import React, { useState } from "react";
import BasicDetailsForm from "../BasicDetailsForm/BasicDetailsForm.tsx";
import FilledButton from "../FormComponents/Buttons/FilledButton.tsx";
import OutlinedButton from "../FormComponents/Buttons/OutlinedButton.tsx";
import "./SingleRegistration.scss";

const SingleRegistration = () => {
  const [pageNo, setPageNo] = useState(0);

  const backPageHandler = () => {
    setPageNo((pageNum) => pageNum - 1);
  };

  const nextPageHandler = () => {
    setPageNo((pageNum) => pageNum + 1);
  };

  return (
    <Paper elevation={3}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={0}>
          <Tab label="Basic Details" />
          <Tab label="Parent" />
          <Tab label="Advanced Details" />
          <Tab label="Documents" />
          <Tab label="Preview" />
        </Tabs>
      </Box>

      <BasicDetailsForm pageNo={pageNo} />

      <Box className="buttongroup" component="span">
        <OutlinedButton
          buttonName="BACK"
          onClick={backPageHandler}
          disabled={pageNo === 0}
        />
        <FilledButton
          buttonName={pageNo === 0 ? "NEXT" : "SAVE & NEXT"}
          onClick={nextPageHandler}
        />
      </Box>
    </Paper>
  );
};

export default SingleRegistration;
