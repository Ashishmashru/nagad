import React, { useEffect } from "react";
import SingleRegistration from "../../components/SingleRegistration/SingleRegistration.tsx";
import DashSidebar from "../../components/DashSidebar/DashSidebar.tsx";
import { useAppSelector } from "../../redux/hooks.tsx";
import { Grid } from "@mui/material";

const Home = () => {
  const sideMenuBar = useAppSelector((state) => state.ui.sideMenuBar);

  return (
    <Grid container direction="row" spacing={4}>
      <Grid item> {sideMenuBar && <DashSidebar />}</Grid>
      <Grid item>
        <SingleRegistration />
      </Grid>
    </Grid>
  );
};

export default Home;
