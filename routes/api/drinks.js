const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');

//router.get('/', drinksCtrl.index);
router.get('/detail/:idDrink', drinksCtrl.show);

module.exports = router;