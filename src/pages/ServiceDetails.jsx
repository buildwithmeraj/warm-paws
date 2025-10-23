import { useParams, Link } from "react-router";
import Loading from "../components/Loading";
import Error from "../components/Error";
import React, { useContext, useEffect, useState } from "react";
import ErrorImage from "../components/ErrorImage";
import { BiSolidCategory } from "react-icons/bi";
import { PiFlagBannerFill } from "react-icons/pi";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { HiMiniTicket } from "react-icons/hi2";
import { MdReviews } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const id = useParams().id;
  const { user } = useContext(AuthContext);

  const [serviceDetails, setServiceDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successful");
  };
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

  if (service) {
    return (
      <div className="m-4">
        <title>Service Details - WarmPaws</title>

        <h2 className="font-semibold text-4xl text-center mb-4">
          <span className="text-amber-600">Services</span> Details
        </h2>
        <div className="divider"></div>
        <div className="">
          <div
            className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            key={service.serviceId}
          >
            <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={service.image}
                alt={service.serviceName}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-3xl font-semibold">
                {service.serviceName}
              </h2>
              <div className="text-gray-500 text-lg mb-2 flex items-center gap-1">
                <BiSolidCategory />
                Category:{" "}
                <span className="font-semibold text-blue-400">
                  {service.category}
                </span>
              </div>
              <div className="text-gray-500 text-lg mb-2 flex items-center gap-1">
                <PiFlagBannerFill />
                By:{" "}
                <span className="font-semibold text-amber-500">
                  {service.providerName}
                </span>
              </div>
              <div className="text-xl flex items-center gap-2 mb-8 mt-4">
                {service.description}
              </div>
              <div className="mb-2">
                <div className="mb-4 text-xl flex items-center gap-1">
                  <BiSolidBadgeDollar />
                  Total Charge: ${service.price}
                </div>
                <div className="mb-4 text-xl flex items-center gap-1">
                  <HiMiniTicket />

                  <div>Slots Availabe:</div>
                  <div>{service.slotsAvailable}</div>
                </div>
                <div className="mb-4 text-xl flex items-center gap-1">
                  <MdReviews />
                  <div>Total Rating:</div>
                  {service.rating}/5
                </div>
              </div>
              <form
                onSubmit={handleForm}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full my-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  defaultValue={user?.displayName || ""}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                  defaultValue={user?.email || ""}
                />
                <div className="lg:col-span-2">
                  <button
                    className="btn btn-primary w-full rounded-lg text-white mt-2"
                    type="submit"
                  >
                    <FaRegCalendarCheck />
                    Book Service
                  </button>
                </div>
              </form>
            </div>
          </div>
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
