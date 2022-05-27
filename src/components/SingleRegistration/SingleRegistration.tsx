import { Grid, Box, Tabs, Tab } from "@mui/material";
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
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={0}>
            <Tab label="Basic Details" />
            <Tab label="Parent" />
            <Tab label="Advanced Details" />
            <Tab label="Documents" />
            <Tab label="Preview" />
          </Tabs>
        </Box>
      </Grid>
      <Grid item>
        <BasicDetailsForm pageNo={pageNo} />
      </Grid>

      <Grid item>
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
      </Grid>
    </Grid>
  );
};

export default SingleRegistration;
