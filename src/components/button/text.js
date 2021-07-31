import React from "react";
import PropTypes from "prop-types";
import BaseButton from "@material-ui/core/Button";


const TextButton = (props) => {
  const { variant,label, ...rest } = props;
  return <BaseButton color="primary" {...rest} >
    {label}
  </BaseButton>;
};

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  variant: PropTypes.string,
};

export default TextButton;
