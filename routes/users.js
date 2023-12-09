const express = require('express');
const router = express.Router();

const { validateGetUserByEmail,
    validateAddUser } = require('../middlewares/validation.mdware')

const {
    getUsers,
    addUser,
    getUserByEmail,
    updateUser,
    deleteUser
} = require('../controllers/users');


router.get('/', getUsers);
router.post('/', validateAddUser, addUser);
router.get('/:email', getUserByEmail);
router.put('/:email', validateGetUserByEmail, updateUser);
router.delete('/:email', deleteUser);

module.exports = router;