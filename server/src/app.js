import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import productRoutes from "./routes/product.routes.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)

export default app