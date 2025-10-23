import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { MdTipsAndUpdates } from "react-icons/md";

const Tips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/winterTips.json")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  if (tips.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-2xl text-center mb-4">
        <span className="text-amber-600">Winter Care Tips</span> for Your
        Favourite Paws
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mb-2">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="p-4 shadow-sm hover:shadow-md rounded-lg bg-gradient-to-r from-sky-200 to-blue-100 bg-white/80 backdrop-blur-sm"
          >
            <div className="font-semibold flex items-center gap-2 mb-2 text-lg">
              <MdTipsAndUpdates />
              {tip.title}
            </div>
            <div>{tip.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
