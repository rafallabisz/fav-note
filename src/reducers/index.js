import {
  ADD_ITEM,
  REMOVE_ITEM,
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
} from 'actions';

const initialState = {
  userID: '5d40a5089f4d1e2edcbdd1d2',
  isLoading: false,
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducers;
