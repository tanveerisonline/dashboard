import React, { useMemo } from "react";
import PropTypes from "prop-types";
import MaterialTabs from "@material-ui/core/Tabs";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import * as tabBarUtils from "./utils";
import { makeStyles } from "@material-ui/styles";
export { tabBarUtils };

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#000",
    // fontWeight: "bold",
    marginLeft: 0,
    maxWidth: "none",
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
}));

const TabBar = (props) => {
  const [currentTab, setCurrentTab] = React.useState(props.defaultValue);
  const {
    indicatorColor,
    textColor,
    ariaLabel,
    onChange = setCurrentTab,
    value = currentTab,
    tabs,
    children,
    TabComponent,
    classes,
    mainLabel,
    orientation,
  } = props;

  const handleTabChange = (event, newValue) => {
    onChange(newValue);
  };
  const style = useStyles();

  const tabItems = useMemo(() => {
    const mainTabs = [];
    if (mainLabel) {
      mainTabs.push(
        <Tab
          label={mainLabel}
          value={"main-item"}
          key={"main-item"}
          component={TabComponent}
          disabled={true}
          wrapped={true}
          className={style.root}
          style={{
            backgroundColor: "#ffffff",
            fontFamily: "Poppins",
            fontSize: 12,
            fontWeight: "700",
          }}
        />
      );
    }
    const tabItems = tabs.map(
      ({ label, value, disabled = false, tabProps = {} }, index) => (
        <Tab
          label={label}
          value={value}
          disabled={disabled}
          key={index}
          component={TabComponent}
          classes={classes}
          {...tabProps}
          {...a11yProps(index)}
        />
      )
    );
    return [mainTabs, ...tabItems];
  }, [tabs, TabComponent, classes, mainLabel]);

  const tabPanels = useMemo(
    () =>
      tabs.map(({ Component, componentProps, value: tabValue }, index) => (
        <TabPanel
          Component={Component}
          componentProps={componentProps}
          currentValue={value}
          tabValue={tabValue}
          key={index}
        />
      )),
    [tabs, value]
  );

  return (
    <React.Fragment>
      <MaterialTabs
        value={value}
        indicatorColor={indicatorColor}
        textColor={textColor}
        onChange={handleTabChange}
        aria-label={ariaLabel}
        orientation={orientation}
      >
        {tabItems}
      </MaterialTabs>
      {tabPanels}
    </React.Fragment>
  );
};

TabBar.propTypes = {
  indicatorColor: PropTypes.oneOf(["primary", "secondary"]),
  textColor: PropTypes.oneOf(["primary", "secondary", "inherit"]),
  ariaLabel: PropTypes.string,
  defaultValue: PropTypes.any,
  tabs: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.node.isRequired,
      value: PropTypes.any.isRequired,
      Component: PropTypes.elementType.isRequired,
      componentProps: PropTypes.object,
      tabProps: PropTypes.object,
    })
  ),
};

TabBar.defaultProps = {
  indicatorColor: "primary",
  textColor: "inherit",
  ariaLabel: "tab bar",
  defaultValue: false,
  tabs: [],
  orientation: "horizontal",
};

export default TabBar;
