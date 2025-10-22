import { useParams, NavLink, Link } from "react-router";
import Loading from "./Loading";
import Error from "./Error";
import React, { useEffect, useState } from "react";
import ErrorImage from "./ErrorImage";

const ServiceDetails = () => {
  const id = useParams().id;

  const [serviceDetails, setServiceDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/servicesList.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setServiceDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("An unknown error occurred", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const service = serviceDetails.find((service) => service.serviceId == id);

  console.log(service);

  if (service) {
    return (
      <div className="m-4">
        <h1 className="">
          <span className="text-amber-600">Services</span> Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div>Slots:</div>
                  <div>{service.slotsAvailable}</div>
                </div>
                <div className="px-2 py-1 rounded-lg bg-amber-300 text-amber-900 flex items-center gap-1">
                  <div>Rating:</div>
                  {service.rating}
                </div>
                <div className="px-2 py-1 rounded-lg bg-green-300 text-green-900 flex items-center gap-1">
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
        </div>
        <div className="py-6 text-center">
          <NavLink
            to="/services"
            className="btn btn-success rounded-lg text-white"
          >
            More Services
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-[70vh] flex-col gap-4">
      <div className="text-center font-semibold text-3xl">
        <ErrorImage />
        <span className="text-amber-600">OOPS!</span> Service Not Found.
      </div>
      <div className="text-xl">
        The Service you are looking for cannot be found on the server. But don't
        worry, you can always go back to the{" "}
        <Link to="/services" className="text-amber-600 font-semibold">
          Services Page
        </Link>{" "}
        to find more services.
      </div>
    </div>
  );
};

export default ServiceDetails;
