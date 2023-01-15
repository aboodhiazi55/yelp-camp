const express = require('express');
const router = express.Router({ mergeParams: true });

const reviews = require('../controllers/reviews')
const Campground = require('../models/campground');
const Review = require('../models/review')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')

const catchAsync = require('../utils/catchAsync');
const review = require('../models/review');


// for review route
router.post('/', validateReview, isLoggedIn, catchAsync(reviews.createReview))
// for delete review 
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;