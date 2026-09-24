# 🛒 E-Commerce MERN Application

A full-stack E-commerce web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with authentication, protected routes, and full product management (CRUD).

---

## 🚀 Features

* 🔐 Authentication (Login / Register)
* 🔒 Protected Routes using custom guards
* 📦 Product CRUD (Add, View, Update, Delete)
* 🖼️ Image Upload (Multer + ImageKit)
* 🛍️ Single Product Page
* ⚡ Instant UI Updates after Delete
* 🧭 Nested Routing using React Router

---

## 🧭 Frontend Routes (Your App Structure)

### 🔓 Public Routes

| Path        | Description   |
| ----------- | ------------- |
| `/`         | Login Page    |
| `/register` | Register Page |

---

### 🔐 Protected Routes (`/main`)

| Path                     | Description              |
| ------------------------ | ------------------------ |
| `/main`                  | Home Page (All Products) |
| `/main/about`            | About Page               |
| `/main/add-product`      | Add Product              |
| `/main/product/:id`      | Single Product Page      |
| `/main/edit-product/:id` | Edit Product             |

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Hook Form
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer (file upload)
* ImageKit (image hosting)
* JWT Authentication

---

## 📁 Project Structure

```id="projstruct"
E-Com/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── routes/
│   │   └── components/
│
├── server/                 # Node Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── utils/
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash id="clonecmd"
git clone https://github.com/your-username/ecommerce-mern.git
cd ecommerce-mern
```

---

### 2️⃣ Backend Setup

```bash id="backendsetup"
cd server
npm install
```

Create `.env` file:

```env id="envfile"
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

Run backend:

```bash id="runbackend"
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash id="frontendsetup"
cd client
npm install
npm run dev
```

---

## 🔐 Authentication Flow

* Access Token → stored in **localStorage**
* Refresh Token → stored in **httpOnly cookie**
* Protected routes handled using:

  * `MainProtected`
  * `PublicProtected`

---

## 📡 API Endpoints

### 🔑 Auth APIs

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |
| POST   | `/api/auth/logout`   | Logout user       |

---

### 📦 Product APIs

| Method | Endpoint                    | Description        |
| ------ | --------------------------- | ------------------ |
| GET    | `/api/products`             | Get all products   |
| GET    | `/api/products/:id`         | Get single product |
| POST   | `/api/products/add-product` | Add new product    |
| PATCH  | `/api/products/update/:id`  | Update product     |
| DELETE | `/api/products/delete/:id`  | Delete product     |

---

## 🧪 Example API (Add Product)

```bash id="apiexample"
POST /api/products/add-product
Content-Type: multipart/form-data
Authorization: Bearer <token>
```

Fields:

```id="fields"
title
description
category
price
image (file)
```
---

## 📌 Future Enhancements

* 🛒 Cart & Checkout System
* 💳 Payment Integration (Stripe)
* ⭐ Reviews & Ratings
* 📊 Admin Dashboard
* 🔍 Search & Filter

---

## 👨‍💻 Author

**Shashank Singh**

* GitHub: https://github.com/shashank814
* LinkedIn: https://linkedin.com/in/shashank-singh-92b52b249

---
