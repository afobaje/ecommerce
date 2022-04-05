import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import Products from "./Products";

// "https://fakestoreapi.com/products"

const ProductList = () => {
  let [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:3000/Products`)
    .then(res=>{
      console.log('another one',res.data)
      setProducts(res.data)
    })
  },[])
  
  return (
      <>
        <div style={{
          display:'flex',
          justifyContent:'space-evenly',
          flexWrap:'wrap'
        }}>
          {
            products.map(({name,desc})=>{
              return ( 
                <Products name={name} desc={desc}/>
               )
            })
          }
        </div>  
      </>
  );
};

export default ProductList;
