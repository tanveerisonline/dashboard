import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 11,
    maxWidth: 150,

    "& span.MuiTypography-root .MuiListItemText-primary .MuiTypography-body1 .MuiTypography-displayBlock":
      {
        fontSize: 1,
      },
      "& li.MuiListItem-root.Mui-selected":{
        backgroundColor : 'red'
      }
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 4,
  },
  menuItem: {
    marginBottom: -12,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      minHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,

      width: 250,
    },
  },
};

export default function MultipleSelect(props) {
  const {
    options,
    id,
    labelName,
    selectedValues,
    placeHolder,
    preSelected,
    ...rest
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [valueSelected, setValueSelected] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target);
    setValueSelected(event.target.value);
    selectedValues(event.target.value);
  };

  useEffect(() => {
    if (preSelected != null) {
      setValueSelected(preSelected);
    }
  }, []);
  console.log(valueSelected);
  return (
    <div className={classes.root}>
      <Select
        labelId={id}
        id={id}
        multiple
        value={valueSelected}
        onChange={handleChange}
        renderValue={(selected) => {
          return options?.map((item) => {
            if (selected.includes(item.id)) {
              if (selected.length > 1) {
                return `${item.value},`;
              }
              return `${item.value}`;
            }
          });

          //selected.join(", ");
        }}
        className={classes.root}
        MenuProps={MenuProps}
        {...rest}
      >
        {options?.map((item) => (
          <MenuItem key={item.id} value={item.id} className={classes.menuItem}>
            <Checkbox
              size="small"
              checked={valueSelected?.includes(item?.id.toString())}
              style={{
                height: 3,
                width: 4,
              }}
            />
            <Typography className={classes.text}>{item.value}</Typography>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

MultipleSelect.propTypes = {};

MultipleSelect.defaultProps = {};
