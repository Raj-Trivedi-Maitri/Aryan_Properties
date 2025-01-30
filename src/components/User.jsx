import React from "react";

const User = () => {
  return (
    <div className="m-20">
      <div className="flex justify-between w-[40%] h-10 ">
        <div className="flex gap-4 items-center ">
          <img
            className="object-none"
            src="/LeftColumn/search-normal.png"
            alt=""
          />{" "}
          <input type="text" placeholder="search" />
        </div>
        <div className="flex gap-8">
          <img
            className="object-none"
            src="/public/LeftColumn/Frame 67.png"
            alt=""
          />
          <button className="bg-blue-900 text-2xl px-8 rounded-md text-white">
            Add
          </button>
        </div>
      </div>

      <table className="w-full text-center mt-12">
        <tr className="bg-blue-800 text-white h-12 ">
          <th className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </th>

          <th className="border"> Username</th>
          <th className="border-l-2 ">Email Address</th>
          <th className="border-l-2">Status</th>
          <th className="border-l-2">Password Change</th> 
          <th className="border-l-2"> Actions</th>
        </tr>

        {/* hjefwjebfwehf */}

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
      </table>
    </div>
  );
};

export default User;
