import {
  SETATTRACTIONSDETAILS,
  SETCOMMENTMODAL,
  SETCOMMENTCONTENT,
  SETDELETEMODAL,
} from "./attraction.types";

const INITIAL_STATE = {
  commentModal: false,
  commentContent: "",
  attractionDetails: null,
  deleteModal: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETATTRACTIONSDETAILS:
      return {
        ...state,
        attractionDetails: action.payload,
      };

    case SETCOMMENTMODAL:
      return {
        ...state,
        commentModal: action.payload ? action.payload : !state.commentModal,
      };

    case SETCOMMENTCONTENT:
      return {
        ...state,
        commentContent: action.payload,
      };

    case SETDELETEMODAL:
      return {
        ...state,
        deleteModal: action.payload ? action.payload : !state.deleteModal,
      };

    default:
      return state;
  }
};

export default reducer;
