import axios from "axios";

export const postReview = async (value, attractionId, attractionName) => {
  const attraction = await axios.post(
    `/api/v1/attraction/review/${attractionId}`,
    {
      review: value,
      attractionName,
    }
  );
  return attraction;
};

export const postComment = async (text, attractionId, attractionName) => {
  const attraction = await axios.post(
    `/api/v1/attraction/comment/${attractionId}`,
    {
      commentBody: text,
      attractionName,
    }
  );
  return attraction;
};

export const putComment = async (
  text,
  attractionId,
  attractionName,
  commentId
) => {
  const attraction = await axios.put(
    `/api/v1/attraction/comment/${attractionId}`,
    {
      commentBody: text,
      attractionName,
      commentId,
    }
  );
  return attraction;
};

export const deleteComment = async (
  commentId,
  attractionId,
  attractionName
) => {
  console.log(commentId, attractionId, attractionName);
  const attraction = await axios.delete(
    `/api/v1/attraction/comment/${attractionId}/${commentId}`
  );
  return attraction;
};

export const getAttraction = async (xid) => {
  return await axios.get(`/api/v1/attraction/${xid}`);
};
