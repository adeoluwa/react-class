import { FETCH_POSTS, FETCH_POSTS_ERR } from './action-types';
import axios from 'axios';

export function getPosts() {
  return function (dispatch) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        return dispatch({
          type: FETCH_POSTS,
          payload: data,
        });
      })
      .catch((err) => {
        return dispatch({
          type: FETCH_POSTS_ERR,
          payload: true,
        });
      });
  };
}
