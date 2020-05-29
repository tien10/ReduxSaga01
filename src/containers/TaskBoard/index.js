import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';

class TaskBoard extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <div className={classes.shape}>Mai</div>
                <div className={classes.shape}>Lan</div>
            </div>
        )
    }
}

export default withStyles(styles)(TaskBoard);
