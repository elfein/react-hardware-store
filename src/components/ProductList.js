import React, { Component } from 'react'
import Product from './Product';

class ProductList extends Component {
    render() {

        

        const productList = this.props.productList.map((product, i) => {
            // different ways to do this... can pass more values here for fewer later
            return <Product
                adminView={this.props.adminView}
                key={i}
                index={i}
                product={product}

                // passed the function and the array again
                addItemToCart={this.props.addItemToCart}
                cartList={this.props.cartList}
                deleteProductFromProductList={this.props.deleteProductFromProductList} />
        })

        return (
            <div>{productList}</div>
        )
    }
}

export default ProductList