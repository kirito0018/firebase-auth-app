# Firebase Auth App

A simple React app bootstrapped with **Vite** that uses **Firebase Authentication** and **Material-UI (MUI)** for styling. It is structured in a scalable and modular way, ideal for portfolio or production-ready projects.

## 🔧 Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Material-UI (MUI)](https://mui.com/)

## ✅ Features Implemented

- Login with email and password
- Protected dashboard route (only accessible to authenticated users)
- Auth context to track user session globally
- Logout functionality
- Clean architecture: routes, context, services, components, and pages separated

## 📁 Project Structure

```
src/
├── components/
│   └── Auth/         # Login and logout button
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

Create a `.env` file in the root folder and paste your Firebase config:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. **Run the app**

```bash
npm run dev
```

## 🧪 Upcoming Features

- User registration
- Reset password
- Login with Google
- Firestore user data

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International**.  
See [LICENSE.txt](./LICENSE.txt) for more details.
