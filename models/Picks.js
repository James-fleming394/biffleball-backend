const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PicksSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        week: { type: Number, required: true, unique: true },
        team: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Picks", PicksSchema);