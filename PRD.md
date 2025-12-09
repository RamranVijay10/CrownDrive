# Product Requirements Document (PRD)

## Car Rental Platform

---

## 1. Product Overview

### 1.1 Product Name

**Car Rental Platform**

### 1.2 Product Vision

A comprehensive online car rental platform that connects car owners with customers, enabling seamless vehicle booking, management, and rental transactions across multiple Indian cities.

### 1.3 Target Audience

- **Primary Users**: Individuals seeking to rent luxury and standard vehicles
- **Secondary Users**: Car owners looking to monetize their vehicles
- **Geographic Focus**: Major Indian cities (Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai, Kolkata, Haridwar, Dehradun, Ballia, Saharanpur, Rishikesh)

---

## 2. Core Features

### 2.1 User Features

#### 2.1.1 Authentication & Authorization

- User registration with email and password
- Secure login system with JWT authentication
- Role-based access control (User/Owner)
- Password encryption using bcrypt

#### 2.1.2 Car Browsing & Search

- Browse available cars by location
- Filter cars by:
  - Location
  - Date range (pickup and return dates)
  - Category (Sedan, SUV, Coupe)
  - Price range
- View detailed car information:
  - Brand and model
  - Year of manufacture
  - Seating capacity
  - Fuel type (Petrol, Diesel, Electric, Hybrid, Gas)
  - Transmission type (Automatic, Manual, Semi-Automatic)
  - Price per day
  - High-quality images
  - Description and features

#### 2.1.3 Booking Management

- Real-time availability checking
- Date-based booking system
- Automatic price calculation based on rental duration
- Booking status tracking (Pending, Confirmed, Cancelled)
- View booking history
- Cancel bookings

#### 2.1.4 User Profile

- View and manage personal information
- Upload and update profile picture
- View booking history

### 2.2 Owner Features

#### 2.2.1 Owner Dashboard

- Overview statistics:
  - Total cars listed
  - Total bookings
  - Pending bookings
  - Confirmed bookings
  - Monthly revenue
- Recent bookings display
- Quick access to management features

#### 2.2.2 Car Management

- Add new cars with:
  - Image upload (via ImageKit CDN)
  - Brand, model, and year
  - Category and specifications
  - Pricing information
  - Location selection
  - Detailed description
- View all listed cars
- Toggle car availability
- Delete cars from listing
- Update car information

#### 2.2.3 Booking Management

- View all customer bookings
- Filter bookings by status
- Change booking status (Pending → Confirmed/Cancelled)
- View booking details:
  - Customer information
  - Car details
  - Rental period
  - Total amount
  - Payment status

#### 2.2.4 Profile Management

- Update owner profile information
- Upload and change profile picture
- View owner statistics

---

## 3. Technical Specifications

### 3.1 Frontend Stack

- **Framework**: React.js with Vite
- **Routing**: React Router DOM
- **State Management**: Context API
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Image Handling**: ImageKit integration

### 3.2 Backend Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **File Upload**: Multer
- **Image Storage**: ImageKit CDN
- **Environment Variables**: dotenv

### 3.3 Database Schema

#### User Schema

```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ["user", "owner"]),
  image: String (URL),
  timestamps: true
}
```

#### Car Schema

```javascript
{
  owner: ObjectId (ref: User),
  brand: String,
  model: String,
  image: String (URL),
  year: Number,
  category: String (enum: ["Sedan", "SUV", "Coupe"]),
  seating_capacity: Number,
  fuel_type: String,
  transmission: String,
  pricePerDay: Number,
  location: String,
  description: String,
  isAvailable: Boolean,
  timestamps: true
}
```

#### Booking Schema

```javascript
{
  car: ObjectId (ref: Car),
  user: ObjectId (ref: User),
  owner: ObjectId (ref: User),
  pickupDate: Date,
  returnDate: Date,
  totalAmount: Number,
  status: String (enum: ["pending", "confirmed", "cancelled"]),
  timestamps: true
}
```

### 3.4 API Endpoints

#### User Routes

- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/data` - Get user data (protected)
- `GET /api/user/cars` - Get all available cars

#### Owner Routes

- `POST /api/owner/register` - Register as owner
- `POST /api/owner/add-car` - Add new car (protected)
- `GET /api/owner/cars` - Get owner's cars (protected)
- `POST /api/owner/toggle-availability` - Toggle car availability (protected)
- `POST /api/owner/delete-car` - Delete car (protected)
- `GET /api/owner/dashboard` - Get dashboard data (protected)
- `POST /api/owner/update-image` - Update profile image (protected)

#### Booking Routes

- `POST /api/bookings/check-availability` - Check car availability
- `POST /api/bookings/create` - Create new booking (protected)
- `GET /api/bookings/user` - Get user bookings (protected)
- `GET /api/bookings/owner` - Get owner bookings (protected)
- `POST /api/bookings/change-status` - Update booking status (protected)

---

## 4. User Flows

### 4.1 Customer Booking Flow

1. Browse available cars or search by location/dates
2. View car details
3. Select pickup and return dates
4. Review pricing
5. Confirm booking (requires login)
6. Receive booking confirmation
7. View booking in "My Bookings"

### 4.2 Owner Car Listing Flow

1. Register as owner
2. Navigate to "Add Car" in dashboard
3. Upload car image
4. Fill in car details
5. Submit listing
6. Car appears in "Manage Cars"
7. Monitor bookings in "Manage Bookings"

### 4.3 Booking Management Flow

1. Owner receives booking request
2. Review booking details in dashboard
3. Approve or reject booking
4. Customer receives status update
5. Track booking status until completion

---

## 5. Security Features

### 5.1 Authentication & Authorization

- JWT-based authentication
- Bearer token in Authorization header
- Protected routes with middleware
- Role-based access control
- Password hashing with bcrypt

### 5.2 Data Validation

- Input validation on both frontend and backend
- Required field validation
- Type checking
- Date range validation
- Owner verification for car/booking operations

### 5.3 Error Handling

- Comprehensive error messages
- User-friendly error notifications
- Console logging for debugging
- Graceful failure handling

---

## 6. Performance Optimizations

### 6.1 Image Optimization

- ImageKit CDN integration
- Automatic image transformation
- WebP format conversion
- Quality optimization
- Responsive image sizing

### 6.2 Data Fetching

- Conditional data fetching based on authentication
- Efficient database queries with population
- Filtered data responses
- Pagination support for large datasets

### 6.3 Caching Strategy

- Token storage in localStorage
- User data caching in Context
- Optimistic UI updates

---

## 7. UI/UX Features

### 7.1 Design System

- Consistent color scheme (Primary: #0558FE)
- Responsive design for all screen sizes
- Modern, clean interface
- Smooth animations with Framer Motion
- Toast notifications for user feedback

### 7.2 Navigation

- Intuitive navbar with role-based menu items
- Sidebar navigation for owner dashboard
- Breadcrumb navigation
- Back button functionality

### 7.3 Accessibility

- Semantic HTML
- Keyboard navigation support
- Alt text for images
- Clear error messages
- Loading states

---

## 8. Business Logic

### 8.1 Pricing Calculation

- Daily rate × Number of rental days
- Automatic calculation on date selection
- Display in Indian Rupees (₹)

### 8.2 Availability Management

- Date-based availability checking
- Exclude cancelled bookings from availability
- Real-time availability updates
- Owner-controlled availability toggle

### 8.3 Booking Status Workflow

- **Pending**: Initial state after booking creation
- **Confirmed**: Owner approves booking
- **Cancelled**: Booking cancelled by owner or system

---

## 9. Future Enhancements

### 9.1 Payment Integration

- Online payment gateway
- Secure transaction processing
- Payment history
- Refund management

### 9.2 Advanced Features

- Car reviews and ratings
- Driver verification system
- Insurance integration
- GPS tracking
- Multi-language support
- Mobile application

### 9.3 Analytics

- Owner revenue analytics
- Booking trends
- Popular car categories
- Customer behavior insights

---

## 10. Deployment & Infrastructure

### 10.1 Environment Variables

```
MONGODB_URI - MongoDB connection string
JWT_SECRET - Secret key for JWT
IMAGEKIT_PUBLIC_KEY - ImageKit public key
IMAGEKIT_PRIVATE_KEY - ImageKit private key
IMAGEKIT_URL_ENDPOINT - ImageKit URL endpoint
VITE_BASE_URL - Backend API URL
VITE_CURRENCY - Currency symbol
```

### 10.2 Deployment Considerations

- Frontend: Vercel/Netlify
- Backend: Heroku/Railway/Render
- Database: MongoDB Atlas
- CDN: ImageKit
- Environment-specific configurations

---

## 11. Success Metrics

### 11.1 Key Performance Indicators (KPIs)

- Number of registered users
- Number of active car listings
- Booking conversion rate
- Average booking value
- Customer retention rate
- Owner satisfaction score

### 11.2 Technical Metrics

- Page load time < 3 seconds
- API response time < 500ms
- Uptime > 99.5%
- Error rate < 1%

---

## 12. Maintenance & Support

### 12.1 Regular Updates

- Security patches
- Bug fixes
- Feature enhancements
- Performance optimizations

### 12.2 Monitoring

- Error tracking
- Performance monitoring
- User activity logging
- Database health checks

---

## Document Version

**Version**: 1.0  
**Last Updated**: December 10, 2025  
**Status**: Active Development
