import React from "react";
import Products from "./Products";
import Image from "./assets/photo-1645143151541-f78e21cae1e1-removebg-preview.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

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
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <span
              style={{
                width: "20%",
                padding: ".5em",
                marginTop: "-1.5em",
              }}
            >
              <h2>Shopify</h2>
            </span>
            <span
              style={{
                width: "30%",
                // padding:'.5em'
              }}
            >
              <input
                type="search"
                name=""
                id=""
                style={{
                  width: "100%",
                  padding: "1em",
                  marginTop: "1em",
                  borderRadius: "5px",
                  border: "1px solid gray",
                }}
              />
            </span>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                justifyContent: "space-evenly",
                width: "50%",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  BEST SELLERS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  ALL UNDER 30s
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  SIGN UP
                </a>
              </li>
              <li>ADD TO CART</li>
            </ul>
          </nav>
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
                  borderRadius: "30px",
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
                    <Products name={name} id={id} img={image} price={price} />
                  );
                })}
            </div>
          </div>
          <footer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                }}
              >
                <h2>Company</h2>
                <li>about us</li>
                <li>Join us</li>
                <li>faq</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                }}
              >
                <h2>Product</h2>
                <li>android</li>
                <li>ios</li>
              </ul>
            </div>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Made with love by{" "}
              <a
                href="http://twitter.com/afobaje_"
                style={{
                  textDecoration: "none",
                  color: "rgb(169,222,227)",
                }}
              >
                Afobaje
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Cart;
