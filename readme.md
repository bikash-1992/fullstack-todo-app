Full-Stack Todo App with Next.js, FastAPI, and Firebase

This is a simple Todo application built using Next.js for the frontend, FastAPI for the backend, and Firebase for authentication. The app allows users to add, view, and delete todo items, with user authentication handled by Firebase.

Table of Contents
Features
Tech Stack
Project Structure
Installation
Environment Variables
Running the Application
API Endpoints
Contributing
License
Features
User authentication with Firebase (signup, login, logout)
Add, view, and delete todo items
FastAPI backend for handling create operations
Responsive design using Next.js
Tech Stack
Frontend: Next.js, React
Backend: FastAPI (Python)
Authentication: Firebase
Database: Firebase Firestore (or Realtime Database)
HTTP Client: Axios

Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/fullstack-todo-app.git
cd fullstack-todo-app
2. Set Up the Backend (FastAPI)
Navigate to the fastapi-backend/ directory:

cd fastapi-backend
Install Dependencies

pip install -r requirements.txt
Run the FastAPI Server

uvicorn main:app --reload
The FastAPI backend will be running on http://127.0.0.1:8000.

3. Set Up the Frontend (Next.js)
Navigate to the nextjs-frontend/ directory:


cd ../nextjs-frontend
Install Dependencies:

npm install
4. Set Up Firebase
Go to the Firebase Console and create a new project.
Enable Firebase Authentication and choose the desired authentication methods (e.g., Email/Password).
Set up Firestore or Realtime Database to store the todo items.
Copy the Firebase configuration and paste it into the .env.local file in your nextjs-frontend/ directory.
5. Environment Variables
Create a .env.local file in the nextjs-frontend/ directory with the following content:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
6. Running the Application
Start the Next.js Development Server

npm run dev
The frontend will be running on http://localhost:3000.

API Endpoints
The FastAPI backend exposes the following endpoints:

POST /todos/: Create a new todo item
GET /todos/: Retrieve all todo items
DELETE /todos/{id}: Delete a todo item by ID
Example Request (Create Todo)
bash
Copy code
POST /todos/
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs"
}

Directory structure:

todo-app/
├── fastapi-backend/             # Python FastAPI backend
│   ├── app/                     # FastAPI application files
│   │   ├── __init__.py
│   │   └── main.py
│   ├── venv/                    # Virtual environment for Python dependencies
│   ├── requirements.txt
│   └── README.md
│
├── nextjs-frontend/             # Next.js frontend
│   ├── components/              # React components
│   │   ├── TodoForm.js
│   │   ├── TodoList.js
│   │   └── AuthForm.js
│   ├── lib/                     # Firebase setup
│   │   └── firebase.js
│   ├── pages/                   # Next.js pages
│   │   ├── login.js                # API routes for server-side
|   |   |___ index.js
|   |__ .env.local               # environment variables
|   |__ next.config.js           # configuration file for next.js
|   |__ package.json
|___readme.md
