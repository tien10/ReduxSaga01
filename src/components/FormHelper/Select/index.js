import React from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  FormHelperText,
  FormControl,
  InputLabel,
  withStyles,
} from '@material-ui/core';
import styles from '../../../containers/TaskForm/styles';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

renderFromHelper.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.bool,
};

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...custom}
      inputProps={{
        name: 'age',
        id: 'age-native-simple',
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  input: PropTypes.object,
  classes: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.array,
};

export default withStyles(styles)(renderSelectField);
