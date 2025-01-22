import "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  

  return (
      <>
        
        <div className=" m-28 flex justify-between bg-red- ">
          <div className="flex gap-7 pl-7 items-center  shadow-lg w-60 h-36 text-gray-600">
            <div className="border rounded-full bg-green-100 p-2">
              <img
                className="w-12"
                src="/public/LeftColumn/real-estate (1) 1.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold  text-2xl">178+</h1>
              <h1 className="text-2xl">Property</h1>
            </div>
          </div>

          <div className="flex gap-7 pl-7 items-center  shadow-lg w-60 h-36 text-gray-600">
            <div className="border rounded-full bg-pink-100 p-2">
              <img
                className="w-12"
                src="/LeftColumn/Rectangle (2).png"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold  text-2xl">20+</h1>
              <h1 className="text-2xl">User</h1>
            </div>
          </div>

          <div className="flex gap-7 pl-7 items-center  shadow-lg w-60 h-36 text-gray-600">
            <div className="border rounded-full bg-pink-100 p-2">
              <img
                className="w-12"
                src="/public/LeftColumn/accountant 1.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold  text-2xl">190+</h1>
              <h1 className="text-2xl">Client</h1>
            </div>
          </div>
        </div>
        <div className="mt-16 m-32">
          <img src="/public/LeftColumn/Graph.png" alt="" />
        </div>
      </>
    
  );
};

export default Dashboard;
