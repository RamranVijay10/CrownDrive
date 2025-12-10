<div align="center">

# 🚗 🚗CrownDrive (Car Rental Plateform)

### _Your Premium Car Rental Solution_

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [API](#-api-documentation) • [Contributing](#-contributing)

---

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

A full-stack **Car Rental Platform** that connects car owners with customers, enabling seamless vehicle booking and management. Built with the MERN stack, this platform offers a modern, responsive interface with robust backend functionality.

### 🎯 Key Highlights

- 🔐 **Secure Authentication** - JWT-based auth with role-based access control
- 🚘 **Smart Booking System** - Real-time availability checking and automated pricing
- 📊 **Owner Dashboard** - Comprehensive analytics and booking management
- 🖼️ **Image Optimization** - ImageKit CDN integration for fast image delivery
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Fast Performance** - Optimized with Vite and modern React practices

---

## ✨ Features

### 👥 For Customers

- 🔍 **Browse & Search** - Find cars by location, dates, and preferences
- 📅 **Easy Booking** - Simple booking process with instant confirmation
- 💳 **Transparent Pricing** - Clear pricing with automatic calculation
- 📖 **Booking History** - Track all your past and current bookings
- 👤 **Profile Management** - Update profile and upload profile pictures
- 👁️ **Guest Browsing** - Explore cars and bookings without logging in (dummy data)

### 🏢 For Car Owners

- ➕ **List Your Cars** - Easy car listing with image upload
- 📊 **Analytics Dashboard** - Track revenue, bookings, and performance
- ✅ **Booking Management** - Approve/reject bookings with ease
- 🔄 **Availability Control** - Toggle car availability on/off
- 💰 **Revenue Tracking** - Monitor monthly earnings

### 🛡️ Security Features

- 🔒 Encrypted passwords with bcrypt
- 🎫 JWT token-based authentication
- 🛡️ Protected API routes
- ✅ Input validation and sanitization
- 🔐 Role-based access control

---

## 🎬 Demo

### Live Demo

> 🚀 [View Live Demo](#) _(Add your deployment link here)_

### Quick Preview

```bash
# Customer Flow
Browse Cars → Select Dates → Book → Confirm → Track Booking

# Owner Flow
Register as Owner → Add Car → Manage Bookings → Track Revenue
```

---

## 🛠️ Tech Stack

### Frontend

| Technology             | Purpose       |
| ---------------------- | ------------- |
| ⚛️ **React.js**        | UI Framework  |
| ⚡ **Vite**            | Build Tool    |
| 🎨 **Tailwind CSS**    | Styling       |
| 🔀 **React Router**    | Navigation    |
| 🌊 **Framer Motion**   | Animations    |
| 📡 **Axios**           | HTTP Client   |
| 🔥 **React Hot Toast** | Notifications |

### Backend

| Technology        | Purpose             |
| ----------------- | ------------------- |
| 🟢 **Node.js**    | Runtime Environment |
| 🚂 **Express.js** | Web Framework       |
| 🍃 **MongoDB**    | Database            |
| 🔗 **Mongoose**   | ODM                 |
| 🎫 **JWT**        | Authentication      |
| 🔐 **Bcrypt**     | Password Hashing    |
| 📤 **Multer**     | File Upload         |
| 🖼️ **ImageKit**   | Image CDN           |

---

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- ImageKit account
- Git

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RamranVijay10/CarRental.git
cd CarRental
```

### 2️⃣ Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create .env file
touch .env

# Add environment variables (see below)
# Start the server
npm run dev
```

### 3️⃣ Frontend Setup

```bash
# Navigate to frontend directory
cd Client-side

# Install dependencies
npm install

# Create .env file
touch .env

# Add environment variables (see below)
# Start the development server
npm run dev
```

### 4️⃣ Access the Application

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000

---

## 🔐 Environment Variables

### Backend (.env)

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Server
PORT=3000
```

### Frontend (.env)

```env
# API Base URL
VITE_BASE_URL=http://localhost:3000

# Currency
VITE_CURRENCY=₹
```

---

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint             | Description       | Auth Required |
| ------ | -------------------- | ----------------- | ------------- |
| POST   | `/api/user/register` | Register new user | ❌            |
| POST   | `/api/user/login`    | User login        | ❌            |
| GET    | `/api/user/data`     | Get user data     | ✅            |

### Car Endpoints

| Method | Endpoint                         | Description             | Auth Required |
| ------ | -------------------------------- | ----------------------- | ------------- |
| GET    | `/api/user/cars`                 | Get all cars            | ❌            |
| POST   | `/api/owner/add-car`             | Add new car             | ✅ Owner      |
| GET    | `/api/owner/cars`                | Get owner's cars        | ✅ Owner      |
| POST   | `/api/owner/toggle-availability` | Toggle car availability | ✅ Owner      |
| POST   | `/api/owner/delete-car`          | Delete car              | ✅ Owner      |

### Booking Endpoints

| Method | Endpoint                           | Description            | Auth Required |
| ------ | ---------------------------------- | ---------------------- | ------------- |
| POST   | `/api/bookings/check-availability` | Check car availability | ❌            |
| POST   | `/api/bookings/create`             | Create booking         | ✅            |
| GET    | `/api/bookings/user`               | Get user bookings      | ✅            |
| GET    | `/api/bookings/owner`              | Get owner bookings     | ✅ Owner      |
| POST   | `/api/bookings/change-status`      | Update booking status  | ✅ Owner      |

### Owner Endpoints

| Method | Endpoint                  | Description          | Auth Required |
| ------ | ------------------------- | -------------------- | ------------- |
| POST   | `/api/owner/register`     | Register as owner    | ✅            |
| GET    | `/api/owner/dashboard`    | Get dashboard data   | ✅ Owner      |
| POST   | `/api/owner/update-image` | Update profile image | ✅ Owner      |

---

## 📁 Project Structure

```
CarRental/
├── Backend/
│   ├── Controller/
│   │   ├── userController.js
│   │   ├── ownerController.js
│   │   └── bookingController.js
│   ├── Models/
│   │   ├── user.js
│   │   ├── Car.js
│   │   └── booking.js
│   ├── Routes/
│   │   ├── userRoutes.js
│   │   ├── ownerRoutes.js
│   │   └── bookingRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── multer.js
│   ├── config/
│   │   ├── db.js
│   │   └── imageKit.js
│   ├── server.js
│   └── package.json
│
├── Client-side/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CarCard.jsx
│   │   │   └── owner/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Cars.jsx
│   │   │   ├── CarDetails.jsx
│   │   │   ├── MyBooking.jsx
│   │   │   └── owner/
│   │   ├── Context/
│   │   │   └── context.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── PRD.md
└── README.md
```

---

## 📸 Screenshots

### 🏠 Homepage

> _Beautiful landing page with featured cars_

### 🚗 Car Listing

> _Browse available cars with filters_

### 📊 Owner Dashboard

> _Comprehensive analytics and management_

### 📱 Responsive Design

> _Works perfectly on all devices_

---

## 🎨 Features in Detail

### 🔍 Smart Search & Filtering

- Location-based search across 12 Indian cities
- Date range selection with availability checking
- Category filtering (Sedan, SUV, Coupe)
- Real-time availability updates

### 💼 Owner Dashboard

- **Revenue Analytics**: Track monthly earnings
- **Booking Management**: Approve/reject bookings
- **Car Management**: Add, edit, delete listings
- **Performance Metrics**: Total cars, bookings, revenue

### 🔒 Security

- Passwords hashed with bcrypt (10 rounds)
- JWT tokens with Bearer authentication
- Protected routes with middleware
- Owner verification for sensitive operations
- Input validation on both frontend and backend

### 🖼️ Image Management

- ImageKit CDN integration
- Automatic image optimization
- WebP format conversion
- Responsive image transformations
- Fast image delivery

### 👁️ Guest Browsing with Dummy Data

**Non-authenticated users can explore the platform without logging in:**

- **Home Page**: View 6 featured dummy cars
- **Cars Page**: Browse all 4 dummy cars with full details
- **Car Details**: Click on any car to see complete information
- **My Bookings**: View 4 sample bookings to understand the booking system
- **Booking Restriction**: Must login to create actual bookings

**Benefits:**
- 🎯 Better user experience for first-time visitors
- 🚀 Showcase platform features without signup friction
- 🔒 Protected booking system (login required)
- 📊 Demo-ready for presentations and testing

**Dummy Data Includes:**
- 4 Sample Cars: BMW X5, Toyota Corolla, Jeep Wrangler, Ford Neo 6
- 4 Sample Bookings: Mix of confirmed and pending status
- Complete car details: Images, specs, pricing, features

---

## 🌍 Supported Cities

<div align="center">

| Major Cities | Regional Cities |
| ------------ | --------------- |
| 🏙️ Mumbai    | 🏔️ Haridwar     |
| 🏛️ Delhi     | 🌄 Dehradun     |
| 🌆 Bangalore | 🏘️ Ballia       |
| 🏙️ Pune      | 🏞️ Saharanpur   |
| 🌃 Hyderabad | 🕉️ Rishikesh    |
| 🏖️ Chennai   |                 |
| 🌉 Kolkata   |                 |

</div>

---

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a new branch (`git checkout -b feature/AmazingFeature`)
3. ✍️ Make your changes
4. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
6. 🔃 Open a Pull Request

### 📝 Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please open an issue on GitHub!

- 🐛 [Report a Bug](https://github.com/RamranVijay10/CarRental/issues)
- 💡 [Request a Feature](https://github.com/RamranVijay10/CarRental/issues)

---

## 📈 Roadmap

- [ ] 💳 Payment gateway integration
- [ ] ⭐ Rating and review system
- [ ] 🚗 Driver verification
- [ ] 📱 Mobile application
- [ ] 🌐 Multi-language support
- [ ] 📊 Advanced analytics
- [ ] 🔔 Push notifications
- [ ] 🗺️ GPS tracking

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ramran Vijay**

- GitHub: [@RamranVijay10](https://github.com/RamranVijay10)
- LinkedIn: [Your LinkedIn Profile](#)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB for the powerful database
- ImageKit for image optimization
- Tailwind CSS for the utility-first CSS framework
- All contributors who helped improve this project

---

## 💖 Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🍴 Forking the project
- 📢 Sharing with others
- ☕ [Buy me a coffee](#)

---

<div align="center">

### Made with ❤️ by Ramran Vijay

**⭐ Star this repo if you find it useful!**

[![GitHub stars](https://img.shields.io/github/stars/RamranVijay10/CarRental?style=social)](https://github.com/RamranVijay10/CarRental/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/RamranVijay10/CarRental?style=social)](https://github.com/RamranVijay10/CarRental/network/members)

</div>
