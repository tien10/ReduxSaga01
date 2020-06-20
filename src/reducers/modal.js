// constants -> actions -> reducers (modal.js) -> reducers (index.js) -> containers
import * as types from '../constants/modal';

const initialState = {
  showModal: false,
  component: null,
  title: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        // return về state cũ
        ...state,
        showModal: true,
      };
    }
    case types.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
      };
    }
    case types.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    }
    case types.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    }
    default:
      return state;
  }
};

export default reducer;
