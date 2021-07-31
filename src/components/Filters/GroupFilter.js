import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 45,
    color: "#383e4c",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "70px",
    },
  },
  heading: {
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: 700,
    color: "#2b3b5c",
  },
  divider: {
    width: "210%",
    backgroundColor: "#6b6d82",
    [theme.breakpoints.down("md")]: {
      width: "185px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "210px",
      marginLeft:"0px",
    },
  },
}));
export default function GroupFilter() {
  const [value, setValue] = React.useState("months");
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid className={classes.root} item xs={12}>
      <FormControl component="fieldset">
        <Typography className={classes.heading}>GROUP BY:</Typography>
        <RadioGroup
          aria-label="group"
          name="group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="months" control={<Radio />} label="Months" />
          <Divider className={classes.divider} variant="middle" />
          <FormControlLabel
            value="quarters"
            control={<Radio />}
            label="Quarters"
          />
          <Divider className={classes.divider} variant="middle" />
          <FormControlLabel value="years" control={<Radio />} label="Years" />
          <Divider className={classes.divider} variant="middle" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
