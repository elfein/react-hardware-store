import React, { Component } from 'react'
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
text-align: left;
h1 {
    border-bottom: 1px solid black;
    width: 100%;
    padding: 20px 0;
    margin: 0;
}
#leftside {
    width: 60%;
}
#rightside {
    width: 30%;
}
#leftside, #rightside{
    margin: 20px;
    padding: 20px;
    box-shadow: 2px 2px 5px rgb(90,90,90);
}
h3 {
    font-weight: 300;
    margin: 0;
}
`

export default class ShopView extends Component {
  render() {
    return (
      <StyledDiv>
        <div id="leftside">
          <h1>Shop View</h1>
          <h2>Products</h2>
          <ProductList
            adminView={false}
            productList={this.props.productList}
            // 4. we continued passing this array and function to where it was needed, now as "props" instead of "state"
            cartList={this.props.cartList}
            addItemToCart={this.props.addItemToCart} />
        </div>
        <div id="rightside">
          <ShoppingCart
            // sgjhdkkdsjnlkjlhksajdjgk
            cartList={this.props.cartList}
            deleteItemFromCart={this.props.deleteItemFromCart} />
        </div>
      </StyledDiv>
    )
  }
}