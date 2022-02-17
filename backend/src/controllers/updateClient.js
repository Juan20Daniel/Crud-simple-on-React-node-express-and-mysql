const controller = {}
const connection = require('../model/model'); 

controller.lookClient = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM clients WHERE idClient = ?', [id], (err, rows) => {
        if(err) {
            res.status(500).json({message:err});
        } else {
            res.status(200).json({rows});
        }
    });
}

controller.updateClient = (req, res) => {
    const { id } = req.params;
    const { name, phone, email } = req.body;

    connection.query(`UPDATE clients SET name='${name}', phone=${phone}, email='${email}' WHERE idClient=${id}`, (err, rows) => {
        if(err) {
            res.status(500).json({message: err});
        } else {
            res.status(200).json({message:"The client was updated"});
        }
    });
}

module.exports = controller;