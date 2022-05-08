import React from "react";
import Products from "./Products";
import Image from "./assets/photo-1645143151541-f78e21cae1e1-removebg-preview.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Layout from "./Layout";

const Cart = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Products`)
      .then((res) => {
        return setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Layout>
      <div
        className="cart-body"
        style={{
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            padding: ".5em",
          }}
        >          
          <div
            className="adsection"
            style={{
              width: "100%",
              height: "70vh",
              padding: "1em",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gridGap: ".5em",
            }}
          >
            <div
              className="desc"
              style={{
                gridTemplateArea: "span 1",
              }}
            >
              <div
                className="adflex"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeContent: "flex-start center",
                  alignItems: "flex-start",
                  padding: "3em",
                }}
              >
                <h3>Trendy Collection</h3>
                <h2>CLASSIC WITH NATURAL TWIST</h2>
                <p>
                  Take on the best competitive price with return on value and
                  free delivery. Our catalogue includes exclusive and hand made
                  products specially sourced for by our operations team who work
                  extremely hard to make sure only the best is procured
                </p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    backgroundColor: "#a9dee3",
                    padding: ".5em",
                    borderRadius: "37px",
                    color: "#000",
                    height: "1.7em",
                    fontWeight: "600",
                    width: "170px",
                    textAlign: "center",
                  }}
                >
                  Start Shopping
                </a>
              </div>
            </div>
            <div
              className="image-ad"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  backgroundColor: "#a9dee3",
                  width: "80%",
                  height: "30em",
                  borderRadius: "35px",
                  position: "relative",
                }}
              ></div>
              <div
                className="img"
                style={{
                  position: "absolute",
                }}
              >
                <img
                  src={Image}
                  alt=""
                  style={{
                    marginTop: "-5em",
                    position: "relative",
                    right: "40",
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        <div className="mainbody">
          <div
            className="new"
            style={{
              padding: "1em",
            }}
          >
            <h2>New Arrivals</h2>
            <div
              className="product-display"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                padding: "1em",
                gridGap: ".5em",
                rowGap: ".5em",
              }}
            >
              {product &&
                product.map(({ name, image, price, id }) => {
                  return (
                    <Products name={name} id={id} img={image} price={price} key={id.toString()} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Cart;
