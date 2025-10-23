import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";

const Experts = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/expertsList.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  if (doctors.length === 0) return null;

  return (
    <div className="md:mt-6">
      <h1>
        Meet Our <span className="text-amber-600">Vet Experts</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doctor) => (
          <div
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:animate__animated hover:animate__pulse"
            key={doctor.id}
          >
            <figure className="relative w-full aspect-square aspect-[2/3] 3md:aspect-[2/4] overflow-hidden rounded-2xl">
              <img
                src={doctor.image}
                alt={doctor.doctorName}
                className="absolute inset-0 w-full h-full object-cover p-2 rounded-2xl"
                loading="lazy"
              />
            </figure>
            <div className="card-body py-1">
              <h2 className="card-title text-2xl">{doctor.name}</h2>
              <div className="font-semibold text-sky-600">
                {doctor.specialty} ({doctor.experience})
              </div>
              <p className="mb-2">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
