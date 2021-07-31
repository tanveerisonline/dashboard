import React from "react";
import DateFilter from "./Filters/DateFilter";
import ReviewFilter from "./Filters/ReviewFilter";
import PortfolioFilter from "./Filters/PortfolioFilter";
import GroupFilter from "./Filters/GroupFilter";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FilterImage2 from "./FilterImage2.png";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./Filter.css";
import FilterTitle from "./Filters/FilterTitle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const queryString = require("query-string");
const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },

  Dbtn: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    marginLeft: 45,
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      width: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "70px",
    },
    background: "#0da9de",
    marginTop: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  downBtn: {
    marginLeft: 2,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  divider: {
    backgroundColor: "#6b6d82",
    width: "78%",
    marginLeft: "45px",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      width: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft:"40px",
      width:"80%"
    },
  },
  apply: {
    marginLeft: 0,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  btn: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    fontSize: "12px",
    justifyContent: "center",
    alignItems: "center",
    background: "#7bb42d",
    marginTop: 18,
    borderRadius: 10,
    marginLeft: 45,
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      width: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "70px",
    },
  },
  filterImg: {
    height: 20,
    width: 20,
  },
  resetMain: {
    width: "64%",
    height: "40px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#8f95a3",
    marginTop: 18,
    borderRadius: 10,
    marginLeft: 45,
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      width: "190px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "70px",
    },
  },
  resetText: {
    marginLeft: 0,
    fontSize: 13,
    color: "#fff",
    fontWeight: 600,
  },
  formControl: {
    display: "inline-flex",
    justifyContent: "center",
    height: 40,
    paddingLeft: "15px",
    borderRadius: 14,
    backgroundColor: "#fff",
    width: 208,
    marginLeft: "45px",
    [theme.breakpoints.down("md")]: {
      width: "190px",
      marginLeft: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "70px",
      border:"1px solid #000",
      
    },
  },
  rightIcon: {
    marginLeft: 12,
  },
}));
const Filter = () => {
  const classes = useStyles();
  const [review, setReview] = React.useState("");
  const [filterData, setFilterData] = React.useState({
    startDate: null,
    endDate: null,
  });
  const { startDate, endDate } = filterData;
  const changeDateFormat = (date) => {
    let newDate = new Date(date);
    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1;
    let yyyy = newDate.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  };
  const handleStartDateChange = (date) => {
    setFilterData({ ...filterData, startDate: date });
  };
  const handleEndDateChange = (date) => {
    setFilterData({ ...filterData, endDate: date });
  };
  const handleChange = (event) => {
    setReview(event.target.value);
  };
  const filterDataSubmit = (e) => {
    e.preventDefault();

    let formatedStartDate = changeDateFormat(filterData.startDate);
    let formatedEndDate = changeDateFormat(filterData.endDate);

    const stringified = queryString.stringify({
      startDate: formatedStartDate,
      endDate: formatedEndDate,
    });
    // console.log(stringified);
    document.location.search = stringified;
    // console.log(document.location.search);
    // console.log(filterData);
  };
  const resetHandler = () => {
    // const stringified = querstringifyyString.(null);
    document.location.search = "";
  };

  return (
    <Grid container className="filter">
      <FilterTitle />
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        handleChange={handleStartDateChange}
        handleChange2={handleEndDateChange}
      />
      <Divider className={classes.divider} variant="middle" />
      <ReviewFilter />
      <Divider className={classes.divider} variant="middle" />
      <PortfolioFilter />
      <Divider className={classes.divider} variant="middle" />
      <GroupFilter />
      {/* / */}
      <Button
        className={classes.btn}
        // onClick={(e) => filterDataSubmit(e, filterData)}
        onClick={filterDataSubmit}
        // type="submit"
        variant="contained"
        color="secondary"
        startIcon={
          <img src={FilterImage2} alt="Img" className={classes.filterImg} />
        }
        endIcon={<KeyboardArrowRightIcon className={classes.rightIcon} />}
      >
        <Typography className={classes.apply}>APPLY FILTER</Typography>
      </Button>
      <Button
        className={classes.resetMain}
        onClick={resetHandler}
        type="submit"
        variant="contained"
        // marginTop="10"
        color="primary"
        endIcon={<KeyboardArrowRightIcon className={classes.rightIcon} />}
      >
        <Typography className={classes.resetText}>RESET</Typography>
      </Button>
      <Button
        className={classes.Dbtn}
        onClick={() => console.log("you clicked APPLY button")}
        type="submit"
        // color="main"
        variant="contained"
        startIcon={<SystemUpdateAltOutlinedIcon />}
      >
        <Typography className={classes.downBtn}>DOWNLOAD DATA</Typography>
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          value={review}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="" disabled>
            All
          </MenuItem>
          <Divider />
          <MenuItem className={classes.select} value={1}>
            <span className="apartments"></span>
            <span>Apartments</span>
          </MenuItem>
          <Divider />
          <MenuItem value={2}>
            <span className="apartment-guide"></span>
            <span>Apartment Guide</span>
          </MenuItem>
          <Divider />
          <MenuItem value={3}>
            <span className="apartment-ratings"></span>
            <span>ApartmentRatings</span>
          </MenuItem>
          <Divider />
          <MenuItem value={4}>
            <span className="facebook"></span>
            <span>Facebook</span>
          </MenuItem>
          <Divider />
          <MenuItem value={5}>
            <span className="google"></span>
            <span>Google</span>
          </MenuItem>
          <Divider />
          <MenuItem value={6}>
            <span className="modern-message"></span>
            <span>Modern Message</span>
          </MenuItem>
          <Divider />
          <MenuItem value={7}>
            <span className="rent"></span>
            <span>Rent</span>
          </MenuItem>
          <Divider />
          <MenuItem value={8}>
            <span className="yellow-pages"></span>
            <span>Yellow Pages</span>
          </MenuItem>
          <Divider />
          <MenuItem value={9}>
            <span className="yelp"></span>
            <span>Yelp</span>
          </MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};
export default Filter;
