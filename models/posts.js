const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    users:[{type: Schema.Types.ObjectId, ref: 'User'}],
    comment: [{type: String}],
    rating: {type: Number}
}, {
    timestamps: true,
})

module.exports = mongoose.model('post', postSchema);