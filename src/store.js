import { createStore, compose } from 'redux';

export const toggleEasyMode = () => {
  return {
    type: 'TOGGLE_EASY_MODE',
  };
};

const reducer = (state = {}, action) => {
  if (action.type === 'TOGGLE_EASY_MODE') {
    return {
      isEasyMode: !state.isEasyMode,
    };
  }

  return state;
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const state = {
  isEasyMode: true,
};

export const store = createStore(reducer, state, enhancers);
