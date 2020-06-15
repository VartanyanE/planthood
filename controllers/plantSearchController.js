const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Plantsearch
            .find().sort({ common_name: "asc" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Plantsearch
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCommonName: function (req, res) {
        db.Plantsearch
            .find({
                $or: [{ common_name: { $regex: req.params.common_name, $options: "i" } },
                { scientific_name: { $regex: req.params.common_name, $options: "i" } },
                { family_name: { $regex: req.params.common_name, $options: "i" } },
                { USDA_zone: { $regex: req.params.common_name, $options: "i" } },
                { foliage_color: { $regex: req.params.common_name, $options: "i" } }]
            }).sort({ common_name: "asc" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

