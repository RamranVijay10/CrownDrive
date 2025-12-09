/**
 * Global Context Provider
 * Manages application-wide state including authentication, user data, and car listings
 * Provides: user, token, axios instance, navigation, car data, booking dates
 */

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const CarContext = createContext();

export const CarContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [cars, setCars] = useState([]);

  //   Function to Check if user is logged in
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/data");
      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === "owner");
      } else {
        setUser(null);
        setIsOwner(false);
      }
    } catch (error) {
      console.error("Error fetching user:", error.message);
      setUser(null);
      setIsOwner(false);
    }
  };
  //   Function to fetch all cars from the server
  const fetchcars = async () => {
    try {
      const { data } = await axios.get("/api/user/cars");
      data.success ? setCars(data.cars) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to Logout the User
  const logout = () => {
    try {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      setIsOwner(false);
      axios.defaults.headers.common["Authorization"] = "";
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //   Use Effect to retrieve the token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      setToken(storedToken);
    }
    fetchcars();
  }, []);

  //   Useeffect to fetch user data when token is available
  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  const value = {
    navigate,
    currency,
    axios,
    user,
    token,
    setToken,
    setUser,
    setIsOwner,
    showLogin,
    setShowLogin,
    logout,
    cars,
    setCars,
    fetchUser,
    fetchcars,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    isOwner,
  };
  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};

export const useCarContext = () => {
  return useContext(CarContext);
};
