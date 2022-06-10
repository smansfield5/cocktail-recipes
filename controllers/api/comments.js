const Drink = require('../../models/drink');

module.exports = {
    create,
    delete: deleteComment
}

async function create(req, res) {
    const drink = await Drink.findById(req.params.drinkId);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    drink.comments.push(req.body); 
    await drink.save();
    res.json(drink);
}

async function deleteComment(req, res) {
    const drink = await Drink.findOne({'comments._id': req.params.id});
    drink.comments.remove(req.params.id); 
    await drink.save();
    res.json(drink);
}