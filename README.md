🇮🇳 NSS Smart Community Platform
<div align="center">
![NSS Smart Community Platform](https://img.shields.io/badge/NSS-Smart%20Community%20Platform-orange?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
A production-ready community support platform for NSS volunteers — integrating Emergency Blood Donor Network, Missing Person Alerts, and Smart Waste Management in one unified system.
Live Demo · Report Bug · Request Feature · Documentation
</div>
---
📋 Table of Contents
Overview
Features
Tech Stack
Folder Structure
Getting Started
Environment Variables
API Reference
User Roles
Database Models
Deployment
Screenshots
Contributing
License
---
🌟 Overview
The NSS Smart Community Platform is a full-stack web application designed for National Service Scheme (NSS) volunteers to efficiently coordinate community support activities. It brings together three critical emergency and civic systems into one modern, mobile-responsive platform.
Why This Platform?
🩸 Save Lives — Connect blood donors with patients in real-time
🔍 Find the Missing — Rapidly circulate missing person alerts across the community
♻️ Clean Communities — Enable citizens to report waste issues and track cleanup progress
📊 Data-Driven NSS — Admins get a full analytics dashboard for monitoring all activities
---
✨ Features
🩸 Blood Donor Network
Donor registration with blood group, location, and availability
Emergency blood request system with instant notifications
Filter donors by blood group and location radius
Donor availability toggle (active/inactive)
Volunteer coordination for emergency pickups
Last donation date tracking (respects 3-month gap rule)
🔍 Missing Person Alert System
Report missing persons with photo upload (Cloudinary)
Public alert feed with search and filter
Last seen location with map integration (Leaflet.js)
Volunteer assistance assignment
Status tracking: Missing → Under Investigation → Found
Emergency contact info with one-click call
♻️ Smart Waste Management
Citizens report garbage issues with geotagged images
Live complaint status tracking
NSS cleanup campaign management dashboard
Map-based heatmap of reported issues
Recycling awareness content
Campaign progress tracking
🔐 Authentication & Roles
JWT-based authentication (access + refresh tokens)
Role-based access control (Citizen / NSS Volunteer / Admin)
Protected routes on frontend and backend
Password hashing with bcrypt
📊 Admin Dashboard
Real-time counters and analytics (Recharts)
User management with role assignment
Report approval/rejection workflow
Activity logs and audit trail
Downloadable CSV reports
🎨 UI/UX
Glassmorphism design language
Gradient mesh backgrounds
Framer Motion page transitions and card animations
Dark / Light mode toggle (persisted in localStorage)
Fully mobile responsive
Toast notifications (react-hot-toast)
Loading skeletons for async content
Pagination on all listing pages
---
🛠 Tech Stack
Layer	Technology
Frontend	React 18 + Vite, Tailwind CSS, Framer Motion, React Router v6
Backend	Node.js, Express.js
Database	MongoDB Atlas with Mongoose ODM
Auth	JWT (jsonwebtoken), bcryptjs
File Upload	Cloudinary + Multer
Maps	Leaflet.js + React-Leaflet
Charts	Recharts
HTTP Client	Axios
Icons	Lucide React
Notifications	Nodemailer (Email), react-hot-toast (UI)
State Management	React Context API
Validation	express-validator
Dev Tools	ESLint, Prettier, Nodemon, dotenv
---
📁 Folder Structure
```
nss-smart-community-platform/
│
├── 📁 client/                          # React Frontend (Vite)
│   ├── 📁 public/
│   │   └── vite.svg
│   ├── 📁 src/
│   │   ├── 📁 api/                     # Axios instances & API calls
│   │   │   ├── axiosInstance.js
│   │   │   ├── authApi.js
│   │   │   ├── bloodApi.js
│   │   │   ├── missingApi.js
│   │   │   └── wasteApi.js
│   │   │
│   │   ├── 📁 assets/                  # Images, icons, SVGs
│   │   │
│   │   ├── 📁 components/              # Reusable UI components
│   │   │   ├── 📁 common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── ThemeToggle.jsx
│   │   │   │   ├── LoadingSkeleton.jsx
│   │   │   │   ├── Pagination.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── StatusBadge.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   │
│   │   │   ├── 📁 blood/
│   │   │   │   ├── DonorCard.jsx
│   │   │   │   ├── BloodGroupFilter.jsx
│   │   │   │   ├── EmergencyRequestCard.jsx
│   │   │   │   └── DonorMap.jsx
│   │   │   │
│   │   │   ├── 📁 missing/
│   │   │   │   ├── AlertCard.jsx
│   │   │   │   ├── AlertFeed.jsx
│   │   │   │   └── MissingPersonMap.jsx
│   │   │   │
│   │   │   ├── 📁 waste/
│   │   │   │   ├── WasteReportCard.jsx
│   │   │   │   ├── CampaignCard.jsx
│   │   │   │   └── WasteHeatMap.jsx
│   │   │   │
│   │   │   └── 📁 dashboard/
│   │   │       ├── StatsCard.jsx
│   │   │       ├── ActivityLog.jsx
│   │   │       └── AnalyticsChart.jsx
│   │   │
│   │   ├── 📁 context/                 # React Context API
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── 📁 hooks/                   # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useGeolocation.js
│   │   │   └── usePagination.js
│   │   │
│   │   ├── 📁 pages/                   # Route-level pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Emergency.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   │
│   │   │   ├── 📁 blood/
│   │   │   │   ├── BloodHome.jsx
│   │   │   │   ├── DonorList.jsx
│   │   │   │   ├── DonorProfile.jsx
│   │   │   │   ├── RegisterDonor.jsx
│   │   │   │   └── EmergencyRequest.jsx
│   │   │   │
│   │   │   ├── 📁 missing/
│   │   │   │   ├── MissingAlerts.jsx
│   │   │   │   ├── ReportMissing.jsx
│   │   │   │   └── AlertDetails.jsx
│   │   │   │
│   │   │   ├── 📁 waste/
│   │   │   │   ├── WasteReports.jsx
│   │   │   │   ├── ReportWaste.jsx
│   │   │   │   └── CampaignDashboard.jsx
│   │   │   │
│   │   │   └── 📁 admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── UserManagement.jsx
│   │   │       ├── ReportManagement.jsx
│   │   │       └── Analytics.jsx
│   │   │
│   │   ├── 📁 utils/                   # Helper functions
│   │   │   ├── formatDate.js
│   │   │   ├── bloodGroupColors.js
│   │   │   └── uploadToCloudinary.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── 📁 server/                          # Node.js + Express Backend
│   ├── 📁 config/
│   │   ├── db.js                       # MongoDB connection
│   │   └── cloudinary.js               # Cloudinary config
│   │
│   ├── 📁 controllers/
│   │   ├── authController.js
│   │   ├── bloodController.js
│   │   ├── missingController.js
│   │   ├── wasteController.js
│   │   └── adminController.js
│   │
│   ├── 📁 middleware/
│   │   ├── authMiddleware.js           # JWT verification
│   │   ├── roleMiddleware.js           # Role-based access
│   │   ├── uploadMiddleware.js         # Multer config
│   │   └── errorHandler.js
│   │
│   ├── 📁 models/
│   │   ├── User.js
│   │   ├── BloodDonor.js
│   │   ├── BloodRequest.js
│   │   ├── MissingPerson.js
│   │   └── WasteReport.js
│   │
│   ├── 📁 routes/
│   │   ├── authRoutes.js
│   │   ├── bloodRoutes.js
│   │   ├── missingRoutes.js
│   │   ├── wasteRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── 📁 utils/
│   │   ├── sendEmail.js                # Nodemailer helper
│   │   ├── generateToken.js
│   │   └── sampleData.js              # Seed data
│   │
│   ├── .env
│   ├── server.js                       # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
```
---
🚀 Getting Started
Prerequisites
Make sure you have the following installed:
Node.js v18 or higher
npm v9+ or yarn
MongoDB Atlas account (free tier works)
Cloudinary account (free tier works)
Git
---
1. Clone the Repository
```bash
git clone https://github.com/your-username/nss-smart-community-platform.git
cd nss-smart-community-platform
```
---
2. Backend Setup
```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create your environment file
cp .env.example .env
# → Fill in your values (see Environment Variables section below)

# Seed the database with sample data (optional)
npm run seed

# Start the development server
npm run dev
```
The backend will start at `https://nss-smart-community-platform.onrender.com`
---
3. Frontend Setup
```bash
# Open a new terminal and navigate to the client directory
cd client

# Install dependencies
npm install

# Create your environment file
cp .env.example .env
# → Fill in your values

# Start the Vite dev server
npm run dev
```
The frontend will start at `http://localhost:5173`
---
4. Open the App
Visit `http://localhost:5173` in your browser.
Default Admin Credentials (after seeding):
```
Email:    admin@nss.com
Password: Admin@123
```
---
🔑 Environment Variables
`server/.env`
```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nss-platform?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_REFRESH_SECRET=your_refresh_secret_here
JWT_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```
`client/.env`
```env
VITE_API_BASE_URL=https://nss-smart-community-platform.onrender.com/api
VITE_CLOUDINARY_UPLOAD_PRESET=nss_platform_preset
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```
---
📡 API Reference
Authentication
Method	Endpoint	Description	Access
POST	`/api/auth/register`	Register new user	Public
POST	`/api/auth/login`	Login & get JWT	Public
POST	`/api/auth/logout`	Logout (invalidate token)	Auth
GET	`/api/auth/me`	Get current user profile	Auth
PUT	`/api/auth/update-password`	Change password	Auth
Blood Donor Network
Method	Endpoint	Description	Access
GET	`/api/blood/donors`	List all donors	Public
GET	`/api/blood/donors/:id`	Get donor by ID	Public
POST	`/api/blood/donors/register`	Register as donor	Auth
PUT	`/api/blood/donors/:id`	Update donor profile	Auth
PATCH	`/api/blood/donors/:id/availability`	Toggle availability	Auth
POST	`/api/blood/request`	Create blood request	Auth
GET	`/api/blood/requests`	List all requests	Auth
PATCH	`/api/blood/requests/:id/status`	Update request status	Volunteer/Admin
Missing Person Alerts
Method	Endpoint	Description	Access
GET	`/api/missing`	List all alerts	Public
GET	`/api/missing/:id`	Get alert details	Public
POST	`/api/missing/report`	Report missing person	Auth
PUT	`/api/missing/:id`	Update report	Auth
PATCH	`/api/missing/:id/status`	Update found/missing status	Volunteer/Admin
DELETE	`/api/missing/:id`	Delete report	Admin
Waste Management
Method	Endpoint	Description	Access
GET	`/api/waste`	List all reports	Public
GET	`/api/waste/:id`	Get report details	Public
POST	`/api/waste/report`	Submit waste report	Auth
PATCH	`/api/waste/:id/status`	Update cleanup status	Volunteer/Admin
GET	`/api/waste/campaigns`	List campaigns	Public
POST	`/api/waste/campaigns`	Create campaign	Admin
Admin
Method	Endpoint	Description	Access
GET	`/api/admin/users`	List all users	Admin
PUT	`/api/admin/users/:id/role`	Update user role	Admin
DELETE	`/api/admin/users/:id`	Delete user	Admin
GET	`/api/admin/analytics`	Get platform analytics	Admin
GET	`/api/admin/activity-logs`	Get activity logs	Admin
---
👥 User Roles
🧑 Citizen (Default)
Register and login
Request emergency blood
Report missing persons
Report waste/garbage issues
Track their own reports
🟠 NSS Volunteer
All Citizen permissions
Verify and respond to blood requests
Assist in missing person cases
Update waste report cleanup status
Manage NSS campaigns
🔴 Admin
All Volunteer permissions
Full user management (assign roles, delete users)
Approve or reject reports
Access analytics dashboard
View all activity logs
Export data as CSV
---
🗄 Database Models
User
```js
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: Enum ['citizen', 'volunteer', 'admin'],
  avatar: String,
  location: { city: String, state: String, coordinates: [lng, lat] },
  isActive: Boolean,
  createdAt: Date
}
```
BloodDonor
```js
{
  user: ObjectId (ref: User),
  bloodGroup: Enum ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  phone: String,
  location: { address: String, city: String, coordinates: [lng, lat] },
  isAvailable: Boolean,
  lastDonationDate: Date,
  totalDonations: Number,
  createdAt: Date
}
```
MissingPerson
```js
{
  reportedBy: ObjectId (ref: User),
  name: String,
  age: Number,
  gender: Enum ['Male', 'Female', 'Other'],
  photo: String (Cloudinary URL),
  description: String,
  lastSeenLocation: { address: String, coordinates: [lng, lat] },
  missingDate: Date,
  contactName: String,
  contactPhone: String,
  status: Enum ['missing', 'investigating', 'found'],
  assignedVolunteer: ObjectId (ref: User),
  createdAt: Date
}
```
WasteReport
```js
{
  reportedBy: ObjectId (ref: User),
  wasteType: Enum ['Garbage', 'Sewage', 'Plastic', 'Industrial', 'Medical', 'Other'],
  images: [String],
  description: String,
  location: { address: String, coordinates: [lng, lat] },
  status: Enum ['reported', 'in_progress', 'resolved'],
  assignedVolunteer: ObjectId (ref: User),
  cleanupProgress: Number (0–100),
  createdAt: Date
}
```
---
☁️ Deployment
Frontend → Vercel
Push your code to GitHub
Go to vercel.com and import the repository
Set the Root Directory to `client`
Add all `VITE_*` environment variables in the Vercel dashboard
Click Deploy
```bash
# Or via CLI
npm i -g vercel
cd client
vercel --prod
```
Backend → Render
Go to render.com and create a New Web Service
Connect your GitHub repository
Set:
Root Directory: `server`
Build Command: `npm install`
Start Command: `node server.js`
Add all environment variables from `server/.env`
Click Deploy
Database → MongoDB Atlas
Create a free cluster at mongodb.com/atlas
Create a database user with read/write permissions
Whitelist `0.0.0.0/0` (all IPs) for Render compatibility
Copy the connection string to `MONGODB_URI` in your environment
File Storage → Cloudinary
Sign up at cloudinary.com
Go to Settings → Upload and create an unsigned upload preset named `nss_platform_preset`
Copy your Cloud Name, API Key, and API Secret to your environment variables
---
📱 Screenshots
Page	Description
🏠 Home	Hero section with animated stats and service cards
🩸 Blood Network	Donor listing with blood group filter and map
🔍 Missing Alerts	Public alert feed with photo and search
♻️ Waste Reports	Map-based issue tracker with status updates
📊 Admin Dashboard	Analytics charts, user management, activity logs
📱 Mobile	Fully responsive across all screen sizes
---
🌱 Sample Data
Run the seed script to populate the database with realistic demo data:
```bash
cd server
npm run seed
```
This creates:
1 Admin user
5 NSS Volunteer users
20 Citizen users
15 Blood donors across blood groups
8 Missing person alerts
12 Waste reports in various statuses
3 Active NSS campaigns
---
🤝 Contributing
Contributions are welcome! Here's how:
Fork the repository
Create your feature branch: `git checkout -b feature/AmazingFeature`
Commit your changes: `git commit -m 'Add AmazingFeature'`
Push to the branch: `git push origin feature/AmazingFeature`
Open a Pull Request
Please make sure your code follows the existing style and includes comments where necessary.
---
🔒 Security Notes
Never commit `.env` files to version control
Rotate JWT secrets regularly in production
Use environment-specific MongoDB users with least-privilege access
Enable HTTPS on all production deployments
Set up rate limiting on the Express server (express-rate-limit is included)
---
📄 License
This project is licensed under the MIT License — see the LICENSE file for details.
---
🙏 Acknowledgements
National Service Scheme (NSS) — for inspiring community-first development
Lucide React — beautiful open-source icons
Framer Motion — production-ready animation library
Tailwind CSS — utility-first CSS framework
MongoDB Atlas — cloud database platform
Cloudinary — media management platform
Recharts — composable charting library
---
<div align="center">
Made with ❤️ for the NSS Community
⭐ Star this repo if it helped you!
</div>