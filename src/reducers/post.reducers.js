import { FETCH_POSTS, FETCH_POSTS_ERR } from '../actions/action-types';

const initalState = {
  posts: null,
  isloading: true,
  err: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case FETCH_POSTS_ERR:
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
}
