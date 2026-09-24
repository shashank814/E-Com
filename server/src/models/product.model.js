import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 500,
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, { timestamps: true })

const productModel = mongoose.model("products", productSchema)

export default productModel