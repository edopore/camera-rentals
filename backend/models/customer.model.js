const mongoose = require('mongoose');
const {Schema} = mongoose;

const CustomerSchema = new Schema({
    full_name:{type:String},
    nuip:{type:String}
},{
    timestamps:{createdAt:true,updatedAt:true}
});


module.exports = mongoose.model("customer",CustomerSchema);