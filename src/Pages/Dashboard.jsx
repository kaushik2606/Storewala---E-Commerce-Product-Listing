import axios from "axios";
import React, { useEffect, useState } from "react";
import { addToCart } from "../CartSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        console.log(response);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1 className="h3 mb-1">Featured products</h1>
          <p className="text-secondary mb-0">Browse our latest products.</p>
        </div>
        <span className="badge text-bg-light border">
          {products.length} items
        </span>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4">
        {products.map((item) => {
          return (
            <div className="col" key={item.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item.thumbnail}
                  className="card-img-top product-image"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="h6 card-title">{item.title}</h2>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">${item.price}</span>
                    <span className="text-secondary">
                      Rating: {item.rating}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dashboard;
