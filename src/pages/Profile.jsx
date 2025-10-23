import React from "react";

const Profile = () => {
  const handleUpdateButton = () => {
    console.log("Update button clicked");
  };
  return (
    <div className="hero min-h-[60vh]">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 lg:w-xl shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-semibold mb-2 text-center">Profile</h1>

            <button
              className="btn mt-2 w-full"
              type="button"
              onClick={handleUpdateButton}
            >
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
