## ⚙️ Setup Instructions

Follow the steps below to run the Task Manager application on your local machine.

Prerequisites: Node.js (v14 or above), npm, and MongoDB (local or MongoDB Atlas) must be installed.

Step 1: Clone the repository and navigate to the project directory

git clone https://github.com/maheshray1221/Task-Manager.git
cd Task-Manager

setup backend 
cd Backend
npm install

create .env file inside the backend folder and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:
npm run dev

: Set up the frontend
cd Frontend
npm install
npm start

Run the application
Make sure both backend and frontend servers are running, then open the browser and start using the Task Manager app.

## 🛠 Tech Stack

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40"/>
</p>
🔐 Security & Best Practices

. Implemented secure RESTful APIs following industry best practices

. Environment variables managed via dotenv to prevent sensitive data exposure

. Proper request validation and error handling for robust backend stability

⚡ Performance & Scalability

. Optimized database queries using Mongoose schemas and indexing

. Modular backend architecture enabling horizontal scalability

. Frontend built with reusable React components for maintainability

🧩 Design Principles Followed

. Separation of Concerns (SoC)

. MVC Architecture

. Reusable & Composable Components

. Clean Code & Readability

. Single Responsibility Principle (SRP)

🧪 Error Handling Strategy

. Centralized error handling middleware

. Meaningful HTTP status codes

. Graceful API failure responses to improve UX

🚀 Deployment Ready

. Production-ready build configuration

. Easily deployable on Render / Vercel / AWS

. Supports CI/CD pipeline integration
