const controller = {}
const connecion = require('../model/model');
controller.addClient = (req, res) => {
    const { name, phone, email } = req.body;
    connecion.query('INSERT INTO clients VALUES(?,?,?,?)', [null, name, phone, email], (err, rows) => {
        if(err) {
            res.status(500).json({message:"Error del servidor!!"});
        } else {
            res.status(200).json({message:"The new client was added!!"});
        }
    });
}

module.exports = controller;