const express = require("express");
const asyncHandler = require('express-async-handler')
const router = express.Router();
const {getListCategory,create,update,remove} =require("../services/category");
const {checkAuth,checkAdmin} =require("../middlewares/auth");


//POST GET LIST CATEGORY
router.post("/",checkAuth,checkAdmin,asyncHandler(getListCategory))

//POST CREATE CATEGORY
router.post("/create",checkAuth,checkAdmin, asyncHandler(create))

//PUT UPDATE CATEGORY
router.put("/:id",checkAuth,checkAdmin,asyncHandler(update))

//DELETE  CATEGORY
router.delete("/:id",checkAuth,checkAdmin,asyncHandler(remove))


module.exports = router;