import React from 'react';
import PropTypes from 'prop-types';
import { Rating as MURating, FormControlLabel, FormControl, FormLabel, FormHelperText } from '@material-ui/core';
import { wrapperProps } from '../CheckboxField/multiple-choice-list.js.js.js.js';
import { makeStyles } from '@material-ui/core/styles';
import {meta,input} from "components/forms/prop-types-templates"
import useFieldApi from "../ArrayField/node_modules/components/forms/hooks/use-field-api";
import { validationError } from "../ArrayField/node_modules/components/forms/utils/helpers";
import FormFieldGrid from "../ArrayField/node_modules/components/forms/hoc/form-field-grid";

const useStyles = makeStyles(() => ({
  grid: {
    '&:first-child': {
      marginTop: 8
    }
  }
}));

const RatingOption = ({ name, option, isDisabled, isReadOnly, FormControlLabelProps, RatingProps: { inputProps, ...RatingProps }, ...props }) => {
  const { input } = useFieldApi({ name, type: 'Rating', value: option.value });
  return (
    <FormControlLabel
      key={`${name}-${option.value}`}
      control={
        <MURating
          {...input}
          name={name}
          readOnly={isDisabled || isReadOnly}
          onChange={() => input.onChange(option.value)}
          inputProps={{
            readOnly: isReadOnly,
            ...inputProps
          }}
          {...RatingProps}
        />
      }
      label={option.label}
      {...FormControlLabelProps}
      {...props}
    />
  );
};

RatingOption.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.shape({ label: PropTypes.node.isRequired, value: PropTypes.any.isRequired }).isRequired,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  FormControlLabelProps: PropTypes.object,
  RatingProps: PropTypes.object
};

const Rating = ({ name, ...props }) => {
  const {
    options,
    isDisabled,
    label,
    isRequired,
    helperText,
    description,
    isReadOnly,
    meta,
    validateOnMount,
    FormFieldGridProps,
    FormControlProps,
    FormLabelProps,
    FormHelperTextProps,
    ...rest
  } = useFieldApi({
    ...props,
    name,
    type: 'Rating'
  });
  const classes = useStyles();
  const invalid = validationError(meta, validateOnMount);
  const text = invalid || ((meta.touched || validateOnMount) && meta.warning) || helperText || description;
  return (
    <FormFieldGrid className={classes.grid} {...FormFieldGridProps}>
      <FormControl required={isRequired} error={!!invalid} component="fieldset" {...FormControlProps}>
        <FormLabel component="legend" {...FormLabelProps}>
          {label}
        </FormLabel>
        {options.map((option) => (
          <RatingOption key={option.value} name={name} option={option} isDisabled={isDisabled} isReadOnly={isReadOnly} {...rest} />
        ))}
        {text && <FormHelperText {...FormHelperTextProps}>{text}</FormHelperText>}
      </FormControl>
    </FormFieldGrid>
  );
};

Rating.propTypes = {
  ...wrapperProps,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.node
    })
  ),
  label: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  description: PropTypes.node,
  FormFieldGridProps: PropTypes.object,
  FormControlProps: PropTypes.object,
  FormControlLabelProps: PropTypes.object,
  RatingProps: PropTypes.object,
  FormLabelProps: PropTypes.object,
  FormHelperTextProps: PropTypes.object
};

Rating.defaultProps = {
  options: [],
  FormFieldGridProps: {},
  FormControlProps: {},
  FormControlLabelProps: {},
  RatingProps: {},
  FormLabelProps: {},
  FormHelperTextProps: {}
};

export default Rating;