const Drink = require('../../models/drink');
const fetch = require('node-fetch');

module.exports = {
   show,
}

async function show(req, res) {
    const drink = await Drink.findOne({apiId: req.params.id});
    if (!drink) {
        const drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.id}`).then((res) => res.json(drink))
        console.log(drink)
    }
    res.json(drink);
}