import React, { Component } from 'react';
import { withStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
          placeholder="Search..."
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};
export default withStyles(styles)(SearchBox);
