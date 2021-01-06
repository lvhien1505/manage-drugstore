const PartnerModel = require("../models/partner");
const {
  ERROR_SERVER,
  CREATE_PARTNER_SUCCESS,
  UPDATE_PARTNER_SUCCESS,
  DELETE_PARTNER_SUCCESS
} = require("../utils/notify");


const getListPartner = async (req, res) => {
  try {
    let partners = await PartnerModel.find().populate("products");
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const create = async (req, res) => {
  try {
    let name = req.body.name || "";
    let products = req.body.products || "";
    let partner = {
      name,
      products
    };
    let data = await PartnerModel.create(partner);
    if (data) {
      return res.status(200).json(CREATE_PARTNER_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const update = async (req, res) => {
  try {
    let id = req.params.id;
    let partner = {};
    if (req.body.name) {
      partner.name = req.body.name;
    }
    if (req.body.products) {
      partner.products = req.body.products;
    }
    let data = await PartnerModel.findByIdAndUpdate({ _id: id }, partner);
    if (data) {
      return res.status(200).json(UPDATE_PARTNER_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const remove = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await PartnerModel.findByIdAndDelete({ _id: id });
    if (data) {
      return res.status(200).json(DELETE_PARTNER_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

module.exports = {
  create,
  update,
  remove,
  getListPartner
};
