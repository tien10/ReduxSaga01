/* eslint-disable class-methods-use-this */
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskForm from '../../components/TaskForm/index';
import TaskList from '../../components/TaskList/index';
import * as taskActions from '../../actions/task';
import { STATUSES } from '../../constants/index';
import styles from './styles';

// const listTask = [
//   {
//     id: 1,
//     title: 'An ủi Hậu',
//     description: 'Tội nghiệp thằng bé',
//     status: 0,
//   },
//   {
//     id: 2,
//     title: 'Chửi Hậu',
//     description: 'Mê gái bỏ bạn',
//     status: 1,
//   },
//   {
//     id: 3,
//     title: 'Code nút Edit và Delete',
//     description: 'Xấu dã man con ngan',
//     status: 2,
//   },
// ];

class TaskBoard extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    open: false,
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          // vi du status co value la 1, se filter cac task co status la 1, in ra
          const taskFilterd = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList tasks={taskFilterd} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Thêm user
          {/* Thêm công việc */}
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { taskActionCreators: bindActionCreators(taskActions, dispatch) };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
