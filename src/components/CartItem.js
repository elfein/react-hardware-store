import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const productName = this.props.product.productName
    const price = this.props.product.price

    return (
      <div>
          <h3>{productName}</h3>
          <div>{price}</div>
      </div>
    )
  }
}
