const User = require("../models/User");
const moment = require("moment");
const country_list = require("../Countries");

const index = async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { title: "Users", users, moment: moment });
  } catch (error) {
    res.send(error.message);
  }
};

const view = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("user/view", { user, moment: moment });
  } catch (error) {
    res.send(error.message);
  }
};

const create = async (req, res) => {
  res.render("user/add", { country_list: country_list });
};

const edit = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("user/edit", {
      user,
      country_list: country_list,
      moment: moment,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const store = async (req, res) => {
  try {
    await User.create(req.body);
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

const update = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

const del = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

const search = async (req, res) => {
  try {
    const searchText = req.body.searchText.trim();
    await User.find({
      $or: [{ firstName: searchText }, { lastName: searchText }],
    });
    res.render("user/search", { user: data, moment: moment });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { index, view, create, edit, store, update, del, search };
