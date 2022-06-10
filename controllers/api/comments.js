const Drink = require('../../models/drink');

module.exports = {
    create
}

async function create(req, res) {
    const drink = await Drink.findById(req.params.drinkId);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    drink.comments.push(req.body); 
    await drink.save();
    res.json(drink);
}