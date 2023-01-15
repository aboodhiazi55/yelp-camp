const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync')
const campgrounds = require('../controllers/campgrounds')
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })


// for find and show all camp 
router.get('/', catchAsync(campgrounds.index));

// for render the page new form camp 
router.get('/new', isLoggedIn, campgrounds.newForm);

// for create new camp
router.post('/', isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))



// for show the page of single camp and displaying the reviews
router.get('/:id', catchAsync(campgrounds.showCampground));

// for edit form  the camp
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));


// for update campground
router.put('/:id', isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground));

// for delete campground
router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampgrounds));

module.exports = router;