import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index.js';
import TaskList from '../../components/TaskList/index.js';

const listTask = [
  {
    id: 1,
    title: "An ủi Hậu",
    description: "Tội nghiệp thằng bé",
    status: 0
  },
  {
    id: 2,
    title: "Chửi Hậu",
    description: "Mê gái bỏ bạn",
    status: 1
  },
  {
    id: 3,
    title: "Code nút Edit và Delete",
    description: "Xấu dã man con ngan",
    status: 2
  }
];

class TaskBoard extends Component {

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map(status => {
            // vi du status co value la 1, se filter cac task co status la 1, in ra
            const taskFilterd = listTask.filter(task => task.status === status.value);
            return (
              <TaskList tasks={taskFilterd} status={status} key={status.value} />
            );
          })
        }
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard} >
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon />
          {/* Thêm user */}
          Thêm công việc
        </Button>
        {this.renderBoard()
        }
      </div>
    )
  }
}

export default withStyles(styles)(TaskBoard);
