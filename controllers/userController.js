const db = require('../models/db');

// Insert user into the database
exports.insertUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        await db.execute(
            'INSERT INTO User (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        res.status(201).send({ message: 'User inserted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to insert user' });
    }
};

// Get all users from the database
exports.getUsers = async (req, res) => {
    try {
        const [users] = await db.execute('SELECT * FROM User');
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to retrieve users' });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await db.execute('DELETE FROM User WHERE id = ?', [id]);
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Failed to delete user' });
    }
};
