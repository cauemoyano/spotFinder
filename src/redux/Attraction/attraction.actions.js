import axios from "axios";
import { getAttraction } from "../../utils/attractionApis";
import {
  SETATTRACTIONSDETAILS,
  SETCOMMENTMODAL,
  SETCOMMENTCONTENT,
  SETDELETEMODAL,
  SETEDITCOMMENT,
  SETATTRACTIONUSERSDATA,
  SETATTRACTIONMAINDATA,
  SETLOADINGDATA,
} from "./attraction.types";

export const setAttractionDetails = (data) => {
  return {
    type: SETATTRACTIONSDETAILS,
    payload: data,
  };
};
export const setAttractionUsersData = (data) => {
  return {
    type: SETATTRACTIONUSERSDATA,
    payload: data,
  };
};
export const toggleCommentModal = (state = null) => {
  return function (dispatch) {
    if (state === false) {
      dispatch(setCommentContent(""));
      dispatch(dispatch({ type: SETEDITCOMMENT, payload: "" }));
    }
    dispatch({
      type: SETCOMMENTMODAL,
      payload: state,
    });
  };
};
export const setCommentContent = (data) => {
  return {
    type: SETCOMMENTCONTENT,
    payload: data,
  };
};
export const setDeleteModal = (data = null, id = null) => {
  return function (dispatch) {
    dispatch({ type: SETEDITCOMMENT, payload: id });
    dispatch({
      type: SETDELETEMODAL,
      payload: data,
    });
  };
};

export const setEditComment = (data = null, id = null) => {
  return function (dispatch) {
    dispatch(toggleCommentModal());
    dispatch(setCommentContent(data));
    dispatch({ type: SETEDITCOMMENT, payload: id });
  };
};

export const handleCommentSubmitted = (data) => {
  return function (dispatch) {
    dispatch(setAttractionUsersData(data));
    dispatch(toggleCommentModal());
    dispatch(setCommentContent(null));
    dispatch({ type: SETEDITCOMMENT, payload: null });
  };
};

export const getAttractionData = (xid) => {
  return async function (dispatch) {
    dispatch({ type: SETLOADINGDATA, payload: true });
    try {
      const mainData = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.REACT_APP_MAP_TOKEN}`
      );
      const usersData = await getAttraction(xid);
      dispatch({
        type: SETATTRACTIONMAINDATA,
        payload: mainData.data,
      });
      dispatch(setAttractionUsersData(usersData.data));
      dispatch({ type: SETLOADINGDATA, payload: false });
    } catch (error) {
      console.log(error);
    }
  };
};
