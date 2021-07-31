import { Box, Grid, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import React, { useEffect } from "react";

export default function RadioButton(props) {
  const { label, value, isChecked, handleChange } = props;
  const [selectedValue, setSelectedValue] = React.useState("a");

  useEffect(() => {}, [isChecked]);
  return (
    <Grid container direction="row" alignItems="center">
      <Radio
        checked={isChecked === value}
        onChange={handleChange}
        value={value}
        onClick={handleChange}
      />
      <Box fontSize={11}>{label}</Box>
    </Grid>
  );
}
