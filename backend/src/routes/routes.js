const express = require('express');
const route = express.Router();
const addClient = require('../controllers/addClient')
const lookClients = require('../controllers/lookClients');
const deleteClient = require('../controllers/deleteClient');
const updataClient = require('../controllers/updateClient');

route.post('/add-client', addClient.addClient);
route.get('/look-clients', lookClients.lookClients);
route.delete('/delete-client/:id', deleteClient.deleteClient);
route.get('/look-client/:id', updataClient.lookClient);
route.put('/update-client/:id', updataClient.updateClient);

module.exports = route;