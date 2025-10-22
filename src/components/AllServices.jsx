import Loading from "./Loading";
import Error from "./Error";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { HiMiniTicket } from "react-icons/hi2";
import { IoMdPricetags } from "react-icons/io";
import { NavLink } from "react-router";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/servicesList.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  return (
    <div className="m-4">
      <h1 className="">
        Our <span className="text-amber-600">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:animate__animated hover:animate__pulse"
            key={service.serviceId}
          >
            <figure>
              <img
                src={service.image}
                alt={service.serviceName}
                className="h-[350px] w-full object-cover p-4 rounded-3xl"
              />
            </figure>
            <div className="card-body py-1">
              <h2 className="card-title">
                {service.serviceName}
                <div className="badge badge-secondary">{service.category}</div>
              </h2>
              <div className="text-gray-500">{service.providerName}</div>
              <p>{service.description}</p>
              <div className="card-actions justify-center mb-2 gap-4">
                <div className="px-2 py-1 rounded-lg bg-blue-300 text-blue-900 flex items-center gap-1">
                  <HiMiniTicket />
                  <div>Slots:</div>
                  <div>{service.slotsAvailable}</div>
                </div>
                <div className="px-2 py-1 rounded-lg bg-amber-300 text-amber-900 flex items-center gap-1">
                  <FaStar />
                  <div>Rating:</div>
                  {service.rating}
                </div>
                <div className="px-2 py-1 rounded-lg bg-green-300 text-green-900 flex items-center gap-1">
                  <IoMdPricetags />
                  <div>Charge:</div>${service.price}
                </div>
              </div>
            </div>
            <div className="text-center m-4">
              <NavLink
                className="btn btn-info w-full rounded-lg text-white"
                to={`/services/${service.serviceId}`}
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
