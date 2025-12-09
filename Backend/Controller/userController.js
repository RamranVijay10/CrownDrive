import bcrypt from "bcrypt";
/**
 * User Controller
 * Handles user authentication, registration, and profile management
 * Endpoints: register, login, getUserData, getAllCars
 */

import User from "../Models/user.js";
import jwt from "jsonwebtoken";
import Car from "../Models/Car.js";


// Generate Jwt Token
const generateToken = (userId) => {
   const payload = userId;
   return jwt.sign(payload, process.env.JWT_SECRET);
}

// Register User

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !password || !email){
            return res.json({success:false, message:"All fields are required"});
        }
        const userExits = await User.findOne({email});
        if(userExits){
            return res.json({success:false, message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password:hashedPassword });

        const token = generateToken(user._id.toString());
        res.json({success:true, token});

    } catch (error) {
        console.log(error);
       res.json({success:false, message:error.message});
    }
};


// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.json({success:false, message:"All fields are required"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.json({success:false, message:"User not found"});
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if(!isPasswordMatched){
            return res.json({success:false, message:"Invalid credentials"});
        }
        const token = generateToken(user._id.toString());
        res.json({success:true, token});
    } catch (error) {
        console.log(error);
       res.json({success:false, message:error.message});
    }
};


// Get User Data using token (JWT)

export const getUserData = async (req, res) => {
    try {
        const {_id} = req.user;
        const user = await User.findById(_id).select("-password");
        res.json({success:true, user});


    }catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};


// Get All Cars for The Frontend

export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({isAvailable: true});
        res.json({success:true, cars});
    } catch (error) {
        console.log(error.message);
       res.json({success:false, message:error.message});
    }
};