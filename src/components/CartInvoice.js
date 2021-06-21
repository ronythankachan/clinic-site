import React from 'react'
import './CartInvoice.css'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const CartInvoice = ({total,delivery}) => {
    const history = useHistory()
    const checkOut = () =>{
        history.push({
            pathname:'/checkout',
            state:{
                total:total,
                delivery: delivery,
            }
        })
    }
    return (
        <div className="cartinvoice">
            <div className="cartinvoice__item">
                <p>Amount</p>
                <p>Rs. {total}</p>
            </div>
            <div className="cartinvoice__item">
                <p>Delivery</p>
                <p>Rs. {delivery}</p>
            </div>
            <div className="cartinvoice__item">
                <h4>Sub-total</h4>
                <h4>Rs. {total+delivery}</h4>
            </div>
            <div className="checkout__btn">
                <Button variant="success" onClick={checkOut}>Checkout</Button>
            </div>
        </div>
    )
}

export default CartInvoice
