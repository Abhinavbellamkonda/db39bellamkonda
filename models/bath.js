const mongoose = require("mongoose")
const bathSchema = mongoose.Schema({
    bath_type: {
        type: String,
        // minLength: 2,
        // maxLength: 6
    },

    bath_towel_type: String,
    cost: {
        type: Number,
        // min: 2,
        // max: 5
    }
})

module.exports = mongoose.model("bath", bathSchema)