import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Dashboard = () => {
    const [products,setProducts]=useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/Products')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setProducts(data)
    //     })
    useEffect(()=>{
        axios.get(`http://localhost:3000/Products`)
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=>{
            console.error(err)
        })
    },[])

    const addproducts=()=>{
        
        return () =>{
            axios.post(`http://localhost:3000/Products`,{
                title:'an handwoven gucci bag',
                newClient:'yes',
                name:'bag',
                price:'100',
                category:'accessories',
                desc:'gucci bag',
                payment:'bank',
                status:'unpaid'
            })
            .then(()=>{
                console.log('product added')
            })
            .catch((error)=>{
                console.log('error',error.message)
            })
        }
    }

  return (
    <div>
        <header>
            <h2>Orders</h2>
            <nav>
                <a href="http://">Help</a>
                <a href="http://">Order Statistics</a>
                <a href="http://">New Customer</a>
            </nav>
        </header>
       <div>
        <h3>Orders({products.length})</h3>
        <span>
            <button>Filter</button>
            <input type="search" name="" id="" />
            <button>Export Table</button>
            <button onClick={addproducts()}>Add Product</button>
        </span>
       </div>

       <table style={{
           border:'1px solid black',
           width:'70%',
           padding:'1em',
           margin:'1em'
       }}>
           <thead>
               <th>All</th>
               <th>ID</th>
               <th>Reference</th>
               <th>New client</th>
               <th>Price</th>
               <th>Payment</th>
               <th>Status</th>
           </thead>
         
          
             
         
          
          
           <thead>
               {
                   products.map(({name,desc,title,newClient,price,payment,status,id})=>{
                       return (
                       <tr key={id}>
                           <td><input type="checkbox" name="" id="" /></td>
                           <td>{id}</td>
                           <td>{desc}</td>
                           <td>{newClient}</td>
                           <td>{price}</td>
                           <td>{payment}</td>
                           <td>{status}</td>
                        </tr>
                        
                       )
                   })
               }
           </thead>
          
           
        </table> 
    </div>
  )
}

export default Dashboard;

