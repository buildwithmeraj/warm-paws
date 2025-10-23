import { useParams, Link } from "react-router";
import Loading from "../components/Loading";
import Error from "../components/Error";
import React, { useContext, useEffect, useState } from "react";
import ErrorImage from "../components/ErrorImage";
import { BiSolidCategory } from "react-icons/bi";
import { PiFlagBannerFill } from "react-icons/pi";
import { MdPriceCheck } from "react-icons/md";
import { HiMiniTicket } from "react-icons/hi2";
import { MdReviews } from "react-icons/md";
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
        <h1 className="">
          <span className="text-amber-600">Services</span> Details
        </h1>
        <div className="">
          <div
            className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            key={service.serviceId}
          >
            <figure>
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-[600px] object-cover p-4 rounded-3xl"
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
                  <MdPriceCheck />
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
                action=""
                className="grid grid-cols-2 gap-2 w-full my-2"
                onSubmit={handleForm}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input w-full"
                    defaultValue={user?.displayName || ""}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input w-full"
                    defaultValue={user?.email || ""}
                  />
                </div>
                <div className="text-center col-span-2 mt-2">
                  <button
                    className="btn btn-info w-full rounded-lg text-white"
                    type="submit"
                  >
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
