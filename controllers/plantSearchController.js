const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Plantsearch
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Plantsearch
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};