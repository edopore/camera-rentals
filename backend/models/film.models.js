const mongoose = require('mongoose');
const {Schema} = mongoose;

const FilmSchema = new Schema({
    model:{type:String},
    vendor:{type:String},
    sesibility_iso:{type:String},
    format_film:{type:String}
},{
    timestamps:{createdAt:true,updatedAt:true}
});


module.exports = mongoose.model("film",FilmSchema);
