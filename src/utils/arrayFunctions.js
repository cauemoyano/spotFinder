export const getAttractionAverageReview = (reviews) => {
  const total = reviews.reduce(
    (acc, review) => (acc += parseFloat(review.grade)),
    0
  );
  return total / reviews.length;
};

export const getUserComments = (comments, userId) => {
  return comments.filter((comment) => comment.userId === userId);
};

export const getOtherUsersComments = (comments, userId) => {
  return comments.filter((comment) => comment.userId !== userId);
};

export const getUserReview = (reviews, userId) => {
  return reviews.find((review) => review.userId === userId);
};
