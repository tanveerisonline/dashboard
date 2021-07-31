import React, { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    "& div.rdrMonthAndYearWrapper" : {
      maxWidth: 350,
    
    },
    "& div.rdrMonthAndYearPickers .select": {
      padding : 100
    }
  },
}));
export default function SimpleDateRangePicker(props) {
  const { selectedDateRange, selectedDate } = props;
  const classes = useStyles();
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const [state, setState] = useState([
    {
      startDate: new Date(), // new Date(),
      endDate: new Date(), //   new Date(),
      key: "selection",
    },
  ]);

  console.log(typeof new Date());

  const handleSelect = (item) => {
    setState([item.selection]);
    selectedDateRange(item);
    console.log(item);
  };

  useEffect(() => {
    {
      selectedDate && setState([selectedDate.selection]);
    }
  }, []);

  return (
    <div >
      <DateRange
        editableDateInputs={false}
        onChange={(item) => handleSelect(item)}
        // moveRangeOnFirstSelection={false}
        ranges={state}
        className={classes.root}
      />
    </div>
  );
}
