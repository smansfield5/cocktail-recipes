const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');

//router.get('/', drinksCtrl.index);
// GET /api/drinks/:id
router.get('/:id', drinksCtrl.show);

module.exports = router;