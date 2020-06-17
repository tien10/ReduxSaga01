// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import theme from '../../commons/Theme/index';
import configureStore from '../../redux/configureStore';
import TaskBoard from '../TaskBoard/index';
import styles from './styles';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

class App extends Component {
  render() {
    // console.log("props: ", this.props);
    // props cua withStyles
    // const { classes } = this.props;
    // classes la props cua withStyles
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
