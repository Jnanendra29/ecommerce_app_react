import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import loadingGif from "../assets/Lottie Lego.gif"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://interveiw-mock-api.vercel.app/api/getProducts"
      );
      setProducts(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred: ", error);
      setLoading(false);
    }
  };

  console.log("Products: ", products);

  return (
    <div style={{ position: "relative" }}>
      {/* Loading GIF */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <img src={loadingGif} alt="Loading..." style={{ width: 150, height: 150 }} />
        </div>
      )}

      {/* Button (only visible if no products and not loading) */}
      {!loading && products.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button
            onClick={fetchProducts}
            style={{
              padding: "10px 20px",
              fontSize: "1.25rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "fit-content"
            }}
          >
            Load Products
          </button>
        </div>
      )}

      {/* Product List */}
      <div className="product-list content">
        {products.length > 0 &&
          products.map((item, index) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default ProductList;
