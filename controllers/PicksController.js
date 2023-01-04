const Picks = require('../models/Picks');

// Picks

const getPicks = async (req, res) => {
    try {
        const picks = await Picks.find();
        res.send(picks)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createPick = async (req, res) => {
    try {
        const picks = await Picks.create(req.body)
        res.send(picks);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getPicks,
    createPick
}