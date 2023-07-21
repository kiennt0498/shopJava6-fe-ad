import { toast } from "react-toastify";
import CategoryService from "../../services/CategoryService";
import {
  CATEGORIES_SET,
  CATEGORIES_STATE_CLEAR,
  CATEGORY_SET,
  COMMON_LOADING_SET,
} from "./actiontypes";

const service = new CategoryService();

export const insterCategory = (category, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.insertCategory(category);

    if (res.status === 201) {
      dispatch({
        type: CATEGORY_SET,
        payload: res.data,
      });
      dispatch({
        type: COMMON_LOADING_SET,
        payload: false,
      });
      toast.success("Save Done");
      navigate("/category/list");
    }
  } catch (error) {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: false,
    });
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};

export const getListCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.getCategory();

    if (res.status === 200) {
      dispatch({
        type: CATEGORIES_SET,
        payload: res.data,
      });
      dispatch({
        type: COMMON_LOADING_SET,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: false,
    });
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};

export const clearList = () => async (dispatch) => {
  dispatch({ type: CATEGORIES_STATE_CLEAR });
};
