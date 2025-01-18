import React, { useState } from "react";
import {
  clientUrl,
  tableHeader,
  databaseColumnNames,
} from "../utilities/constants.js";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import useEmpForm from "../Hooks/useEmpForm.js";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const EmpDataContainer = ({
  refresh,
  setRefresh,
  setIsFormOpen,
  setIsUpdate,
  setSingleEmpData,
}) => {
  const [empData, setEmpData] = useState(null); // null aesehi rakh
  const [sortOrder, setSortOrder] = useState("ASC");

  useEffect(() => {
    getEmpData();
  }, [refresh /*This is dependency array */]);

  const getEmpData = async () => {
    const empResponseData = await fetch(`${clientUrl}/empdata`);
    const json = await empResponseData.json();
    // console.log(json);
    setEmpData(json);
  };

  // SORTING

  const handleSortData = async (index) => {
    const columnName = databaseColumnNames[index];
    const newOrder = sortOrder === "ASC" ? "DESC" : "ASC"; // toggle the order

    // Update the state
    setSortOrder(newOrder);

    // Fetch sorted data after the state update
    const empResponseData = await fetch(
      `${clientUrl}/sortData?column=${columnName}&order=${newOrder}`
    );
    const json = await empResponseData.json();
    setEmpData(json);
  };

  // DELETE

  const handleDelete = async (empId) => {
    try {
      console.log(empId);
      const response = await fetch(`${clientUrl}/deleteData`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ empId: empId }),
      });
      const res = await response.text();
      // alert(res)
      const random = Math.random();
      setRefresh(random);
    } catch (error) {
      console.log(`Unable to delete data...`);
    }
  };

  const handleUpdate = (item) => {
    // console.log(item);
    setSingleEmpData(item);
    setIsUpdate(true);
    setIsFormOpen(true);
  };

  // if(!empData) return <p>Loading......</p> // ----> This is better used for Shimmering effect

  return (
    <div className="my-3 px-3">
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            {tableHeader.map((theader, index) => (
              <th
                key={index}
                className="border border-black cursor-pointer hover:bg-gray-200"
                onClick={() => handleSortData(index)} // Trigger sorting
                title="Sort data"
              >
                {theader}
                <span className="">
                  <KeyboardArrowDownIcon
                    sx={{ fontSize: 12, color: "black" }}
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {empData &&
            empData.map((item) => {
              return (
                <tr key={item.empId}>
                  {Object.keys(item).map((tdData, i) => {
                    return (
                      <td className="border border-black text-center" key={i}>
                        {item[tdData]}
                      </td>
                    );
                  })}
                  <td className="border text-center space-x-3 border-black">
                    <span onClick={() => handleUpdate(item)}>
                      <CreateIcon className="cursor-pointer" />
                    </span>
                    <span onClick={() => handleDelete(item.empId)}>
                      <DeleteIcon className="cursor-pointer text-red-500" />
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmpDataContainer;
