const ProductModel = require("../models/product");
const {checkDir,reNameImage} = require("./uploadImage/checkDir")
const {createImageProduct} = require("./uploadImage")
const {
  ERROR_SERVER,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS
} = require("../utils/notify");


const getListProducts = async (req, res) => {
  try {
    let listTransaction = await ProductModel.find().populate("products");
    res.status(200).json(listTransaction);
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const create = async (req, res) => {
  try {
    let name = req.body.name || "";
    let partner = req.body.partner || "";
    let moneyIn = req.body.moneyIn || "";
    let moneyOut = req.body.moneyOut || "";
    let profit = req.body.profit || "";

    let product = {
      name,
      partner,
      moneyIn,
      moneyOut,
      profit
    };
    let data = await ProductModel.create(product);
    if (data) {
      let image = reNameImage(data._id);
      if (image) {
        await ProductModel.findByIdAndUpdate({ _id: data._id }, { image: image });
      }
      return res.status(200).json(CREATE_PRODUCT_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const update = async (req, res) => {
  try {
    let id = req.params.id;
    let image = reNameImage(id);
    let product = {};
    if (req.body.name) {
      product.name = req.body.name;
    }
    if (req.body.partner) {
      product.partner = req.body.partner;
    }
    if (req.body.moneyIn) {
      product.moneyIn = req.body.moneyIn;
    }
    if (req.body.moneyOut) {
      product.moneyOut = req.body.moneyOut;
    }
    if (req.body.profit) {
      product.profit = req.body.profit;
    }
    if (image) {
      product.image = image;
    }

    let data = await ProductModel.findByIdAndUpdate({ _id: id }, product);
    if (data) {
      return res.status(200).json(UPDATE_PRODUCT_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const remove = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ProductModel.findByIdAndDelete({ _id: id });
    if (data) {
      return res.status(200).json(DELETE_PRODUCT_SUCCESS);
    }
  } catch (error) {
    res.status(500).json(ERROR_SERVER);
  }
};

const uploadImage = (req,res)=>{
    checkDir();
    createImageProduct(req, res);
}


module.exports = {
  create,
  update,
  remove,
  getListProducts,
  uploadImage
};
