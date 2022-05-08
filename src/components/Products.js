import React from "react";
import { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Universal } from "./global";

const Products = ({ img, name, price, id, item = 1 }) => {
  let universal = useContext(Universal);

  const handler = () => {
    universal.setVal([...universal.val, { id, img, name, price, item }]);
  };

  return (
    <>
      <Link
        to={`/Product/${id}`}
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
          // onClick={()=>handler()}
        >
          <div
            style={{
              maxWidth: "auto",
              maxHeight: "70%",
              objectFit: "cover",
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
              ₦{new Intl.NumberFormat().format(price)}
            </p>
            <Link
              to={`/Product/${id}`}
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
              onClick={() => handler()}
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
