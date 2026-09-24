import productModel from "../models/product.model.js";
import uploadFile from "../services/storage.services.js";

export async function addProduct(req, res) {
  try {
    const { title, description, price, category } = req.body;
    const result = await uploadFile(req.file.buffer);

    console.log(req.body);
    console.log(req.file);

    const product = await productModel.create({
      title,
      description,
      price,
      category,
      image: result.url,
      createdBy: req.userId,
    });

    return res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await productModel.find();

    return res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching products",
    });
  }
}

export async function getSingleProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Invalid product ID or server error",
    });
  }
}

// export async function updateProduct(req, res) {
//   try {
//     const { id } = req.params;

//     const updatedProduct = await productModel.findByIdAndUpdate(
//       id,
//       req.body, 
//       { new: true } 
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({
//         message: "Product not found",
//       });
//     }

//     return res.status(200).json({
//       message: "Product updated successfully",
//       product: updatedProduct,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error updating product",
//     });
//   }
// }

export async function updateProduct(req, res) {
  try {
    const { id } = req.params;

    const updateData = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
    };

    // ✅ handle image if user uploads new one
    if (req.file) {
      const result = await uploadFile(req.file.buffer);
      updateData.image = result.url;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      product
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting product",
    });
  }
}