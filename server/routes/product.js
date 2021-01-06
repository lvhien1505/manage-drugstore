const express = require("express");
const asyncHandler = require('express-async-handler')
const router = express.Router();
const {getListProducts,create,update,remove,uploadImage} =require("../services/product");
const {checkSignup} =require("../middlewares/checkUser");
const {checkAuth,checkAdmin} =require("../middlewares/auth");


//POST GET LIST BUYER
router.post("/",checkSignup,asyncHandler(getListProducts))

//POST CREATE BUYER
router.post("/create",checkAuth,checkAdmin, asyncHandler(create))

//PUT UPDATE BUYER
router.put("/:id",checkAuth,checkAdmin,asyncHandler(update))

//DELETE  BUYER
router.delete("/:id",checkAuth,checkAdmin,asyncHandler(remove))

router.post("/upload/image",checkSignup,asyncHandler(uploadImage))


module.exports = router;