import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const { label, data, selectedValue, defaultValue, ...rest } = props;
  const classes = useStyles();
  const [value, setvalue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setvalue(event.target.value);
    selectedValue(event.target.value);
  };
  return (
    <div>
      <Select
        labelId={label}
        id="select"
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {data?.map((item) => (
          <MenuItem value={item.id}>{item.value}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
SimpleSelect.propTypes = {};

SimpleSelect.defaultProps = {};
