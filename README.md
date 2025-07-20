# Firebase Auth App

A simple React app bootstrapped with **Vite** that uses **Firebase Authentication** and **Material-UI (MUI)** for styling. It is structured in a scalable and modular way, ideal for portfolio or production-ready projects.

## 🔧 Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Material-UI (MUI)](https://mui.com/)

## ✅ Features Implemented

- Login with email and password
- Password reset via email
- User registration with email and password
- Protected dashboard route (only accessible to authenticated users)
- Logout functionality
- Navigation logic based on auth state (Home redirects accordingly)
- Auth context to track user session globally
- Clean architecture: routes, context, services, components, and pages separated

## 📁 Project Structure

```
src/
├── components/
│   └── Auth/         # Login, Register, ResetPassword, LogoutButton
├── context/          # Auth context
├── pages/            # Home and Dashboard pages
├── routes/           # Routing structure and PrivateRoute
├── services/         # Firebase configuration
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Firebase**

Before running the project, you must configure your environment variables.

- Copy the example file:
  ```bash
  cp .env.example .env
  ```

- Fill in your Firebase credentials in the newly created `.env` file.

4. **Run the app**

```bash
npm run dev
```

## 🧪 Upcoming Features

- Login with Google
- Firestore integration for storing user data
- Custom user profile page

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International**.  
See [LICENSE.txt](./LICENSE.txt) for more details.
