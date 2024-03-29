import axios from "axios";
import { MovieAction, MovieType } from "./actions";
import { Dispatch } from "redux";
import { MOVIES_LIST, MOVIE_SEARCH } from "../../costants/endpoints";

export const getMoviesAsync = async (
  { order }: { order: string },
  dispatch: Dispatch<MovieAction>
) => {
  try {
    dispatch({type: MovieType.MOVIE_LOADING})
    const response = await axios.get(
      `${MOVIES_LIST}?${order ? `sortBy=${order}&sortOrder=desc&limit=8}` : ""}`
    );
    dispatch({
      type: MovieType.MOVIE_SUCCESS,
      payload: response.data.data,
      totalAmount: response.data.totalAmount,
    });
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error,
    });
  }
};

export const getMoviesbyFilter = async (
  { filterGenres }: { filterGenres: string },
  dispatch: Dispatch<MovieAction>
) => {
  try {
    dispatch({type: MovieType.MOVIE_LOADING})
    const response = await axios.get(
      `${MOVIES_LIST}?${
        filterGenres
          ? `searchBy=genres&filter=${filterGenres}&limit=8`
          : `&limit=8`
      }`
    );
    dispatch({
      type: MovieType.MOVIE_SUCCESS,
      payload: response.data.data,
      totalAmount: response.data.totalAmount,
    });
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error,
    });
  }
};

export const getMovieSearchAcync = async (
  { search, order, filterGenres }: { search: string; order: string; filterGenres: string },
  dispatch: Dispatch<MovieAction>
) => {
  try {
    dispatch({type: MovieType.MOVIE_LOADING})
    const response = await axios.get(
      `${MOVIE_SEARCH}?sortBy=${order}&sortOrder=desc&search=${search}&searchBy=title&filter=${filterGenres}`
    );
    dispatch({
      type: MovieType.MOVIE_SUCCESS,
      payload: response.data.data,
      totalAmount: response.data.totalAmount,
    });
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error,
    });
  }
};

export const getMovieDetailAcync = async (
  { id }: { id: number },
  dispatch: Dispatch<MovieAction>
) => {
  try {
    dispatch({type: MovieType.MOVIE_LOADING})
    const response = await axios.get(`${MOVIES_LIST}/${id}`);
    dispatch({
      type: MovieType.MOVIEDETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error,
    });
  }
};
 
export const getMovieUpdateAsync = async (
  dispatch: Dispatch<MovieAction>
) => {
  try {
    dispatch({type: MovieType.MOVIE_LOADING})
    const response = await axios.get(
      `${MOVIES_LIST}`
    );
    dispatch({
      type: MovieType.MOVIE_SUCCESS,
      payload: response.data.data,
      totalAmount: response.data.totalAmount,
    });
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error,
    });
  }
};

export const postMovieAsync = async (
  data: any, setShowSuccessModal: any,
  dispatch: Dispatch<MovieAction>
) => {
  try {
    dispatch({type: MovieType.MOVIE_LOADING})
    const response = await axios.post(MOVIES_LIST, data);
    setShowSuccessModal(true);
    dispatch({
      type: MovieType.ADD_MOVIE,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error,
    });
  }
};