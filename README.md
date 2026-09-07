# 🏋️ Workout Tracker — MERN Application

A full-stack **MERN workout tracking application** that allows users to create, view, update, and delete workout exercises.

The application includes a React frontend, an Express REST API, MongoDB Atlas for persistent storage, and is deployed online using Railway.

## 🌐 Live Demo

👉 [Open Workout Tracker](https://workout-tracker-mern-production-7772.up.railway.app/)

## ✨ Features

- Create new workout exercises
- View all saved exercises
- Update existing exercises
- Delete exercises with confirmation
- Persistent data storage with MongoDB Atlas
- RESTful API using Express
- Client-side routing with React Router
- Backend validation and error handling
- Responsive custom CSS design
- Custom confirmation and success modals
- Production deployment on Railway

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express
- Mongoose
- REST API

### Database
- MongoDB Atlas

### Deployment
- Railway

## 📁 Project Structure

```text
workout-tracker-mern/
│
├── backend-rest/
│   ├── exercise-controller.mjs
│   ├── exercise-model.mjs
│   ├── package.json
│   └── .env
│
├── frontend-react/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExerciseRow.jsx
│   │   │   ├── ExerciseTable.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── RetrievePage.jsx
│   │   │   └── UpdatePage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

