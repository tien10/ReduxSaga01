import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, Modal, Grid, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.modal}>
          <form>
            <Grid container>
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
                      onClick={onClose}
                    >
                      Hủy Bỏ
                    </Button>
                  </Box>
                  <Button variant="contained" color="primary">
                    Lưu Lại
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
