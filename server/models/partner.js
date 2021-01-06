const mongoose = require("../config/dbConnect");

let partnerSchema = mongoose.Schema(
  {
    name: {
      type:String,
      required:true
    },
    products:[
      {type:String}
    ],
    totalMoneyIn:{
      type:Number
    }
  },
  {
    timestamps: true,
  }
);

let PartnerModel = mongoose.model("partner", partnerSchema);
module.exports = PartnerModel;
