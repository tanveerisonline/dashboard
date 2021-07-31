import React from "react";
import PropTypes from "prop-types";
import MaterialTab from "@material-ui/core/Tab";

const Tab = ({ label, wrapped, disabled, classes, ...rest }) => {
  return (
    <MaterialTab
      label={label}
      wrapped={wrapped}
      disabled={disabled}
      className={classes && classes.tabs}
      {...rest}
    />
  );
};

Tab.propTypes = {
  label: PropTypes.node.isRequired,
  wrapped: PropTypes.bool,
  disabled: PropTypes.bool,
};

Tab.defaultProps = {
  wrapped: false,
  disabled: false,
};

export default Tab;
