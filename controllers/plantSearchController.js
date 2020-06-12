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
    },
    findByCommonName: function (req, res) {
        db.Plantsearch
            .find({ common_name: req.params.common_name })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};