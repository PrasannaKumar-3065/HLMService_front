# 🏘️ Hyperlocal Marketplace for Services – Frontend

This is the **React frontend** of the Hyperlocal Marketplace for Services project. It allows users to discover and book nearby service providers such as electricians, plumbers, tutors, and more. The platform supports three roles: **Customer**, **Service Provider**, and **Admin**.

---

## 🚀 Tech Stack

- ⚛️ React (with Vite)
- 🧩 React Router
- 🎨 Tailwind CSS
- 🛠️ Axios (API communication)
- 📦 Context API for state management
- 🔐 JWT Authentication
- 🗺️ Google Maps or OpenStreetMap (future)

---

## 📁 Folder Structure

```
src/
├── auth/              # Login/Register flows
├── customer/          # Customer-specific components & pages
├── provider/          # Provider-specific components & pages
├── services/          # Service discovery and booking
├── admin/             # Admin dashboard
├── common/            # Shared UI (Navbar, Footer, Layouts)
├── assets/            # Images and static content
├── context/           # Auth & Booking Contexts
├── hooks/             # Custom React hooks
├── routes/            # App routing and protected routes
├── utils/             # Helper functions & constants
├── App.jsx            # App entry with Router
└── main.jsx           # Vite main mount
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hlm-service-frontend.git
cd hlm-service-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

Adjust the URL based on your backend Spring Boot server location.

### 4. Start the Development Server

```bash
npm run dev
```

Frontend will be available at [http://localhost:5173](http://localhost:5173)

---

## 🔐 Authentication

- JWT-based authentication
- Role-based access: Routes are protected using `ProtectedRoute`
- Auth state is managed via `AuthContext`

---

## 📌 Key Features

- 🧑‍💼 Role-based dashboards: Customer / Provider / Admin
- 📍 Geolocation-based service discovery
- 📅 Booking system with status updates
- 💬 Contact forms and support tickets
- ⭐ Reviews and provider ratings
- 🔐 Secure access with token auth
- 📱 Responsive UI using Tailwind

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## ✅ Todo / Upcoming

- [ ] Google Maps or OpenStreetMap integration
- [ ] Chat system between provider & customer
- [ ] Notifications (push/email)
- [ ] Payment integration (Razorpay/Stripe)

---

## 📄 License

MIT License. Open for contributions!

---

## 🤝 Contribution

PRs are welcome! Please open issues or feature requests first.

---

## 🔗 Related Repos

- [Backend - Spring Boot API (MongoDB)](https://github.com/your-username/hlm-service-backend)
