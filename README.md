🏢 HRMS Lite – Human Resource Management System

A full-stack, production-ready Human Resource Management System (HRMS) built using React + TypeScript (Frontend) and FastAPI + Python (Backend).

The system provides real-time attendance analytics, employee management, and a modern responsive UI optimized for production deployment.

🚀 Live Demo
Layer	URL
Frontend	- https://hrms-portal-blue.vercel.app

Backend API - 	https://hrms-portal-6oro.onrender.com

GIT - https://github.com/amanverma8938967791-cyber/hrms_portal

API Documentation (Swagger)	https://hrms-portal-6oro.onrender.com/docs
✨ Features
📊 Core Features
🔹 Dashboard

Live attendance rate (progress bar)

Real-time stat cards

Recent employees preview

Quick action shortcuts

🔹 Employee Management

Add new employees

Search employees

Filter by department

View employee details

Delete employees (with cascade deletion of attendance records)

Total present days count per employee

🔹 Attendance Management

Mark attendance:

Present

Absent

Late

Half Day

Edit attendance records

Delete attendance entries

Filter by:

Date range

Employee

Status

Mini summary bar (count per status)

🎨 User Experience

Toast notifications for all actions

Confirmation dialogs before destructive actions

Loading, empty, and error states handled

Fully responsive layout

Mobile sidebar navigation

Card-based mobile tables

🛠 Tech Stack
Frontend

React 18

TypeScript

Vite

React Router

Axios

CSS3 (Custom Styling with Variables)

Backend

FastAPI

SQLAlchemy

PostgreSQL 17

Pydantic

Uvicorn

📂 Project Structure
hrms_portal/
│
├── backend/
│   ├── peopletrack_backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   │
│   ├── hr/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── admin.py
│   │
│   ├── manage.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── services/api.js
    │   └── App.jsx
    │
    ├── package.json
    └── vite.config.js
⚙️ Running Locally
🔹 Prerequisites

Python 3.11+

Node.js 18+

PostgreSQL 17+

1️⃣ Backend Setup
cd backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

Create .env file:

DATABASE_URL=postgresql://username:password@localhost/hrms

Start server:

uvicorn app.main:app --reload --port 8000

Backend will run at:

http://localhost:8000

Swagger docs:

http://localhost:8000/docs
2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173

Create .env file inside frontend:

VITE_API_URL=http://localhost:8000
🚀 Deployment Guide
🔹 Backend → Render

Push project to GitHub.

Create a PostgreSQL database in Render.

Create a new Web Service.

Configure:

Setting	Value
Root Directory	backend
Build Command	pip install -r requirements.txt
Start Command	uvicorn app.main:app --host 0.0.0.0 --port $PORT

Add environment variable:

DATABASE_URL=<render-postgres-url>
🔹 Frontend → Vercel

Import GitHub repository. git clone https://github.com/amanverma8938967791-cyber/hrms_portal.git
cd peoplestrack

Set:

Setting	Value
Root Directory	frontend
Build Command	npm run build
Output Directory	dist

Add environment variable:

VITE_API_URL=https://your-render-backend-url

Deploy.

📡 API Endpoints
👤 Employees
Method	Endpoint	Description
GET	/api/employees	List employees (search & filter supported)
POST	/api/employees	Create employee
PUT	/api/employees/{id}	Update employee
DELETE	/api/employees/{id}	Delete employee
GET	/api/employees/departments	List unique departments
🗓 Attendance
Method	Endpoint	Description
GET	/api/attendance	List attendance (filters supported)
POST	/api/attendance	Mark attendance
PUT	/api/attendance/{id}	Update attendance
DELETE	/api/attendance/{id}	Delete attendance
📊 Dashboard
Method	Endpoint	Description
GET	/api/dashboard/stats	Attendance summary statistics
⚠️ Assumptions & Limitations

PostgreSQL 17 is required.

Database must be created before running backend.

SQLite is not supported.

No payroll or leave management included.

Future dates cannot be marked.

Authentication is not implemented (single admin system).

📌 Future Improvements

Role-based authentication (JWT)

Leave management module

Payroll integration

CSV export

Pagination for large datasets


CI/CD pipeline integration

📄 License

MIT License
