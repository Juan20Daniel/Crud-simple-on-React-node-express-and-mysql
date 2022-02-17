const controller = {}
const connection = require('../model/model');

controller.lookClients = (req, res) => {
    connection.query('SELECT * FROM clients', (err, rows) => {
        if(err) {
            res.status(500).json({message: err});
        } else {
            res.status(200).json({rows});
        }
    });
}

module.exports = controller;