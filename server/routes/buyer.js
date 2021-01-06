const express = require("express");
const asyncHandler = require('express-async-handler')
const router = express.Router();
const {getListBuyer,create,update,remove} =require("../services/buyer");
const {checkSignup} =require("../middlewares/checkUser");
const {checkAuth,checkAdmin} =require("../middlewares/auth");


//POST GET LIST BUYER
router.post("/",checkSignup,asyncHandler(getListBuyer))

//POST CREATE BUYER
router.post("/create",checkAuth,checkAdmin, asyncHandler(create))

//PUT UPDATE BUYER
router.put("/:id",checkAuth,checkAdmin,asyncHandler(update))

//DELETE  BUYER
router.delete("/:id",checkAuth,checkAdmin,asyncHandler(remove))


module.exports = router;