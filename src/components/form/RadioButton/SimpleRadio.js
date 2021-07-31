import { Grid, makeStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.radio": {
      visibility: "hidden",
      width: -18,
      display: "none",
    },
    "& svg.MuiSvgIcon-root .MuiSvgIcon-fontSizeSmall":{
      fontSize :10
    }
  },
  label: {
    fontSize: 11,
    fontWeight: 400,
  },
}));

export default function RadioButton(props) {
  const classes = useStyles();
  const {
    label,
    value,
    isChecked,
    handleChange,
    additionalStyles,
    labelStyles,
    ...rest
  } = props;
  // const [selectedValue, setSelectedValue] = React.useState("a");

  useEffect(() => {}, [isChecked]);
  return (
    <Grid xs={12} container direction="row" alignItems="center">
      <Grid item className={classes.root}>
        <Radio
          checked={isChecked}
          // onChange={handleChange}
          value={value}
          onClick={handleChange}
          className={classes.root}
          style={{ ...additionalStyles }}
          size="small"
          {...rest}
        />
      </Grid>
      <Grid item className={classes.label} style={{ ...labelStyles }}>
        {label}
      </Grid>
    </Grid>
  );
}
