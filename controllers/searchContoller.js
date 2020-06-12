const db = require("../models");


module.exports = {
    //Used to find all access that has been granted.
    findAllBySearch: function (req, res) {
        db.Plantsearch
            .find({ $or: [{ common_name: req.query }, { scientific_name: req.query }, { category_type: req.query }, { foliage_color: req.query }] })
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};