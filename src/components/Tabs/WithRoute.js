import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  child: {
    minHeight: window.innerHeight - 100,
    borderTopLeftRadius: 0,
    backgroundColor: "#F5F5F5",
    // textTransform : "uppercase"
  },
  tabRoot: {
    // color: "black",
    // textTransform: "uppercase",
    "& span.MuiTab-wrapper": {
      // textTransform: "uppercase",
      // fontSize: 11,
      // fontWeight: "bold",
    },
    indicator: {
      backgroundColor: 'white',
    },
  },
}));

export default function WithRoute({
  data,
  redirectTo,
  preUrl,
  postUrl,
  childBgColor,
  elevation,
}) {
  let navigate = useNavigate();

  useEffect(() => {
    location.pathname == preUrl && redirectTo && navigate(`${data[0]?.value}/`);
  }, [redirectTo]);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(location.pathname);

  return (
    <div>
      <div>
        <Tabs
          value={location.pathname}
          onChange={handleChange}
          className={classes.tabRoot}
          indicatorColor="primary"
        >
          {data.map((items) => {
            return (
              <Tab
                label={items.label}
                value={`${preUrl}/${items.value}/`}
                component={Link}
                to={`${preUrl}/${items.value}/${postUrl}`}
              />
            );
          })}
        </Tabs>
      </div>
      <Paper className={classes.child} elevation={elevation}>
        <Outlet />
      </Paper>
    </div>
  );
}
