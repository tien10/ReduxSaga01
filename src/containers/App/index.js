import React, { Component } from 'react'
import styles from './styles.js'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Saga</h1>
        <Button variant="contained" color="primary">Đăng Nhập</Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
