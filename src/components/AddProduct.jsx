import axios from "axios";
import "../App.css";
import React from "react";
import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";

const AddProduct = () => {
  const [img, setImg] = useState([]);
  const [loading,setLoading]=useState('')
  const [clicked,setClicked]=useState(false)
  // const [imglink, setImgLink] = useState("");
  // const [desc, setDesc] = useState("");
  // const [price, setPrice] = useState("");
  // const [name, setName] = useState("");

  const [details, setDetails] = useState({
    imgUrl: [],
    desc: "",
    price: "",
    name: "",
  });

  const accessKey = "VgOxJcWR2EZ7-vgUGZIITk6BgJf72J_mHo_ubRT-KPw";

  const catalogue = (e) => {
    let a = e.target.value;
    let attribute = e.target.getAttribute("name");
    if (attribute == "product-name") {
      setDetails({
        ...details,
        name: a,
      });
    } else if (attribute == "product-desc") {
      setDetails({
        ...details,
        desc: a,
      });
    } else if (attribute == "product-price") {
      if (!isNaN(a)) {
        setDetails({
          ...details,
          price: a,
        });
      }
    }
  };

  const Imghandler = (e) => {
   
    let a = e.target.src;
    let b = [];
    b.push(a);
    // e.target.style.border = "4px solid green";
    e.target.style.border = `${clicked ? "4px solid green":""}`;
    
    setDetails({
      ...details,
      imgUrl: [...details.imgUrl, ...b],
    });
    let c = details.imgUrl.filter((img) => img !== a);
    // setDetails({
    //   ...details,
    //   imgUrl:c
    // })

    console.log(c);
    setClicked(!clicked)
  };

  const unsplash = createApi({
    accessKey,
  });

  const addProduct = () => {
    setLoading(true)
    return axios
      .post(`http://localhost:3000/Products`, {
        name: details.name,
        price: details.price,
        image: details.imgUrl,
        desc: details.desc,
      })
      .then((res) => {
        setLoading(false)
        console.log("posted an item", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    
    unsplash.search
      .getPhotos({ query: details.name, orientation: "landscape" })
      .then((result) => {
        // console.log(result.response.results);
        setImg(result.response.results);
      })
      .catch((err) => {
        console.log("something went wrong!", err);
      });
  }, [details.name]);

  // console.log(details);
  return (
    <>
      <div
        className="body"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30em",
            padding: "1em",
            height: "15em",
            gridTemplateAreas: "span 1",
            marginTop: "9em",
          }}
        >
          <p>Add an item to store</p>
          <fieldset
            style={{
              padding: "1em",
              height: "100%",
              width: "70%",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            <form action="" method="POST">
              <label htmlFor="product-name">Name</label>
              <input
                type="text"
                style={{
                  width: "80%",
                  borderRadius: "5px",
                  border: "1px solid black",
                  marginBottom: ".5em",
                  marginLeft: ".5em",
                  padding: "1em",
                }}
                // value={details.name}
                onChange={(e) => {
                  catalogue(e);
                }}
                name="product-name"
                placeholder="Product Name"
              />
              <label htmlFor="product-desc">Desc</label>
              <input
                type="text"
                name="product-desc"
                // value={details.desc}
                onChange={(e) => {
                  catalogue(e);
                }}
                placeholder="Product description"
                style={{
                  width: "80%",
                  marginLeft: ".5em",
                  borderRadius: "5px",
                  marginBottom: ".5em",
                  border: "1px solid black",
                  padding: "1em",
                }}
              />
              <label htmlFor="product-price">price</label>
              <input
                type="text"
                style={{
                  width: "80%",
                  borderRadius: "5px",
                  marginBottom: ".5em",
                  border: "1px solid black",
                  padding: "1em",
                  marginLeft: ".5em",
                }}
                placeholder="Price"
                name="product-price"
                onChange={(e) => {
                  catalogue(e);
                }}
              />

              <input
                type="button"
                value="ADD PRODUCT"
                disabled={loading}
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  border: "none",
                  fontWeight: "bolder",
                  fontSize: "17px",
                  backgroundColor: "#a9dee3",
                  padding: ".5em",
                  cursor: "pointer",
                  width: "12em",
                  borderRadius: "5px",
                }}
                onClick={() => addProduct()}
              />
            </form>
          </fieldset>
        </div>
        <div
          className="inp-search"
          style={{
            padding: "1em",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gridGap: ".5em",
              height: "100vh",
              overflow: "auto",
              // padding:'.5em'
            }}
          >
            {img &&
              img.map((val, i) => {
                return (
                  <div key={i}>
                    <img
                      src={val.urls.small}
                      alt={val.alt_description}
                      onClick={(e) => {
                        Imghandler(e);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
