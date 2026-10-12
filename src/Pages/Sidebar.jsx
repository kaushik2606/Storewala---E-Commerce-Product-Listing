import axios from "axios";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [list, setList] = useState([]);

  const fetchList = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        console.log(response);
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (

    // Sidebar
    <aside className="card shadow-sm border-0 position-sticky" style={{ top: "5rem" }}>
      <div className="card-body">
        <h2 className="h5 mb-3 fw-bold">Product categories</h2>

        <ul className="sidebar-scroll list-group list-group-flush">
          {list?.map((item) => (
            <li
              key={item.slug}
              className="list-ui list-group-item px-0 py-2 border-0 text-dark"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
