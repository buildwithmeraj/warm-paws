import Loading from "./Loading";
import Error from "./Error";
import React, { useEffect, useState } from "react";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { HiMiniTicket } from "react-icons/hi2";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router";
import { BiSolidDetail } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";

const Services = ({ button }) => {
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
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  return (
    <div>
      <h1 className={button ? "mt-6 mb-4" : "mb-4"}>
        Our <span className="text-amber-600">Services</span>
      </h1>
      {!button && (
        <p className="mb-6 text-gray-600 px-3 text:md lg:text-xl lg:text-center">
          Explore our wide range of services designed to keep your furry friends
          happy and healthy even in the winter.
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:animate__animated hover:animate__pulse"
            key={service.serviceId}
          >
            <figure className="relative w-full aspect-4/3 overflow-hidden rounded-3xl">
              <img
                src={service.image}
                alt={service.serviceName}
                className="absolute inset-0 w-full h-full object-cover p-2 rounded-2xl"
                loading="lazy"
              />
            </figure>
            <div className="card-body py-1 px-4">
              <h2 className="card-title">
                {service.serviceName}
                <div className="badge badge-secondary">{service.category}</div>
              </h2>
              <div className="text-gray-700 font-semibold">
                {service.providerName}
              </div>
              <p>{service.description}</p>
              <div className="card-actions justify-between gap-4">
                <div className="px-2 py-1 rounded-lg bg-blue-300 text-blue-900  hidden lg:flex items-center gap-1">
                  <HiMiniTicket />
                  <div>Slots:</div>
                  <div>{service.slotsAvailable}</div>
                </div>
                <div className="px-2 py-1 rounded-lg bg-amber-300 text-amber-900 flex items-center gap-1">
                  <MdReviews />
                  <div>Rating:</div>
                  {service.rating}
                </div>
                <div className="px-2 py-1 rounded-lg bg-green-300 text-green-900 flex items-center gap-1">
                  <BiSolidBadgeDollar />
                  <div>Charge:</div>${service.price}
                </div>
              </div>
            </div>
            <div className="text-center mx-3 mt-1 mb-4">
              <NavLink
                className="btn btn-primary w-full rounded-lg text-white"
                to={`/services/${service.serviceId}`}
              >
                <BiSolidDetail />
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      {button && (
        <div className="py-6 text-center">
          <NavLink
            to="/services"
            className="btn btn-primary rounded-lg text-white"
          >
            <CgMoreO />
            More Services
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Services;
