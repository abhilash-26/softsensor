import React, { useState, useEffect } from "react";
import axios from "axios";

export default function customHook(query, pageNumber) {
  useEffect(() => {
    const getData = async () => {
      const result = await axios({
        method: "get",
        url: `http://localhost:8080/product/get-all-product?page=${pageNumber}&limit=5`,
      });
      console.log(result);
      setAllProduct(result.data);
    };
    getData();
  }, [pageNumber]);

  return null;
}
