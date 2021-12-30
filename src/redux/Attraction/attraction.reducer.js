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

const INITIAL_STATE = {
  attractionMainData: null,
  attractionUsersData: null,
  commentModal: false,
  commentContent: "",
  attractionDetails: null,
  deleteModal: false,
  editComment: null,
  loadingData: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETATTRACTIONMAINDATA:
      return {
        ...state,
        attractionMainData: action.payload,
      };
    case SETATTRACTIONSDETAILS:
      return {
        ...state,
        attractionDetails: action.payload,
      };
    case SETATTRACTIONUSERSDATA:
      return {
        ...state,
        attractionUsersData: action.payload,
      };

    case SETCOMMENTMODAL:
      return {
        ...state,
        commentModal:
          action.payload === false ? action.payload : !state.commentModal,
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

    case SETEDITCOMMENT:
      return {
        ...state,
        editComment: action.payload ? action.payload : null,
      };
    case SETLOADINGDATA:
      return {
        ...state,
        loadingData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
