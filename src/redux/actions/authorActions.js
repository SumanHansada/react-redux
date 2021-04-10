import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall } from './apiStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      const authors = await authorApi.getAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      throw error;
    }
  };
}
