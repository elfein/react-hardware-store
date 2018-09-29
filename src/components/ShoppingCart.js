import React, { Component } from 'react'
import CartItem from './CartItem';

export default class ShoppingCart extends Component {

  render() {
    let total = 0

    const cartList = this.props.cartList.map((item, i) => {
      total+=(Number.parseFloat(item.price))
      return <CartItem 
      key={i}
      index={i}
      product={item}
      deleteItemFromCart={this.props.deleteItemFromCart}
      />
    })

    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>Price: {total}</div>
        <div>{cartList}</div>
      </div>
    )
  }
}
