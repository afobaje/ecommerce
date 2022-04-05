import React from 'react'

const Products = ({name,desc}) => {
  return (
    <>
      <div>
        <img src="" alt="" />
        <p>{name}</p>
        <p>{desc}</p>
        <button>ADD TO CART</button>
      </div>  
    </>
  )
}

export default Products