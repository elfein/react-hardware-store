import React, { Component } from 'react'

class Product extends Component {

    deleteProduct = (event) => {
        event.preventDefault()
        this.props.deleteProductFromProductList(this.props.index)
    }

    // added a function to handle the click event
    buyProduct = (event) => {
        event.preventDefault()
        this.props.addItemToCart(this.props.index)
    }

    render() {
        const productName = this.props.product.productName
        const description = this.props.product.description
        const price = this.props.product.price

        return (
            <div >
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>

                {this.props.adminView ? 
                <button onClick={this.deleteProduct}>Delete</button> : 
                <button onClick={this.buyProduct}>Buy</button>}

            </div>
        );
    }
}

export default Product