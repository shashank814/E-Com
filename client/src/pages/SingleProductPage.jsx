import { useNavigate, useParams } from "react-router";
import { useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function SingleProductPage() {
  const { id } = useParams();
  const { product, singleProduct, deleteProduct } = useContext(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    singleProduct(id);
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-4 sm:p-6 rounded-xl shadow-md">
        {/* IMAGE */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 sm:h-80 md:h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-4">
          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          {/* CATEGORY */}
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* PRICE */}
          <div className="text-xl sm:text-2xl font-bold text-green-600">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          {/* EXTRA INFO */}
          <div className="text-sm text-gray-500">
            <p>✔ Free Delivery Available</p>
            <p>✔ 7 Days Easy Return</p>
            <p>✔ Secure Payment</p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto">
              Add to Cart
            </button>

            <button className="bg-gray-200 px-6 py-2 rounded-md hover:bg-gray-300 transition w-full sm:w-auto">
              Buy Now
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => navigate(`/main/edit-product/${product._id}`)}
              className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Update
            </button>

            <button
              onClick={async () => {
                await deleteProduct(product._id); 
                navigate("/main")
              }}
              className="bg-red-600 px-6 py-2 rounded-md hover:bg-gray-300 transition w-full sm:w-auto"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          Product Details
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          This product is carefully selected to ensure quality and durability.
          It is designed to meet your everyday needs while providing excellent
          performance. Shop confidently with our trusted platform.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h3 className="font-semibold">Fast Delivery</h3>
          <p className="text-sm text-gray-500">
            Get your product delivered quickly to your doorstep.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h3 className="font-semibold">Quality Assurance</h3>
          <p className="text-sm text-gray-500">
            We ensure top-notch quality for all our products.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h3 className="font-semibold">Customer Support</h3>
          <p className="text-sm text-gray-500">
            24/7 support to help you with your queries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
