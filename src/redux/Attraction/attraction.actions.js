import {
  SETATTRACTIONSDETAILS,
  SETCOMMENTMODAL,
  SETCOMMENTCONTENT,
  SETDELETEMODAL,
} from "./attraction.types";

export const setAttractionDetails = (data) => {
  return {
    type: SETATTRACTIONSDETAILS,
    payload: data,
  };
};
export const toggleCommentModal = (data = null) => {
  return {
    type: SETCOMMENTMODAL,
    payload: data,
  };
};
export const setCommentContent = (data) => {
  return {
    type: SETCOMMENTCONTENT,
    payload: data,
  };
};
export const setDeleteModal = (data = null) => {
  return {
    type: SETDELETEMODAL,
    payload: data,
  };
};
