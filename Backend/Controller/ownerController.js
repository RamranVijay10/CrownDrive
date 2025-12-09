import User from "../Models/user.js";
import Car from "../Models/Car.js";
import fs from "fs";
import imageKit from "../config/imageKit.js";
import Booking from "../Models/booking.js";






export const registerOwner = async (req, res) => {
    try {
      const {_id} = req.user;
      await  User.findByIdAndUpdate(_id,{role:"owner"});
      res.json({success:true, message:"Owner registered successfully"});

    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};

// API to Add Car

export const addCar = async (req, res) => {
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData);
        const imageFile = req.file;

        const fileBuffer = fs.readFileSync(imageFile.path);
     const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/cars",
        })
       
      
        // URL with basic transformations
        const transformedUrl = imageKit.url({
            path: response.filePath,
            transformation:[
                {width: '1280'},  //Width Resize
                {quality:'auto'}, // Auto quality
                {format: 'webp'}, // Format
            ],
        });
        const image = transformedUrl;
        await Car.create({
            owner: _id,
            ...car,
            image,
        })
        res.json({success:true, message:"Car added successfully"});
        

    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};

// API to Get Car

export const getOwnerCars = async (req, res) => {
    try {
        const {_id} = req.user;
        const cars = await Car.find({owner:_id});
        res.json({success:true, cars});
    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};

// API to Toggle Car Availability

export const toggleCarAvailability = async (req, res) => {
    try {
        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId);

 
        // Checking is Car Belongs to The Owner
if(car.owner.toString() !== _id){
    return res.json({success:false, message:"You are not authorized to toggle this car availability"});
}

        car.isAvailable = !car.isAvailable;
        await car.save();
        res.json({success:true, message:"Car availability toggled successfully"});
    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};


// API to Delete Car

export const deleteCar = async (req, res) => {
    try {
        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId);

        // Checking is Car Belongs to The Owner
if(car.owner.toString() !== _id){
    return res.json({success:false, message:"You are not authorized to delete this car"});
}

car.owner = null;
car.isAvailable = false;
await car.save();

        res.json({success:true, message:"CarR Removed"});
    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};

// Api to Get DashBorad Data

export const getDashboardData = async (req, res) => {
    try {
        const {_id, role} = req.user;
        if(role !== "owner"){
            return res.json({success:false, message:"You are not authorized to get dashboard data"});
        }
        const cars = await Car.find({owner:_id});
        const bookings = await Booking.find({owner:_id}).populate("car").sort({createdAt:-1});

        const pendingBookings = await Booking.find({owner:_id, status:"pending"})
        const completedBookings = await Booking.find({owner:_id, status:"Confirmed"})
        
    //    Calculate Total Earnings
    const monthlyRevenue = bookings.slice().filter(booking => booking.status === "Confirmed").reduce((acc, booking) => acc + booking.totalAmount, 0);

    const dashboardData = {
        totalCars: cars.length,
        totalBookings: bookings.length,
        pendingBookings: pendingBookings.length,
        completedBookings: completedBookings.length,
        recentBookings: bookings.slice(0, 3),
        monthlyRevenue,
    }
    res.json({success:true, dashboardData});

    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};

// Api to Update User Image
export const updateUserImage = async (req, res) => {
    try {
        const {_id} = req.user;
        const imageFile = req.file;


        const fileBuffer = fs.readFileSync(imageFile.path);
     const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/users",
        })
       
      
        // URL with basic transformations
        const transformedUrl = imageKit.url({
            path: response.filePath,
            transformation:[
                {width: '4000'},  //Width Resize
                {quality:'auto'}, // Auto quality
                {format: 'webp'}, // Format
            ],
        });
        const image = transformedUrl;
        await User.findByIdAndUpdate(_id,{image});
        res.json({success:true, message:"User image updated successfully"});
    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};
