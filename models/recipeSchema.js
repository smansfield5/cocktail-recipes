const Schema = require('mongoose').Schema;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    ingredients: {type: String, required: true},
    
})