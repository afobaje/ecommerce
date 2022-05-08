import React from "react";
import "../App.css";
import axios from "axios";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Universal } from "./global";

const Stocklist = () => {
  const [products, setProducts] = useState([]);

  const { show, setShow } = useContext(Universal);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const DelProduct = ({ id }) => {
    axios
      .delete(`http://localhost:3000/Products/${id}`)
      .then(() => {
        console.log("delete successful");
      })
      .catch((err) => {
        console.log(err, "delete failed");
      });
    let productid = id;
    setProducts(products.filter((ide) => ide.id !== productid));
  };

  return (
    <>
      <div
        className="table-body"
        style={{
          maxWidth: "80%",
          padding: "1em",
          objectFit: "contain",
        }}
      >
        <header>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <input
              type="search"
              placeholder="Search"
              name=""
              style={{
                width: "60%",
                padding: ".4em",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
              id=""
            />
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                flexDirection: "row",
                listStyle: "none",
                width: "40%",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  View your shop
                </a>
              </li>
              <li>Afobaje</li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <h2
              style={{
                width: "80%",
              }}
            >
              Orders
            </h2>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                listStyleType: "none",
                justifyContent: "space-around",
                alignItems: "stretch",
                width: "100%",
              }}
            >
              <li
                style={{
                  padding: ".5em",
                }}
              >
                Help
              </li>
              <li
                style={{
                  padding: ".5em",
                  borderRadius: "5px",
                  border: "1px solid gray",
                }}
              >
                Order Statistics
              </li>
              <li
                style={{
                  padding: ".5em",
                  backgroundColor: "rgb(169,222,227)",
                  borderRadius: "5px",
                }}
              >
                New Customer
              </li>
            </ul>
          </div>
        </header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <h3
            style={{
              width: "60%",
            }}
          >
            Orders({products.length})
          </h3>
          <div
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              padding: "1em",
            }}
          >
            <a>Filter</a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                padding: ".5em",
                border: "1px solid gray",
                color: "black",
                borderRadius: "5px",
              }}
            >
              Export Table
            </a>
            <a
              onClick={() => {
                setShow(!show);
              }}
              style={{
                textDecoration: "none",
                padding: ".5em",
                color: "black",
                borderRadius: "5px",
                border: "1px solid gray",
                cursor: "pointer",
              }}
            >
              Add Product
            </a>
          </div>
        </div>
        <table
          style={{
            border: "1px solid gray",
            width: "100%",
            padding: "1em",
            overflow: "hidden",
            margin: "1em",
            borderRadius: "5px",
            tableLayout: "fixed",
          }}
        >
          <thead>
            {/* <th>All</th> */}
            <th>ID</th>
            <th>NAME</th>
            <th>Reference</th>
            <th>Price</th>

            <th>Image</th>
            <th>Filter</th>
          </thead>
          <thead>
            {products.map(({ name, desc, price, id, image }) => {
              return (
                <tr key={id}>
                  {/* <td>
                    <input type="checkbox" name="" id="" />
                  </td> */}
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{desc}</td>
                  <td>₦{new Intl.NumberFormat().format(price)}</td>
                  <td
                    style={{
                      objectFit: "contain",

                      overflow: "auto",
                      padding: "1em",
                    }}
                    colSpan={1}
                    rowSpan={1}
                  >
                    <img
                      src={image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                      }}
                      alt=""
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      style={{
                        padding: "1em",
                        backgroundColor: "rgb(169,222,227)",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        margin: ".5em",
                        cursor: "pointer",
                      }}
                      value="DELETE"
                      onClick={() => DelProduct({ id })}
                    />
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </>
  );
};

export default Stocklist;

{
  /* <a
href="AddProduct"
style={{
  textDecoration: "none",
  padding: ".5em",
  color: "black",
  borderRadius: "5px",
  border: "1px solid gray",
}}
>
Add Product
</a> */
}
