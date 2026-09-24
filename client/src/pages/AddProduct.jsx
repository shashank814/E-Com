import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { data, useNavigate } from "react-router";

function AddProduct() {
  const { register, handleSubmit, reset } = useForm();

   const { addProduct } = useContext(ProductContext)
   const navigate = useNavigate()

   const onSubmit = async (data) => {
    const res = await addProduct(data)

    if(res) {
      reset()
      navigate("/main")
    }
   }


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Add New Product
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        
        {/* TITLE */}
        <input
          type="text"
          placeholder="Product Title"
          {...register("title", { required: true })}
          className="border p-3 rounded-md"
        />

        {/* DESCRIPTION */}
        <textarea
          placeholder="Product Description"
          {...register("description", { required: true })}
          className="border p-3 rounded-md"
        />

        {/* CATEGORY */}
        <input
          type="text"
          placeholder="Category"
          {...register("category", { required: true })}
          className="border p-3 rounded-md"
        />

        {/* PRICE */}
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
          className="border p-3 rounded-md"
        />

        {/* IMAGE URL */}
        <input
          type="file"
          placeholder="Image"
          {...register("image", { required: true })}
          className="border p-3 rounded-md"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;