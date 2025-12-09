
import express from "express";
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js";
import userRouter from "./Routes/userRoutes.js";
import ownerRouter from "./Routes/ownerRoutes.js";
import bookingRouter from "./Routes/bookingRoutes.js";
// Initialize app
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/owner',ownerRouter)   
app.use('/api/bookings',bookingRouter)

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.use('/api/user',userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});