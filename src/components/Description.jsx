import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "./Layout";
import { Universal } from "./global";

const Product = () => {
  const { val, setVal } = useContext(Universal);
  let params = useParams();

  const [desc, setDesc] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(() => {
    let itemIncart = getItemInCart();

    console.log('an item in cart',itemIncart)
    if (itemIncart) {
      return itemIncart.item;
    }
    return 1;
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Products/${params.id}`)
      .then((res) => {
        return setDesc(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let loading = desc === null;

  // const uni = useContext(Universal);

  let countHandler = (e) => {
    if (e.target.textContent == "-") {
      if (count <= 1) {
        setDisabled(true);
      } else {
        setCount((prev) => prev - 1);
      }
    } else if (e.target.textContent == "+") {
      setCount((prev) => prev + 1);
    }

    return setDisabled(false);
  };

  function getItemInCart() {
    for (let item of val) {
      if (item.id == params.id) {
        return item;
      }
    }
    return null;
  }

  function cartHandler() {
    let item  = getItemInCart();
    if (item) {
      // update item quantity
      let newVal = val.map((item) => {
        if (item.id === desc.id) {
          return {
            ...item,
            item: count,
          };
        } else {
          return item;
        }
      });

      setVal(newVal);
    } else {
      // add item
      setVal([...val, { ...desc, item: count }]);
    }
  }

  return (
    <>
      <Layout>
        {loading ? (
          <span>loading...</span>
        ) : (
          <div
            className="des-body"
            style={{
              display: "flex",
              padding: "2rem 1rem",
            }}
          >
            {desc && (
              <>
                <div
                  style={{
                    maxWidth: "40%",
                    maxHeight: "40%",
                    objectFit: "contain",
                  }}
                >
                  <img
                    src={desc.image}
                    alt={desc.desc}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div
                  className="desc"
                  style={{
                    padding: "1em",
                  }}
                >
                  <h2>{desc.name}</h2>
                  <span>{desc.desc}</span>
                  {desc.price !== "" ? (
                    <span>
                      <h3>₦{new Intl.NumberFormat().format(desc.price)}</h3>
                    </span>
                  ) : null}
                  <div
                    style={{
                      display: "flex",
                      padding: "1em",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <button
                      onClick={(e) => countHandler(e)}
                      disabled={disabled}
                      style={{
                        backgroundColor: "#a9dee3",
                        border: "1px solid #a9dee3",
                      }}
                    >
                      -
                    </button>
                    <span>{count}</span>
                    <button
                      onClick={(e) => countHandler(e)}
                      style={{
                        backgroundColor: "#a9dee3",
                        border: "1px solid #a9dee3",
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    disabled={load}
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      border: "none",
                      fontWeight: "bolder",
                      fontSize: "17px",
                      backgroundColor: "#a9dee3",
                      padding: "1em",
                      cursor: "pointer",
                      width: "12em",
                      borderRadius: "5px",
                    }}
                    onClick={() => {
                      cartHandler();
                    }}
                  >
                    {/* ADD TO CART */}
                    {load ? "loading" : "ADD TO CART"}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </Layout>
    </>
  );
};

export default Product;
