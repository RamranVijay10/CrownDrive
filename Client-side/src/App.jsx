import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MyBooking from "./pages/MyBooking";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import Footer from "./components/Footer";
import Dashboard from "./pages/owner/Dashboard";
import ManageCar from "./pages/owner/ManageCar";
import ManageBooking from "./pages/owner/ManageBooking";
import AddCar from "./pages/owner/AddCar";
import Layout from "./pages/owner/Layout";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useCarContext } from "./Context/context";

const App = () => {
  const { showLogin } = useCarContext();
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
      <Toaster />
      {showLogin && <Login />}

      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-cars" element={<ManageCar />} />
          <Route path="manage-bookings" element={<ManageBooking />} />
          <Route path="add-car" element={<AddCar />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
