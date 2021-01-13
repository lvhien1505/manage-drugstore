const CategoryModel = require("../models/category");
const {
  ERROR_SERVER,
  CREATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS
} = require("../utils/notify");


const getListCategory = async (req, res) => {
  try {
    let categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const create = async (req, res) => {
  try {
    let name = req.body.name || "";
    let category = {
      name
    };
    let data = await CategoryModel.create(category);
    if (data) {
      return res.status(200).json(CREATE_CATEGORY_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const update = async (req, res) => {
  try {
    let id = req.params.id;
    let category = {};
    if (req.body.name) {
      category.name = req.body.name;
    }
    let data = await CategoryModel.findByIdAndUpdate({ _id: id }, category);
    if (data) {
      return res.status(200).json(UPDATE_CATEGORY_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const remove = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await CategoryModel.findByIdAndDelete({ _id: id });
    if (data) {
      return res.status(200).json(DELETE_CATEGORY_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

module.exports = {
  create,
  update,
  remove,
  getListCategory
};
