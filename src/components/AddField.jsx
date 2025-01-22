import React from "react";

const AddField = () => {
  return (
    <div className="m-20">
      <div className="flex justify-between w-[70%] ">
        

        <div className="shadow-md  px-20 py-5">
            Property type
        </div>

        <div className="shadow-md px-20 py-5">
            Description
        </div>

         
          <button className=" shadow-md bg-blue-900 text-2xl px-12 rounded-md text-white">
            Add
          </button>

      </div>

      <table className="w-1/2 text-center mt-12 w-">
        <tr className="bg-blue-800 text-white h-12 ">
          

          <th className="border"> ID</th>
          <th className="border-l-2 ">Name</th>
          
        </tr>

        <tr>
         
          <td>Cell text</td>
          <td>Cell text</td>

        </tr>

        
      </table>
    </div>
  );
};

export default AddField;
