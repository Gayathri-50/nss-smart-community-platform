# 🇮🇳 NSS Smart Community Platform

<div align="center">

![NSS Smart Community Platform](https://img.shields.io/badge/NSS-Smart%20Community%20Platform-1f2937?style=for-the-badge&logo=react&logoColor=61DAFB)
![Version](https://img.shields.io/badge/version-1.0.0-3b82f6?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-10b981?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-13c659?style=for-the-badge&logo=mongodb)

**A production-ready community support platform for NSS volunteers**

Integrating Emergency Blood Donor Network, Missing Person Alerts, and Smart Waste Management in one unified system.

[🌐 Live Demo](https://nss-smart-community-platform.vercel.app) • [🐛 Report Bug](../../issues) • [✨ Request Feature](../../issues) • [📖 Documentation](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [API Endpoints](#-api-endpoints)
- [User Roles & Permissions](#-user-roles--permissions)
- [Database Schema](#-database-schema)
- [Deployment Guide](#-deployment-guide)
- [Security Best Practices](#-security-best-practices)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **NSS Smart Community Platform** is a full-stack web application designed for National Service Scheme (NSS) volunteers to efficiently coordinate community support activities. It brings together three critical community services into one unified, intuitive system with enterprise-grade security and analytics.

### Why This Platform?

| Service | Impact |
|---------|--------|
| 🩸 **Blood Donor Network** | Save lives by connecting blood donors with patients in real-time |
| 🔍 **Missing Person Alerts** | Rapidly circulate missing person reports across the community |
| ♻️ **Smart Waste Management** | Enable citizens to report waste issues and track cleanup progress |
| 📊 **Analytics Dashboard** | Admins monitor all activities with data-driven insights |

---

## ✨ Key Features

### 🩸 Blood Donor Network
- ✅ Donor registration with blood group, location, and availability
- ✅ Emergency blood request system with instant notifications
- ✅ Smart filtering by blood group and location radius
- ✅ Donor availability toggle (active/inactive status)
- ✅ Volunteer coordination for emergency pickups
- ✅ Last donation date tracking (respects 3-month safety gap)

### 🔍 Missing Person Alert System
- ✅ Report missing persons with photo upload (Cloudinary integration)
- ✅ Public alert feed with advanced search and filtering
- ✅ Last seen location with interactive map (Leaflet.js)
- ✅ Automatic volunteer assistance assignment
- ✅ Status tracking workflow: Missing → Under Investigation → Found
- ✅ Emergency contact info with one-click calling

### ♻️ Smart Waste Management
- ✅ Citizens report garbage issues with geotagged images
- ✅ Live complaint status tracking
- ✅ NSS cleanup campaign management dashboard
- ✅ Map-based heatmap visualization of reported issues
- ✅ Recycling awareness content library
- ✅ Campaign progress tracking and metrics

### 🔐 Security & Authentication
- ✅ JWT-based authentication (access + refresh tokens)
- ✅ Role-based access control (Citizen / Volunteer / Admin)
- ✅ Protected routes on frontend and backend
- ✅ Password hashing with bcryptjs
- ✅ Rate limiting on API endpoints

### 📊 Admin Dashboard
- ✅ Real-time counters and analytics (Recharts)
- ✅ Comprehensive user management with role assignment
- ✅ Report approval/rejection workflow
- ✅ Activity logs and audit trail
- ✅ Downloadable CSV data exports

### 🎨 User Experience
- ✅ Glassmorphism design language with gradient meshes
- ✅ Smooth page transitions and card animations (Framer Motion)
- ✅ Dark / Light mode toggle (persisted in localStorage)
- ✅ Fully mobile-responsive design
- ✅ Toast notifications for user feedback
- ✅ Loading skeletons for async content
- ✅ Pagination on all listing pages

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18 + Vite, Tailwind CSS, Framer Motion, React Router v6 |
| **Backend** | Node.js, Express.js, Express-Validator |
| **Database** | MongoDB Atlas with Mongoose ODM |
| **Authentication** | JWT (jsonwebtoken), bcryptjs |
| **File Upload** | Cloudinary + Multer |
| **Maps & Geolocation** | Leaflet.js + React-Leaflet |
| **Data Visualization** | Recharts |
| **HTTP Client** | Axios |
| **UI Components** | Lucide React Icons |
| **Notifications** | Nodemailer (Email), react-hot-toast (UI) |
| **State Management** | React Context API |
| **Dev Tools** | ESLint, Prettier, Nodemon, dotenv |

---

## 📁 Project Structure

```
nss-smart-community-platform/
│
├── 📁 client/                          # React Frontend (Vite)
│   ├── 📁 public/
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
│   │   │   ├── 📁 common/              # Shared components
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
│   │   │   ├── 📁 blood/               # Blood donation feature
│   │   │   ├── 📁 missing/             # Missing person feature
│   │   │   ├── 📁 waste/               # Waste management feature
│   │   │   └── 📁 dashboard/           # Admin dashboard
│   │   │
│   │   ├── 📁 context/                 # React Context API
│   │   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── 📁 pages/                   # Route-level page components
│   │   ├── 📁 utils/                   # Helper functions & utilities
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env.example
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── 📁 server/                          # Node.js + Express Backend
│   ├── 📁 config/
│   │   ├── db.js                       # MongoDB connection
│   │   └── cloudinary.js               # Cloudinary configuration
│   │
│   ├── 📁 controllers/                 # Business logic
│   │   ├── authController.js
│   │   ├── bloodController.js
│   │   ├── missingController.js
│   │   ├── wasteController.js
│   │   └── adminController.js
│   │
│   ├── 📁 middleware/                  # Express middleware
│   │   ├── authMiddleware.js           # JWT verification
│   │   ├── roleMiddleware.js           # Role-based access control
│   │   ├── uploadMiddleware.js         # Multer file upload
│   │   └── errorHandler.js             # Error handling
│   │
│   ├── 📁 models/                      # Mongoose schemas
│   │   ├── User.js
│   │   ├── BloodDonor.js
│   │   ├── BloodRequest.js
│   │   ├── MissingPerson.js
│   │   └── WasteReport.js
│   │
│   ├── 📁 routes/                      # API route definitions
│   │   ├── authRoutes.js
│   │   ├── bloodRoutes.js
│   │   ├── missingRoutes.js
│   │   ├── wasteRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── 📁 utils/                       # Utility functions
│   │   ├── sendEmail.js                # Nodemailer helper
│   │   ├── generateToken.js
│   │   └── sampleData.js               # Database seed data
│   │
│   ├── .env.example
│   ├── server.js                       # Entry point
│   └── package.json
│
├── .gitignore
├── .github/
│   └── workflows/                      # CI/CD pipelines (optional)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** v9+ or **yarn**
- **Git**
- **MongoDB Atlas** account ([Free tier](https://www.mongodb.com/cloud/atlas))
- **Cloudinary** account ([Free tier](https://cloudinary.com/))

### Step 1: Clone the Repository

```bash
git clone https://github.com/NithishwaranSenthilkumar/nss-smart-community-platform.git
cd nss-smart-community-platform
```

### Step 2: Backend Setup

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Copy environment file template
cp .env.example .env
# → Edit .env with your credentials (see Configuration section)

# Seed database with sample data (optional but recommended)
npm run seed

# Start development server
npm run dev
```

**Backend URL:** `http://localhost:5000`

### Step 3: Frontend Setup

```bash
# Open a new terminal and navigate to client directory
cd client

# Install dependencies
npm install

# Copy environment file template
cp .env.example .env
# → Edit .env with your configuration

# Start Vite development server
npm run dev
```

**Frontend URL:** `http://localhost:5173`

### Step 4: Access the Application

1. Open your browser and navigate to `http://localhost:5173`
2. Use default admin credentials (after seeding):
   ```
   Email:    admin@nss.com
   Password: Admin@123
   ```

> ⚠️ **Important:** Change default credentials in production!

---

## 🔑 Configuration

### Backend Environment Variables (`server/.env`)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nss-platform?retryWrites=true&w=majority

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars
JWT_REFRESH_SECRET=your_refresh_secret_here_min_32_chars
JWT_EXPIRES_IN=7d

# Cloudinary (Image Upload)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password  # Use App Password for Gmail

# CORS Configuration
CLIENT_URL=http://localhost:5173
```

### Frontend Environment Variables (`client/.env`)

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Cloudinary
VITE_CLOUDINARY_UPLOAD_PRESET=nss_platform_preset
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Maps (Optional)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### Getting Your Credentials

#### MongoDB Atlas
1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with read/write permissions
4. Whitelist `0.0.0.0/0` for development (use specific IPs in production)
5. Copy the connection string as `MONGODB_URI`

#### Cloudinary
1. Sign up at [cloudinary.com](https://cloudinary.com/)
2. Go to Settings → Upload
3. Create an unsigned upload preset: `nss_platform_preset`
4. Copy Cloud Name, API Key, and API Secret

#### JWT Secrets
Generate strong secrets using:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------|
| `POST` | `/api/auth/register` | Register new user | ❌ |
| `POST` | `/api/auth/login` | Login & receive JWT | ❌ |
| `POST` | `/api/auth/logout` | Invalidate token | ✅ |
| `GET` | `/api/auth/me` | Get current user profile | ✅ |
| `PUT` | `/api/auth/update-password` | Change password | ✅ |

### Blood Donor Network
| Method | Endpoint | Description | Access Level |
|--------|----------|-------------|---------|
| `GET` | `/api/blood/donors` | List all donors | Public |
| `GET` | `/api/blood/donors/:id` | Get donor by ID | Public |
| `POST` | `/api/blood/donors/register` | Register as donor | Citizen+ |
| `PUT` | `/api/blood/donors/:id` | Update donor profile | Owner |
| `PATCH` | `/api/blood/donors/:id/availability` | Toggle availability | Owner |
| `POST` | `/api/blood/request` | Create blood request | Citizen+ |
| `GET` | `/api/blood/requests` | List all requests | Citizen+ |
| `PATCH` | `/api/blood/requests/:id/status` | Update request status | Volunteer+ |

### Missing Person Alerts
| Method | Endpoint | Description | Access Level |
|--------|----------|-------------|---------|
| `GET` | `/api/missing` | List all alerts | Public |
| `GET` | `/api/missing/:id` | Get alert details | Public |
| `POST` | `/api/missing/report` | Report missing person | Citizen+ |
| `PUT` | `/api/missing/:id` | Update report | Owner |
| `PATCH` | `/api/missing/:id/status` | Update status | Volunteer+ |
| `DELETE` | `/api/missing/:id` | Delete report | Admin |

### Waste Management
| Method | Endpoint | Description | Access Level |
|--------|----------|-------------|---------|
| `GET` | `/api/waste` | List all reports | Public |
| `GET` | `/api/waste/:id` | Get report details | Public |
| `POST` | `/api/waste/report` | Submit waste report | Citizen+ |
| `PATCH` | `/api/waste/:id/status` | Update cleanup status | Volunteer+ |
| `GET` | `/api/waste/campaigns` | List campaigns | Public |
| `POST` | `/api/waste/campaigns` | Create campaign | Admin |

### Admin Functions
| Method | Endpoint | Description | Access Level |
|--------|----------|-------------|---------|
| `GET` | `/api/admin/users` | List all users | Admin |
| `PUT` | `/api/admin/users/:id/role` | Update user role | Admin |
| `DELETE` | `/api/admin/users/:id` | Delete user | Admin |
| `GET` | `/api/admin/analytics` | Get platform analytics | Admin |
| `GET` | `/api/admin/activity-logs` | View activity logs | Admin |

---

## 👥 User Roles & Permissions

### 🧑 Citizen (Default)
- Register and login
- Request emergency blood
- Report missing persons
- Report waste/garbage issues
- Track their own reports
- Access public feeds

### 🟠 NSS Volunteer
*All Citizen permissions +*
- Verify and respond to blood requests
- Assist in missing person investigations
- Update waste report cleanup status
- Manage NSS campaigns
- Assign tasks to other volunteers

### 🔴 Admin
*All Volunteer permissions +*
- Full user management (assign roles, delete users)
- Approve or reject reports
- Access comprehensive analytics dashboard
- View all activity logs
- Export data as CSV/Excel
- System configuration and settings

---

## 🗄 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (bcrypt hashed),
  phone: String,
  role: Enum ['citizen', 'volunteer', 'admin'],
  avatar: String (Cloudinary URL),
  location: {
    city: String,
    state: String,
    coordinates: [longitude, latitude]  // GeoJSON Point
  },
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### BloodDonor Model
```javascript
{
  user: ObjectId (ref: User),
  bloodGroup: Enum ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  phone: String,
  location: {
    address: String,
    city: String,
    coordinates: [longitude, latitude]
  },
  isAvailable: Boolean,
  lastDonationDate: Date,
  totalDonations: Number,
  medicalHistory: String,
  createdAt: Date,
  updatedAt: Date
}
```

### MissingPerson Model
```javascript
{
  reportedBy: ObjectId (ref: User),
  name: String,
  age: Number,
  gender: Enum ['Male', 'Female', 'Other'],
  photo: String (Cloudinary URL),
  description: String,
  lastSeenLocation: {
    address: String,
    coordinates: [longitude, latitude]
  },
  missingDate: Date,
  contactName: String,
  contactPhone: String,
  status: Enum ['missing', 'investigating', 'found'],
  assignedVolunteer: ObjectId (ref: User),
  shareCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### WasteReport Model
```javascript
{
  reportedBy: ObjectId (ref: User),
  wasteType: Enum ['Garbage', 'Sewage', 'Plastic', 'Industrial', 'Medical', 'Other'],
  images: [String] (Cloudinary URLs),
  description: String,
  location: {
    address: String,
    coordinates: [longitude, latitude]
  },
  status: Enum ['reported', 'in_progress', 'resolved'],
  assignedVolunteer: ObjectId (ref: User),
  cleanupProgress: Number (0–100),
  priority: Enum ['low', 'medium', 'high', 'urgent'],
  createdAt: Date,
  updatedAt: Date
}
```

---

## ☁️ Deployment Guide

### 1. Frontend Deployment (Vercel)

```bash
# Option A: Via GitHub (Recommended)
# 1. Push code to GitHub
# 2. Visit vercel.com and sign up
# 3. Click "Import Project" → Select your repository
# 4. Configure:
#    - Framework: Vite
#    - Root Directory: client
#    - Build Command: npm run build
#    - Output Directory: dist
# 5. Add all VITE_* environment variables
# 6. Click Deploy
```

Or via CLI:
```bash
npm install -g vercel
cd client
vercel --prod
```

### 2. Backend Deployment (Render)

1. Sign up at [render.com](https://render.com)
2. Click "New Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** nss-smart-community-platform
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node
5. Add environment variables from `server/.env`
6. Click Deploy

### 3. Database (MongoDB Atlas)

1. Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user with read/write permissions
3. Whitelist `0.0.0.0/0` (development) or specific IPs (production)
4. Copy connection string to `MONGODB_URI`

### 4. File Storage (Cloudinary)

1. Sign up at [cloudinary.com](https://cloudinary.com/)
2. Go to Settings → Upload → Add unsigned preset
3. Name: `nss_platform_preset`
4. Add to backend and frontend environment variables

---

## 🔒 Security Best Practices

### ✅ Do's
- ✅ Use HTTPS on all production deployments
- ✅ Never commit `.env` files to version control
- ✅ Rotate JWT secrets regularly
- ✅ Use environment-specific MongoDB users with least-privilege access
- ✅ Implement rate limiting on API endpoints
- ✅ Validate all user inputs on frontend and backend
- ✅ Use CORS whitelist for specific domains
- ✅ Sanitize file uploads (check type, size, virus scan)
- ✅ Enable HTTPS on Cloudinary URLs
- ✅ Hash sensitive data (passwords, tokens)

### ❌ Don'ts
- ❌ Don't expose API keys in frontend code
- ❌ Don't store tokens in localStorage for sensitive operations
- ❌ Don't use weak JWT secrets (< 32 characters)
- ❌ Don't allow unlimited file uploads
- ❌ Don't log sensitive information (passwords, tokens)
- ❌ Don't disable MongoDB schema validation
- ❌ Don't use admin credentials in development

---

## 🌱 Sample Data

Populate your database with realistic demo data:

```bash
cd server
npm run seed
```

This creates:
- 1 Admin user
- 5 NSS Volunteer users
- 20 Citizen users
- 15 Blood donors (across all blood groups)
- 8 Missing person alerts
- 12 Waste reports (various statuses)
- 3 Active NSS campaigns

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nss-smart-community-platform.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update README if needed

4. **Commit your changes**
   ```bash
   git commit -m 'Add AmazingFeature: brief description'
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Provide a clear description
   - Link related issues
   - Include screenshots for UI changes

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes before submitting PR
- Keep PRs focused on single features/fixes
- Update documentation if API/structure changes

---

## 📝 Scripts

### Available Commands

**Backend:**
```bash
npm run dev      # Start development server with nodemon
npm run build    # Build for production
npm start        # Start production server
npm run seed     # Populate database with sample data
npm run lint     # Run ESLint
```

**Frontend:**
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🐛 Troubleshooting

### Common Issues

**Q: MongoDB connection fails**
- Verify `MONGODB_URI` in `.env`
- Whitelist your IP in MongoDB Atlas
- Check username and password

**Q: Cloudinary upload fails**
- Verify `CLOUDINARY_CLOUD_NAME` is correct
- Ensure upload preset is created and named correctly
- Check API key and secret

**Q: JWT token invalid**
- Regenerate `JWT_SECRET` and `JWT_REFRESH_SECRET`
- Clear browser cookies/localStorage
- Re-login to get new tokens

**Q: CORS errors**
- Verify `CLIENT_URL` matches frontend domain
- Check backend CORS configuration
- Whitelist frontend domain in server settings

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Nithishwaran Senthilkumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 🙏 Acknowledgements

- **National Service Scheme (NSS)** — for inspiring community-first development
- **[Lucide React](https://lucide.dev/)** — beautiful open-source icons
- **[Framer Motion](https://www.framer.com/motion/)** — production-ready animations
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first CSS framework
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** — cloud database platform
- **[Cloudinary](https://cloudinary.com/)** — intelligent media management
- **[Recharts](https://recharts.org/)** — composable charting library
- **[Leaflet.js](https://leafletjs.com/)** — interactive maps

---

## 📞 Support & Contact

Have questions or need help? 

- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](../../issues)
- 💬 Discussions: [GitHub Discussions](../../discussions)
- 📖 Documentation: [Project Wiki](../../wiki)

---

<div align="center">

### Made with ❤️ for the NSS Community

**If this project helped you, please consider giving it a ⭐ star!**

[⬆ Back to Top](#-nss-smart-community-platform)

</div>
