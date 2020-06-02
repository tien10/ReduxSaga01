import React, { Component } from 'react'
// import Button from '@material-ui/core/Button';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard/index.js';
import theme from '../../commons/Theme/index.js';

class App extends Component {
  render() {
    // console.log("props: ", this.props);
    // props cua withStyles
    // const { classes } = this.props;
    // classes la props cua withStyles
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard></TaskBoard>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
