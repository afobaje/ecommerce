import React from 'react'

const Header = () => {
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
          
        </header>
    </>
  )
}

export default Header;