const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');

//router.get('/', drinksCtrl.index);
router.get('/:id', drinksCtrl.show);

module.exports = router;