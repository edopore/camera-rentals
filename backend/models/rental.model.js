const mongoose = require('mongoose');
const {Schema} = mongoose;

const RentalSchema = new Schema({
    customer_id:{type:String},
    camera_id:{type:String}
},{
    timestamps:{createdAt:true,updatedAt:true}
});


module.exports = mongoose.model("rental",RentalSchema);