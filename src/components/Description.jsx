import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";

const Description = ({ Image }) => {
  let params = useParams();
  const [desc, setDesc] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        return setDesc(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let loading = desc === null;
  console.log({ loading });

  return (
    <>
      <Header />

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
          {/* <header>
          <button>Cart</button>
        </header> */}
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
                    <h3>${new Intl.NumberFormat().format(desc.price)}</h3>
                  </span>
                ) : null}
                <button
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
                >
                  CHECKOUT
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Description;
