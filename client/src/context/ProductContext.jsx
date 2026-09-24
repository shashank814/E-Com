import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const API = import.meta.env.VITE_API_URL

  const token = localStorage.getItem("accessToken");
  const parsed = JSON.parse(token);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        `${API}/api/products/get-products`,
      );

      setAllProducts(res.data.products);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addProduct = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);

    try {
      const res = await axios.post(
        `${API}/api/products/add-product`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${parsed}`,
          },
        },
      );

      await getAllProducts();
      return res.data
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const singleProduct = async (id) => {
    try {
      const res = await axios.get(
        `${API}/api/products/product/${id}`,
      );
      setProduct(res.data.product);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const updateProduct = async (id, data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);

    // if image updated
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const res = await axios.patch(
        `${API}/api/products/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${parsed}`,
          },
        },
      );

      await getAllProducts();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `${API}/api/products/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${parsed}`
          }
        }
      );
      await getAllProducts()
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        setAllProducts,
        addProduct,
        singleProduct,
        product,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
