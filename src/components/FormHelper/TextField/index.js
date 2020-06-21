import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...input}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...custom}
  />
);

renderTextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};

export default renderTextField;
