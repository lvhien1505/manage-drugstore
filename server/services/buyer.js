const BuyerModel = require("../models/buyer");
const {
  ERROR_SERVER,
  CREATE_BUYER_SUCCESS,
  UPDATE_BUYER_SUCCESS,
  DELETE_BUYER_SUCCESS
} = require("../utils/notify");


const getListBuyer = async (req, res) => {
  try {
    let partners = await BuyerModel.find().populate("transaction");
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const create = async (req, res) => {
  try {
    let name = req.body.name || "";
    let age = req.body.age || "";
    let address = req.body.address || "";
    let buyer = {
      name,
      age,
      address
    };
    let data = await BuyerModel.create(buyer);
    if (data) {
      return res.status(200).json(CREATE_BUYER_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const update = async (req, res) => {
  try {
    let id = req.params.id;
    let buyer = {};
    if (req.body.name) {
      buyer.name = req.body.name;
    }
    if (req.body.age) {
      buyer.products = req.body.products;
    }
    if (req.body.address) {
      buyer.address = req.body.address;
    }
    if (req.body.address) {
      buyer.address = req.body.address;
    }
    if (req.body.transaction) {
      buyer.transaction = req.body.transaction;
    }
    let data = await BuyerModel.findByIdAndUpdate({ _id: id }, buyer);
    if (data) {
      return res.status(200).json(UPDATE_BUYER_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const remove = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await BuyerModel.findByIdAndDelete({ _id: id });
    if (data) {
      return res.status(200).json(DELETE_BUYER_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

module.exports = {
  create,
  update,
  remove,
  getListBuyer
};
