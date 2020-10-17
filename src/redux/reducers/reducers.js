import { combineReducers } from "redux";
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  productos: {
    isFetching: true,
    items: [],
  },
};

function productos(
  state = {
    isFetching: false,
    items: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.products,
      });
    default:
      return state;
  }
}

function fetchProductos(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        productos: productos(state[action.category], action),
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  fetchProductos,
});

export default rootReducer;
