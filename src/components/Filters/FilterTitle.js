import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "./FilterTitle.css";
const useStyles = makeStyles((theme) => ({
  filterTitle: {
    marginLeft: "10px",
    fontWeight: 800,
    color: "#383e4c",
    fontSize: "15px",
  },
}));
const FilterTitle = () => {
  const classes = useStyles();

  return (
    <>
      <div className="filter-inner">
        <i className="fas fa-filter"></i>
        <Typography className={classes.filterTitle}>Filters</Typography>
      </div>
    </>
  );
};

export default FilterTitle;
