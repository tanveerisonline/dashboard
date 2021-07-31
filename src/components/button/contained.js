import React from "react";
import BaseButton from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
   root: {
    
  },
}));

const ContainedButton = (props) => {
  const classes = useStyles();

  const { variant,label, ...rest } = props;
  return <BaseButton variant="contained" color="primary" style={{fontSize:11, fontFamily:"Poppins" , fontWeight:'500'}} {...rest} >
    {label}
  </BaseButton>;
};

ContainedButton.propTypes = {
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  variant: PropTypes.string,
  color : PropTypes.string
};

export default ContainedButton;
