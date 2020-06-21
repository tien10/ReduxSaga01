import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import CloseIcon from '@material-ui/icons/Clear';
import { withStyles, Modal } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import styles from './styles';
import * as modalActions from '../../actions/modal';

class CommonModal extends Component {
  render() {
    const { open, classes, component, modalActionCreators, title } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

CommonModal.propTypes = {
  classes: PropTypes.object,
  component: PropTypes.object,
  open: PropTypes.bool,
  title: PropTypes.string,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
