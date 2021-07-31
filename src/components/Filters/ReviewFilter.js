import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import "./ReviewFilter.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 45,
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "70px",
    },
  },
  formControl: {
    display: "inline-flex",
    justifyContent: "center",
    height: 45,
    paddingLeft: "15px",
    borderRadius: 14,
    backgroundColor: "#fff",
    width: 200,
    [theme.breakpoints.down("md")]: {
      width: "175px",
    },
    [theme.breakpoints.down("sm")]: {
      border:"1px solid #000",
    },
  },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
}));

export default function ReviewFilter() {
  const classes = useStyles();
  const [review, setReview] = React.useState([]);
  const handleChange = (event) => {
    console.log(event);
    setReview(event.target.value);
  };
  useEffect(() => {
    console.log(review);
  }, [review]);
  return (
    <Grid className={classes.root} item xs={12}>
      <Typography className={classes.heading}>REVIEW SITES:</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>All</InputLabel>
        <Select
          multiple
          className={classes.selectAll}
          value={review}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => selected.join(",")}
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="" disabled>
            All
          </MenuItem>
          <Divider />
          <MenuItem className={classes.select} value="Apartments">
            <span className="apartments"></span>
            <span>Apartments</span>
          </MenuItem>
          <Divider />
          <MenuItem value="Apartment Guide">
            <span className="apartment-guide"></span>
            <span>Apartment Guide</span>
          </MenuItem>
          <Divider />
          <MenuItem value="ApartmentRatings">
            <span className="apartment-ratings"></span>
            <span>ApartmentRatings</span>
          </MenuItem>
          <Divider />
          <MenuItem value="Facebook">
            <span className="facebook"></span>
            <span>Facebook</span>
          </MenuItem>
          <Divider />
          <MenuItem value="Google">
            <span className="google"></span>
            <span>Google</span>
          </MenuItem>
          <Divider />
          <MenuItem value="Modern Message">
            <span className="modern-message"></span>
            <span>Modern Message</span>
          </MenuItem>
          <Divider />
          <MenuItem value="Rent">
            <span className="rent"></span>
            <span>Rent</span>
          </MenuItem>
          <Divider />
          <MenuItem value="Yellow Pages">
            <span className="yellow-pages"></span>
            <span>Yellow Pages</span>
          </MenuItem>
          <Divider />
          <MenuItem value="Yelp">
            <span className="yelp"></span>
            <span>Yelp</span>
          </MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}
