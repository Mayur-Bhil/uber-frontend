import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="fixed h-10 w-10 bg-black text-white flex  top-2 left-2 font-medium cursor-pointer items-center justify-center bg-center rounded-full "
      >
        <i class="ri-home-9-fill"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover "
          src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex tracking-tighter items-center">
            <img
              className="h-14 w-14 bg-cover rounded-full "
              src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbGV8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <img
              className="h-18 w-18 bg-cover rounded-full"
              src="https://imgs.search.brave.com/D6W9rtW5V6wBy01_4nV3_-bQL1BupTU_-aT6q433o7k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAzLzMwLzA5/LzM2MF9GXzMwMzMw/MDk4Ml9NQ0swRndp/UzBlQ3ZWenZ0QTRB/d0k1MHVsRVFzOW95/TS5qcGc"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-lg font-medium">Mayur Bhil</h2>
            <h4 className="text-xl font-semibold -mt-2">SR05 4295</h4>
            <p className="text-sm text-gray-600 -mt-2">Maruti Suzuki </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col justify-center items-center">
          <div className="w-full my-5">
            <div className="flex items-center gap-4 my-2 border-b-[0.7px] border-black">
              <i className="text-lg ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A </h3>
                <p className="text-base text-gray-600">
                  Kakariya Talv,Ahemedabad
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-2  border-black">
              <i className="text-lg ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.20 </h3>
                <p className="text-base text-gray-600">
                  GPay , Phone pe , amazon , whatsapp
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            console.log("Ride Confirmed");
          }}
          className="w-full bg-green-500 rounded-xl font-semibold text-white "
        >
          Make payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
