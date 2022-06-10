const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');
const postsCtrl = require('../../controllers/api/drinks');

//router.get('/', drinksCtrl.index);
// GET /api/drinks/:id
router.get('/:id', drinksCtrl.show);

router.get('/:id', postsCtrl.getAll);

router.post('/:id', postsCtrl.create);

module.exports = router;