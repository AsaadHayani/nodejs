const User = require("../../models/User");

const index = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const view = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ message: "Viewed successfuly!", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const store = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ message: "Added successfuly!", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Updated successfuly!", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const del = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "Deleted successfuly!", data: deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { index, view, store, update, del };
