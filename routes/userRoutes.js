const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Route to insert a new user
router.post('/insert-user', userController.insertUser);

// Route to get all users
router.get('/get-users', userController.getUsers);

// Route to delete a user
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;
