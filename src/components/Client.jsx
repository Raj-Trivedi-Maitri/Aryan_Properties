import React from 'react'

const Client = () => {
  return (
    <div >
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

      <table className="w-full text-center mt-12 overflow-x-auto min-w-[2000px]">
        <tr className="bg-blue-800 text-white h-12 ">
          <th className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </th>

          <th className="border"> EntryCODE</th>
          <th className="border ">LINKTRY</th>
          <th className="border">CATCODE</th>
          <th className="border">STYPE</th>
          <th className="border">BUILTUP </th>
          <th className="border">CARPET </th>
          <th className="border">RATEBUY</th>
          <th className="border">RATELEASE</th>
          <th className="border">BUCRATIO</th>
          <th className="border">FLOOR</th>
          <th className="border">REMARKS</th>
          <th className="border">USERID</th>
          <th className="border">EDITDATE</th>
        </tr>

        <tr>
          <td className="p-4">
            <input className="h-4 w-4" type="checkbox" name="" id="" />
          </td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
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
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
          <td>Cell text</td>
        </tr>
      </table>
    </div>
  )
}

export default Client
