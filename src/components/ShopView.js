import React, { Component } from 'react'
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

export default class ShopView extends Component {
  render() {
    return (
      <div>
        <h1>Shop View</h1>
        <h2>Products</h2>
        <ProductList
          adminView={false}
          productList={this.props.productList}
          // 4. we continued passing this array and function to where it was needed, now as "props" instead of "state"
          cartList={this.props.cartList}
          addItemToCart={this.props.addItemToCart} />

        <ShoppingCart
        // sgjhdkkdsjnlkjlhksajdjgk
          cartList={this.props.cartList} />
      </div>
    )
  }
}