import React, { Component } from 'react'
import CartItem from './CartItem';

export default class ShoppingCart extends Component {
  render() {

    const cartList = this.props.cartList.map((item, i) => {
      return <CartItem 
      key={i}
      index={i}
      product={item}
      />
    })

    return (
      <div>
        <h2>Shopping Cart</h2>
        <div>{cartList}</div>
      </div>
    )
  }
}
