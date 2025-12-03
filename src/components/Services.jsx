import Loading from "./Loading";
import Error from "./Error";
import React, { useEffect, useState } from "react";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { HiMiniTicket } from "react-icons/hi2";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router";
import { BiSolidDetail } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import ServiceCard from "./ServiceCard";

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
      <h1 className={button ? "mt-6 mb-6" : "mb-6"}>
        Our <span className="text-accent">Services</span>
      </h1>
      {!button && (
        <p className="mb-6 text-gray-600 px-3 text:md lg:text-xl lg:text-center">
          Explore our wide range of services designed to keep your furry friends
          happy and healthy even in the winter.
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard service={service} key={service.serviceId} />
        ))}
      </div>
      {button && (
        <div className="py-6 text-center">
          <NavLink to="/services" className="btn btn-secondary text-white">
            <CgMoreO />
            More Services
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Services;
