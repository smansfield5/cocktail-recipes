const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

// All routes start with /api

router.post('/drinks/:drinkId/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);

module.exports = router;