import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CarCard from "../components/CarCard";
import { useSearchParams } from "react-router-dom";
import { useCarContext } from "../Context/context";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import {motion} from "motion/react";

const Cars = () => {
  //getting search params from url
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get("pickupLocation");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");

  const { cars, axios } = useCarContext();

  const [input, setInput] = useState("");

  const isSearchData = pickupLocation && pickupDate && returnDate;
  const [filterCars, setFilterCars] = useState([]);

  const applyfilter = async () => {
    if (input === "") {
      setFilterCars(cars);
      return null;
    }
    const filtered = cars.slice().filter((car) => {
      return (
        car.brand.toLowerCase().includes(input.toLowerCase()) ||
        car.model.toLowerCase().includes(input.toLowerCase()) ||
        car.category.toLowerCase().includes(input.toLowerCase()) ||
        car.transmission.toLowerCase().includes(input.toLowerCase())
      );
    });
    setFilterCars(filtered);
  };

  const searchCarAvailability = async () => {
    const { data } = await axios.post("/api/bookings/check-availability", {
      location: pickupLocation,
      pickupDate,
      returnDate,
    });
    if (data.success) {
      setFilterCars(data.availableCars);
      if (data.availableCars.length === 0) {
        toast.error("No cars available");
      }
      return null;
    }
  };

  useEffect(() => {
    isSearchData && searchCarAvailability();
  }, []);

  useEffect(() => {
    cars.length > 0 && !isSearchData && applyfilter();
  }, [input, cars]);

  return (
    <div>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Available Cars"
          subTitle="Explore our collection of cars and find the perfect vehicle for your next adventure today"
        />
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3}}
        className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} alt="" className="w-4.5 h-4.5 mr-2" />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by brand, model, or features"
            className="w-full h-full outline-none text-gray-500"
          />

          <img src={assets.filter_icon} alt="" className="w-4.5 h-4.5 mr-2" />
        </motion.div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6,delay: 0.5 }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          Showing {filterCars.length} Cars
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 xl:px-20 max-w-7xl mx-auto gap-8">
          {filterCars.map((car, index) => (
            <motion.div
            initial={{ opacity: 0,y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 * index, duration: 0.4 }}
            key={index}>
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cars;
