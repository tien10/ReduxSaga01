import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withStyles, Grid, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import styles from './styles';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log('data: ', data);
  };

  render() {
    // console.log('props: ', this.props);
    const { classes, modalActionCreators, handleSubmit } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field name="title" component="input" />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="standard-name"
              label="Username"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Mô tả"
              multiline
              rowsMax={4}
              className={classes.textField}
              margin="normal"
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
              <Button variant="contained" color="primary" type="submit">
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
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return { modalActionCreators: bindActionCreators(modalActions, dispatch) };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
