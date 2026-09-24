import express, { Router } from "express"
import multer from "multer"
import { authenticate } from "../middlewares/auth.middleware.js"
import { productValidator } from "../validators/product.validator.js"
import { addProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/product.controller.js"

const router = Router()

const upload = multer({ storage: multer.memoryStorage() })

router.post(
  "/add-product",
  authenticate,
  upload.single("image"),   // FIRST
  productValidator,         // SECOND
  addProduct
);

router.get("/get-products", getAllProducts)
router.get("/product/:id", getSingleProduct)
router.patch("/update/:id", authenticate, upload.single("image"), updateProduct)
router.delete("/delete/:id", authenticate, deleteProduct)

export default router