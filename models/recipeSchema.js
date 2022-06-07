const { default: mongoose } = require('mongoose');

const Schema = require('mongoose').Schema;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    ingredients: {type: String, required: true},
    
})

module.exports = mongoose.model('Recipe', recipeSchema);