import { USERINFO } from "./user.types";

export const setUserInfo = (data) => {
  return {
    type: USERINFO,
    payload: data,
  };
};
