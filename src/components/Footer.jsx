import React from "react";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
