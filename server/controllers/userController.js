const User = require('../models/User');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, role } = req.body;
    const user = await User.create({ name, email, role });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, createUser };
