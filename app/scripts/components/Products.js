import React, { useState } from "react";
import data from "../../../server/data";

const Products = (props) => {
  let productsearch = data.filter((item) => {
    if (
      item.name.toLowerCase().startsWith(props.searchkey) ||
      item.price.startsWith(props.searchkey) ||
      item.name.toLowerCase().split(" ")[1].startsWith(props.searchkey) ||
      (item.name.toLowerCase().split(" ")[2].startsWith(props.searchkey) &&
        props.searchkey != "")
    ) {
      return true;
    }
  });
  return (
    <div className="products-top ">
      <h1 className="heading text-center"> Products</h1>
      <h1 style={{ color: "#fff" }}>
        {productsearch.length} Products Available{" "}
      </h1>
      <div className="Products-container">
        <div className="product-card-main">
          {props.showProd && productsearch.length > 0
            ? productsearch.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="product-card">
                      <div>
                        <img
                          className="product-img"
                          alt="product-img"
                          src={data.picture}
                        />
                      </div>
                      <div>
                        {" "}
                        <h4> {data.name}</h4>
                      </div>
                      <div>
                        {" "}
                        <p> ${data.price}</p>
                      </div>
                      <div>
                        {" "}
                        <h5> {data.tags}</h5>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
export default Products;
