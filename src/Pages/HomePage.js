import React from "react";
import TabContainer from "../components/TabContainer";
import Filter from "components/Filter";
import { Grid, Hidden } from "@material-ui/core";

const HomePage = () => {
  return (
    <Grid container className="home" xs={12}>
      <Grid item xs={12} md={9}>
        <TabContainer />
      </Grid>
      <Grid item md={3}>
        <Hidden smDown>
          <Filter />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HomePage;
