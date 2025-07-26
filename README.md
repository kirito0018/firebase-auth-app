# Firebase Auth App

A simple React app bootstrapped with **Vite** that uses **Firebase Authentication** and **Material-UI (MUI)** for styling. It is structured in a scalable and modular way, ideal for portfolio or production-ready projects.

## 🔧 Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Material-UI (MUI)](https://mui.com/)

## ✅ Features Implemented

- Login with email and password
- Login with Google (via Firebase Authentication)
- Password reset via email
- User registration with name and email
- Stores user name in Firestore (by uid)
- Personalized dashboard greeting using Firestore data
- Profile page to edit user name
- Protected dashboard and profile routes
- Logout functionality
- Navigation logic based on auth state
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

4. **Enable Firestore in Firebase Console**

- Go to the **Firestore Database** tab in the Firebase Console
- Click **Create database**
- Choose **Production mode** or **Test mode** for dev use
- Use secure rules:
  ```js
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if request.auth != null;
      }
    }
  }
  ```

5. **Run the app**

```bash
npm run dev
```

## 👤 Test User

To test the application without registration, you can use the following credentials:

- **Email:** teste@gmail.com  
- **Password:** 123456

## 🧪 Upcoming Features

- Login with Google
- Firestore integration for user profile editing
- Role-based access control

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International**.  
See [LICENSE.txt](./LICENSE.txt) for more details.
