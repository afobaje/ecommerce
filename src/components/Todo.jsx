import axios from 'axios'
import React, { useState, useEffect} from 'react'

export default function Todo() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
      fetch('http://localhost:3000/Products').then(res => res.json()).then(data => {
          console.log(data)
          setTodos(data)
      })
    
      
    }, [])
    
    const deletetodo = todo  => {
        console.log('deleting todo---', todo)
        return () => {
            axios.delete(`http://localhost:3000/Products/${todo.id}`)
            .then(() => {
                console.log('delete successful')
            })
            .catch(() => {
                alert('delete failed')
            })
        }

    }
    const addproducts=Products=>{
        console.log('adding products',Products)
        return () =>{
            axios.post(`http://localhost:3000/Products`,{
                title:'an handwoven gucci bag',
                name:'bag',
                price:'100',
                category:'accessories',
                desc:'gucci bag'
            })
            .then(()=>{
                console.log('product added',Products)
            })
            .catch((error)=>{
                console.log('error',error.message)
            })
        }
    }
    return (
        <>
        <button onClick={addproducts()}>ADD PRODUCTS</button>
        <ul>
            {todos.map(todo => {
                return (
                    <li>
                        {todo.price}{todo.desc}{todo.amount}
                        <button onClick={deletetodo(todo)}>DELETE</button>
                        <button onClick={addproducts(todo)}>ADD PRODUCTS</button>
                    </li>
                  
                )
            })}
            {JSON.stringify(todos)}
        </ul>
        </>
    )
}