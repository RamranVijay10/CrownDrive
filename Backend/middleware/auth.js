/**
 * Authentication Middleware
 * Handles JWT token verification and user authentication
 * Protects routes by validating Bearer tokens
 */

import jwt from "jsonwebtoken";
import User from "../Models/user.js";

export const protect = async(req,res,next)=>{
    let token = req.headers.authorization;

    if(!token){
        return res.json({success:false, message:"Unauthorized"});
    }

    // Extract token from Bearer format if present
    if(token.startsWith("Bearer ")){
        token = token.split(" ")[1];
    }

    try {
        const userId = jwt.decode(token, process.env.JWT_SECRET);

        if(!userId){
            return res.json({success:false, message:"Unauthorized"});
        }
      req.user=  await User.findById(userId).select("-password");
      next();
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:"Unauthorized"});
    }
    
}