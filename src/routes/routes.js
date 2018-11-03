const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');

router.get('/users/', users.getUsers);
router.post('/users/', users.createUsers);
router.get('/users/:id', users.getUser);
router.put('/users/:id', users.updateUsers);
router.delete('/users/:id', users.deleteUsers);

module.exports = router;