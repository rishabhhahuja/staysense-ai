const reviews = require("../data/reviews");

// GET ALL
const getReviews = (req, res) => {
  res.status(200).json(reviews);
};

// GET BY ID
const getReviewById = (req, res) => {
  const review = reviews.find(r => r.id == req.params.id);

  if (!review) {
    return res.status(404).json({
      message: "Review not found"
    });
  }

  res.status(200).json(review);
};

// POST
const createReview = (req, res) => {
  const { guest, rating, review } = req.body;

  if (!guest || !rating || !review) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const newReview = {
    id: reviews.length + 1,
    guest,
    rating,
    review
  };

  reviews.push(newReview);

  res.status(201).json(newReview);
};

// PUT
const updateReview = (req, res) => {

  const review = reviews.find(r => r.id == req.params.id);

  if (!review) {
    return res.status(404).json({
      message: "Review not found"
    });
  }

  review.guest = req.body.guest || review.guest;
  review.rating = req.body.rating || review.rating;
  review.review = req.body.review || review.review;

  res.status(200).json(review);
};

// DELETE
const deleteReview = (req, res) => {

  const index = reviews.findIndex(r => r.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      message: "Review not found"
    });
  }

  reviews.splice(index,1);

  res.status(204).send();
};

// SEARCH
const searchReviews = (req, res) => {

  const q = req.query.q?.toLowerCase() || "";

  const result = reviews.filter(r =>
    r.review.toLowerCase().includes(q)
  );

  res.status(200).json(result);
};

module.exports = {

  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews

};