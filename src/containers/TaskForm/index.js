import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withStyles, Grid, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import styles from './styles';
import validate from './validate';
import renderTextField from '../../components/FormHelper/TextField';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log('data: ', data);
    const { taskActionCreators } = this.props;
    const { addTask } = taskActionCreators;
    const { title, description } = data;
    addTask(title, description);
  };

  required = (value) => {
    // console.log('value: ', value);
    let error = 'Vui lòng nhập username';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null;
    }
    return error;
  };

  minLength5 = (value) => {
    let error = null;
    if (value.length < 5) {
      error = 'Username phải dài từ 5 ký tự trở lên';
    }
    return error;
  };

  render() {
    // console.log('this.props: ', this.props);
    // console.log('props: ', this.props);
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      submitting,
      invalid,
    } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              name="title"
              id="title"
              component={renderTextField}
              label="Username"
              className={classes.textField}
              margin="normal"
              // validate={[this.required, this.minLength5]}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              name="description"
              id="description"
              component={renderTextField}
              label="Mô tả"
              className={classes.textField}
              margin="normal"
              multiline
              rowsMax={4}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={hideModal}
                >
                  Hủy Bỏ
                </Button>
              </Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={invalid || submitting}
              >
                Lưu Lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
