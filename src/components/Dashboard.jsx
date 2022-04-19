import React from "react";
import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

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
  };

  return (
    <div>
      <div
        className="panel-body"
        style={{
          display: "flex",
          // display:'grid',
          // gridTemplateColumns:'repeat(2,1fr)',
          height: "100vh",
          width: "100%",

          overflow: "none",
        }}
      >
        <div
          className="panel"
          style={{
            // padding: ".5em",
            // position:'fixed',
            width: "20%",
          }}
        >
          <div
            className="fixed"
            style={{
              backgroundColor: "rgb(251, 251, 251)",
              width:'17%',
              // padding:0,
              height:'100vh',
              position: "fixed",
            }}
          >
            <div
              style={{
                display: "flex",
                padding:'.5em'
              }}
            >
              <div
                className="img"
                style={{
                  height: "1.5em",
                  width: "1.5em",
                  padding: ".5em",
                  backgroundColor: "#f1e7e7",
                  borderRadius: "100%",
                  marginRight: ".5em",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  padding: 0,
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Shopify
                </span>
                <span
                  style={{
                    padding: 0,
                  }}
                >
                  Afobaje
                </span>
              </div>
            </div>
            <ul
              style={{
                listStyleType: "none",
                marginTop: "4em",
              }}
            >
              <li
                style={{
                  paddingBottom: "1.5em",
                }}
              >
                Dashboard
              </li>
              <li
                style={{
                  paddingBottom: "1.5em",
                }}
              >
                Orders
              </li>
              <li
                style={{
                  paddingBottom: "1.5em",
                }}
              >
                Catalogue
              </li>
              <li
                style={{
                  paddingBottom: "1.5em",
                }}
              >
                Customers
              </li>
              <li
                style={{
                  paddingBottom: "1.5em",
                }}
              >
                Shipping
              </li>
              <li
                style={{
                  paddingBottom: "1.5em",
                }}
              >
                Payments
              </li>
              <li
                style={{
                  paddingBottom: "1.5em",
                }}
              >
                Configuration
              </li>
            </ul>
          </div>
        </div>
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
              <th>All</th>
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
                  <tr key={id} >
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{desc}</td>
                    <td>${new Intl.NumberFormat().format(price)}</td>
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
      </div>
    </div>
  );
};

export default Dashboard;
