import { useForm } from "react-hook-form";
import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ProductContext } from "../context/ProductContext";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, singleProduct, updateProduct } =
    useContext(ProductContext);

  const { register, handleSubmit, setValue } = useForm();

  const [preview, setPreview] = useState("");

  // fetch product
  useEffect(() => {
    singleProduct(id);
  }, [id]);

  // set form values
  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      setValue("category", product.category);
      setValue("price", product.price);
      setPreview(product.image);
    }
  }, [product]);

  // submit
  const onSubmit = async (data) => {
    await updateProduct(id, data);
    navigate("/"); // redirect after update
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        
        {/* TITLE */}
        <input
          {...register("title")}
          className="border p-3 rounded-md"
          placeholder="Title"
        />

        {/* DESCRIPTION */}
        <textarea
          {...register("description")}
          className="border p-3 rounded-md"
          placeholder="Description"
        />

        {/* CATEGORY */}
        <input
          {...register("category")}
          className="border p-3 rounded-md"
          placeholder="Category"
        />

        {/* PRICE */}
        <input
          type="number"
          {...register("price")}
          className="border p-3 rounded-md"
          placeholder="Price"
        />

        {/* IMAGE PREVIEW */}
        {preview && (
          <img
            src={preview}
            className="w-40 h-40 object-cover rounded-md"
          />
        )}

        {/* IMAGE INPUT */}
        <input
          type="file"
          {...register("image")}
          onChange={(e) =>
            setPreview(URL.createObjectURL(e.target.files[0]))
          }
        />

        {/* BUTTON */}
        <button className="bg-blue-600 text-white py-3 rounded-md">
          Update Product
        </button>

      </form>
    </div>
  );
}

export default EditProduct;