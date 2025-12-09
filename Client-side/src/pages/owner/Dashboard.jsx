import React, { useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/owner/Title";
import { useCarContext } from "../../Context/context";

const Dashboard = () => {
  const { axios, isOwner, currency } = useCarContext();

  const navigate = useNavigate();
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });
  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: assets.listIconColored,
    },
    {
      title: "Pending Bookings",
      value: data.pendingBookings,
      icon: assets.cautionIconColored,
    },
    {
      title: "confirmed",
      value: data.completedBookings,
      icon: assets.listIconColored,
    },
  ];

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/owner/dashboard");

      if (data.success) {
        setData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!isOwner) {
      fetchDashboardData();
    }
  }, [isOwner]);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Admin Dashboard"
        subTitle="Keep track of overall system performance, including the number of cars, booking volume, revenue generated, and recent platform events."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-4 rounded-md border border-borderColor "
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        {/* Rcent Bookings */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-semibold">Recent Bookings</h1>
          <p className="text-gray-500">Latest Customer Bookings</p>
          {data.recentBookings.map((booking, index) => (
            <div key={index} className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <img
                    src={assets.listIconColored}
                    className="h-5 w-5"
                    alt=""
                  />
                </div>
                <div className="">
                  <p>
                    {booking.car.brand} {booking.car.model}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.createdAt.split("T")[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <p className="text-sm text-gray-500">
                  [{currency}]{booking.price}
                </p>
                <p className="px-3 py-0.5 border border-borderColor rounded-full text-sm">
                  {booking.status}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Monthly Revenue */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md  w-full md:max-w-xs">
          <h1 className="text-lg font-medium">Monthly Revenue</h1>
          <p className="text-gray-500">Revenue Generated Monthly</p>
          <p className="text-3xl font-semibold text-primary">
            {currency}
            {data.monthlyRevenue}
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
