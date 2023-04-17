const { Schema } = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    alcohol: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
})

module.exports = ProductSchema;