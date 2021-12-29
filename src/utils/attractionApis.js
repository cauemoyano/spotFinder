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
