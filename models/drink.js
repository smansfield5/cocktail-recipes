const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    apiId: {type: String},
    users:[{type: Schema.Types.ObjectId, ref: 'User'}],
    name: {type: String, required: true},
    ingredients: [{type: String}],  
}, {
    timestamps: true,
})

module.exports = mongoose.model('Drink', drinkSchema);