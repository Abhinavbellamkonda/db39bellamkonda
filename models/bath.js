const mongoose = require("mongoose") 
const bathSchema = mongoose.Schema({ 
 bath_type: String, 
 bath_towel_type: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("bath",bathSchema)