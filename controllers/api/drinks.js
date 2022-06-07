const Drink = require('../../models/drink');

module.exports = {
    //index,
    show,
}

async function show(req, res) {
    const drink = await Drink.findById(req.params.id);
    res.json(drink);
}