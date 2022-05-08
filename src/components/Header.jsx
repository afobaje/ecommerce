import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { Universal } from "./global";

const Header = () => {
  const universal=useContext(Universal)
  const cartQty=useSelector(state=>state.counter.products)
  return (
    <>
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
            <h2><Link to='/' style={{
              textDecoration:'none',
              color:'black'
            }}>Shopify</Link></h2>
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
            <li>
              <Link to={`/Items`} style={{
                textDecoration:'none',
                color:'black',
                backgroundColor:'#adeded',
                borderRadius:'30px',
                padding:'.7em',
                whiteSpace:'nowrap'

              }}>ADD TO CART({universal.val.length})</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
