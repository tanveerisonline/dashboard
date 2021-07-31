import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Snapshot from "../views/ReviewManagement/Components/snapshot/index";
import AccessibleDrawer from "../views/ReviewManagement/Components/Drawer/AccessibleDrawer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // width: "100%",
    // height: "100%",
    marginLeft: "25px",
    marginTop: "25px",
  },
  tabs: {
    backgroundColor: "#e9e9ec",
  },
  tabItem: {
    // width: "188px",
    // height: "51px",
    borderRadius: "10px 10px 0px 0px",
    color: "white",
    fontWeight: "600",
    opacity: 1,
    backgroundColor: "#c2212a",
    "&.Mui-selected": {
      backgroundColor: "#fff",
      color: "#c2212a",
    },
  },

  drawer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function TabContainer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            background: "none",
          },
        }}
      >
        <Tab className={classes.tabItem} label="SNAPSHOT" {...a11yProps(0)} />
        <Tab className={classes.tabItem} label="BENCHMARK" {...a11yProps(1)} />
        <Button variant="outlined" className={classes.drawer}>
          <AccessibleDrawer />
        </Button>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Snapshot />
      </TabPanel>
      <TabPanel value={value} index={1}>
        This is second tab
      </TabPanel>
    </div>
  );
}
