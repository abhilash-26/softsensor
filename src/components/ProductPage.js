import React, { useEffect, useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import "./ProductPage.css";

const ProductPage = ({ addToCart }) => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setpageNumber] = useState(1);
  const [allProduct, setAllProduct] = useState([]);

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setpageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log("visible");
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading]
  );
  useEffect(() => {
    console.log(pageNumber, "page");
    const getData = async () => {
      setLoading(true);
      const result = await axios({
        method: "get",
        url: `http://localhost:8080/product/get-all-product?page=${pageNumber}&limit=5`,
      });
      console.log(result.data, "tttt");
      setLoading(false);
      setAllProduct(result.data);
      console.log(result.data, "da");
      console.log(allProduct, "all ");
    };
    getData();
  }, [pageNumber]);
  const observer = useRef();

  return (
    <div className="product_page_container">
      <p className="main_heading">Fresh stock</p>
      {/* <ProductCard allProduct={allProduct[4]} addToCart={addToCart} />
      <ProductCard allProduct={allProduct[3]} />
      <ProductCard allProduct={allProduct[1]} /> */}
      {allProduct.map((item, index) => {
        if (allProduct.length === index + 1) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              ref={lastProductRef}
            >
              <ProductCard
                // ref={lastProductRef}
                key={index}
                allProduct={item}
                addToCart={addToCart}
              />
            </div>
            // <div ref={lastProductRef}>{item.title}</div>
          );
        } else {
          return (
            <ProductCard key={index} allProduct={item} addToCart={addToCart} />
          );
        }
      })}
    </div>
  );
};

export default ProductPage;
