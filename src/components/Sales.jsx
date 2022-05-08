import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Universal } from "./global";
import Layout from "./Layout";

const Sales = () => {
  let { val, setVal } = useContext(Universal);
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          padding: "1em",
          flexDirection: "column",
        }}
      >
        <h4>Hooray! you have successfully purchased your items:</h4>
        
        <h3
          style={{
            marginTop: "1em",
          }}
        >
          <Link
            to="/"
            onClick={() => {
              setVal([]);
            }}
            style={{
              padding: "1.5em",
              backgroundColor: "rgb(169,222,227)",
              borderRadius: "5px",
              textDecoration: "none",
              color: "black",
            }}
          >
            Continue Shopping
          </Link>
        </h3>
      </div>
    </Layout>
  );
};

export default Sales;
