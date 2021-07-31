import React from "react";
import PropTypes from "prop-types";
import MaterialBox from "@material-ui/core/Box";

const TabPanel = ({
  tabValue,
  currentValue,
  Component,
  componentProps,
  containerStyle,
}) => {
  return (
    tabValue === currentValue && (
      <MaterialBox  {...containerStyle}>
        <Component {...componentProps} />
      </MaterialBox>
    )
  );
};

TabPanel.prototypes = {
  Component: PropTypes.elementType.isRequired,
  tabValue: PropTypes.any.isRequired,
  currentValue: PropTypes.any.isRequired,
  containerStyle: PropTypes.object,
};

TabPanel.defaultProps = {};

export default TabPanel;
