const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    users:[{type: Schema.Types.ObjectId, ref: 'User'}],
    userName: {type: String},
    comment: {type: String},
    rating: {type: Number}
}, {
    timestamps: true,
})

const drinkSchema = new Schema({
    apiId: {type: String},
    users:[{type: Schema.Types.ObjectId, ref: 'User'}],
    name: {type: String, required: true},
    ingredients: [{type: String}],  
    image: {type: String},
    instructions: {type: String},
    comments: [commentSchema],
}, {
    timestamps: true,
})

module.exports = mongoose.model('Drink', drinkSchema);