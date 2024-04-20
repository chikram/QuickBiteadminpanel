import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List() {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="container m-3">
        <h5 className="text-center">All Foods List</h5>
        <table className="table">
          <thead>
            <tr className="mt-0 mb-0 border border-dark table-secondary">
              <th scope="col">Image</th>
              <th className="px-3" scope="col">
                Name
              </th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          {list.map((item, index) => {
            return (
              <tbody key={index}>
                <tr className="border border-dark">
                  <td>
                    <img
                      src={`${url}/images/` + item.image}
                      alt=""
                      width={50}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td className="px-4">
                    <FontAwesomeIcon
                      onClick={() => removeFood(item._id)}
                      icon={faTrash}
                      style={{ color: "#0c0d0d", cursor: "pointer" }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
