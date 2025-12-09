import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCarContext } from "../../Context/context";

const AddCar = () => {
  const { axios, currency } = useCarContext();

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    description: "",
    transmission: "",
    fuel_type: "",
    seat_capacity: 0,
    location: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return null;
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("carData", JSON.stringify(car));
      const { data } = await axios.post("/api/owner/add-car", formData);
      if (data.success) {
        toast.success(data.message);
        setImage(null);
        setCar({
          brand: "",
          model: "",
          year: 0,
          pricePerDay: 0,
          description: "",
          transmission: "",
          fuel_type: "",
          seat_capacity: 0,
          location: "",
          category: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and features."
      />
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* Car Image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 cursor-pointer rounded"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              hidden
            />
          </label>
          <p className="text-sm text-gray-500">Upload a car image</p>
        </div>
        {/* Car Brand & Model  */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              type="text"
              placeholder="e.g. BMW ,Lamborghini, Audi...."
              required
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              type="text"
              placeholder="e.g. BMW M5 , Lamborghini Aventador, Audi R8...."
              required
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>
        {/* Car Year , Price & Category*/}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              type="number"
              placeholder="e.g. 2025"
              required
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Price Per Day ({currency})</label>
            <input
              type="number"
              placeholder="e.g. 100000"
              required
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Coupe">Coupe</option>
            </select>
          </div>
        </div>
        {/* Car Transmission, Fuel Type, Seating Capacity */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.transmission}
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
            >
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.fuel_type}
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Gas">Gas</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              type="number"
              placeholder="e.g. 4"
              required
              className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
              value={car.seat_capacity}
              onChange={(e) =>
                setCar({ ...car, seat_capacity: e.target.value })
              }
            />
          </div>
        </div>
        {/* Car Location */}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select
            className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
            value={car.location}
            onChange={(e) => setCar({ ...car, location: e.target.value })}
          >
            <option value="">Select Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Haridwar">Haridwar</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Ballia">Ballia</option>
            <option value="Saharanpur">Saharanpur</option>
            <option value="Rishikesh">Rishikesh</option>
          </select>
        </div>

        {/* Car Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            rows="4"
            placeholder="e.g. This is a car description..."
            required
            className="px-3 py-2 border border-borderColor rounded-md mt-1 outline-none"
            value={car.description}
            onChange={(e) => setCar({ ...car, description: e.target.value })}
          ></textarea>
        </div>

        <button className="px-4 py-2.5 flex items-center gap-2 mt-4 text-white rounded-md bg-primary font-medium w-max cursor-pointer">
          <img src={assets.tick_icon} alt="" />
          {isLoading ? "Adding..." : "Add Your Car"}
        </button>
      </form>
    </div>
  );
};
export default AddCar;
