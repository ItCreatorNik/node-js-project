const {users} = require("../mockData/data")


const getUsers = (req, res) => {
    res.json(users);
};

const addUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
};

const getUserByEmail = (req, res) => {
    const userEmail = req.params.email;
    const user = users.find(user => user.email === userEmail);

    if (!user) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(user);
    }
};

const updateUser = (req, res) => {
    const userEmail = req.params.email;
    const updatedData = req.body;
    const userIndex = users.findIndex(user => user.email === userEmail);

    if (userIndex === -1) {
        res.status(404).json({ error: 'User not found' });
    } else {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        res.json(users[userIndex]);
    }
};


const deleteUser = (req, res) => {
    const userEmail = req.params.email;
    const userIndex = users.findIndex(user => user.email === userEmail);

    if (userIndex === -1) {
        res.status(404).json({ error: 'Пользователь не найден' });
    } else {
        const deletedUser = users[userIndex]; // Прямо получаем удаленного пользователя
        const updatedUsers = users.filter((user, index) => index !== userIndex);
        res.json(deletedUser);
    }
};

module.exports = {
    getUsers,
    addUser,
    getUserByEmail,
    updateUser,
    deleteUser,
};