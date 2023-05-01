const mongoose = require('mongoose');
const {Schema} = mongoose;

const CameraSchema = new Schema({
    model:{type:String},
    vendor:{type:String},
    has_flash:{type:Boolean},
    film_id:[{type:String}],
    photo_url:{type:String}
},{
    timestamps:{createdAt:true,updatedAt:true}
});


module.exports = mongoose.model("camera",CameraSchema);
