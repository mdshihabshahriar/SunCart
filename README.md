# ☀️ SunCart — Summer Essentials Store

A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more. Users can browse products, view details, and place orders after authentication.

- 🌐 **Live Site:** [https://suncart-silk.vercel.app](https://suncart-silk.vercel.app)
- 📦 **Repository:** [https://github.com/mdshihabshahriar/SunCart](https://github.com/mdshihabshahriar/SunCart)
- 🗄️ **JSON Server:** [https://suncart-server-leth.onrender.com/products](https://suncart-server-leth.onrender.com/products)

---

## 📸 Features

- 🏠 **Home Page** — Hero section, Popular Products, Summer Care Tips, Top Brands
- 🛍️ **Products Page** — Browse all summer essential products with card animations
- 📄 **Product Details Page** — Full product info with Add to Cart button (protected route)
- 🔐 **Login Page** — Email & password login with form validation
- 📝 **Register Page** — New user registration with full validation
- 👤 **My Profile Page** — View user info, email verification status (protected route)
- ✏️ **Update Profile Page** — Update name and profile photo URL

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | UI component library |
| [Better Auth](https://better-auth.com/) | Authentication |
| [React Hook Form](https://react-hook-form.com/) | Form validation |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [Animate.css](https://animate.style/) | CSS animations |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [JSON Server](https://suncart-server-leth.onrender.com/products) | Mock REST API |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mdshihabshahriar/SunCart.git
cd SunCart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

`.env.local`

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Protected Routes

| Route | Login Required |
|-------|---------------|
| `/` | ❌ |
| `/products` | ❌ |
| `/products/:id` | ✅ |
| `/profile` | ✅ |
| `/update-profile` | ✅ |
| `/login` | ❌ |
| `/register` | ❌ |

---

## 📡 API Endpoints

Base URL: `https://suncart-server-leth.onrender.com`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |

---

## 👨‍💻 Author

**Md Shihab Shahriar**
- GitHub: [@mdshihabshahriar](https://github.com/mdshihabshahriar)
