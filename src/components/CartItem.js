import React, { Component } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding: 10px 0;
    border-top: 1px solid black;
    width: 100%;
`

export default class CartItem extends Component {
    removeProduct = (event) => {
        event.preventDefault()
        this.props.deleteItemFromCart(this.props.index)
    }

  render() {
    const productName = this.props.product.productName
    const price = this.props.product.price

    return (
      <StyledDiv>
          <h3>{productName}</h3>
          <div>{price}</div>
          <button onClick={this.removeProduct}>Remove</button>
      </StyledDiv>
    )
  }
}
