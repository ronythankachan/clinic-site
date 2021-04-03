import React,{useState, useEffect } from 'react'
import './CartPage.css'
import CartItem from '../components/CartItem'
import { Button } from 'react-bootstrap'
import backend from '../axios'

const CartPage = () => {
    const [cart, setCart] = useState([])
    const [total,setTotal] =useState(0)

    useEffect(()=>{
        var userId = "602bd642603494016ba038c2" // User ID for Rony
        backend.post('/api/get_cart_items',{userId:userId})
        .then((response)=>{
            setCart(response.data)
            var sum=0
            response.data.map(item=>{
                sum+=item.quantity*item.price
            })
            console.log(sum)
            setTotal(sum)
        },(error)=>{
            console.log(error)
        })
    },[])

    const cartItems = cart.map(item => {
        return <CartItem data={item} key={item.medicineId} total={total} setTotal={setTotal}/>
    })

    return (
        <div className="cartpage">
            {cartItems}
            <h3>Amount: {total}</h3>
            {cart.length>0?<Button variant="info">Proceed to checkout</Button>:null}
        </div>
    )
}

export default CartPage
