const controller = {}
const connection = require('../model/model');

controller.deleteClient = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM clients WHERE idClient = ?', [id], (err, rows) => {
        if(err) {
            res.status(500).json({message:err});
        } else {
            res.status(200).json({message:"El cliente se a eliminado"});
        }
    })
}

module.exports = controller;