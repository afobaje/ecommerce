import React from "react";
// import Img from "./assets/arno-senoner-oCXVxwTFwqE-unsplash.jpg";
// import { useState, useEffect } from "react";
// import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
// import Description from "./Description";

const Products = ({ img, name, price, id }) => {
  return (
    <>
      <Link
        to={`/Description/${id}`}
        style={{
          textDecoration: "none",
          color: "#000",
        }}
      >
        <div
          className="ivh"
          style={{
            height: "25em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: ".6em",
            
          }}
        >
          <div
            style={{
              maxWidth: "auto",
              maxHeight: "70%",
              objectFit: "contain",
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <p>{name}</p>
            <p
              style={{
                fontWeight: "500",
              }}
            >
              ${new Intl.NumberFormat().format(price)}
            </p>
            <Link
              to={`/Description/${id}`}
              style={{
                justifyContent: "center",
                alignSelf: "center",
                textDecoration: "none",
                backgroundColor: "#a9dee3",
                padding: ".5em",
                // marginTop: "-2em",
                color: "#000",
                borderRadius: "5px",
              }}
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Products;
