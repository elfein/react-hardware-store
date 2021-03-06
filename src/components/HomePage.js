import React, { Component } from 'react'
import AdminView from './AdminView';
import ShopView from './ShopView';

class HomePage extends Component {
    state = {
        displayAdminView: true,
        itemCurrentlyOnSale: "A Hammer",
        editSaleItem: false,
        productList: [
            {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
            },
            {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
            }
        ],
        // 1. we added this empty array
        cartList: []
    }

    addNewProductToProductList = (product) => {
        //take it out -- the ... is important!!
        const productList = [...this.state.productList]
        //change it
        productList.push(product)
        //put it back
        this.setState({ productList })
    }

    deleteProductFromProductList = (index) => {
        const productList = [...this.state.productList]
        productList.splice(index, 1)
        this.setState({ productList })
    }


    // 2. we made this function that will "add" or push an item into the empty cartList. The item is "cloned" from the productList
    addItemToCart = (index) => {
        let boughtItem = this.state.productList[index]

        // take
        const cartList = [...this.state.cartList]
        // change
        cartList.push(boughtItem)
        // put back
        this.setState({ cartList })
    }

    toggleEditfunction = () => {
        this.setState({
            editSaleItem: !this.state.editSaleItem
        })
    }

    toggleDisplayAdminView = () => {
        this.setState({
            displayAdminView: !this.state.displayAdminView
        })
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({ itemCurrentlyOnSale })
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>Currently on Sale: {this.state.itemCurrentlyOnSale}!</div>
                <span><button onClick={this.toggleEditfunction}>
                    {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                </button></span>
                <div>
                    {this.state.editSaleItem ?
                        <input type="text"
                            value={this.state.itemCurrentlyOnSale}
                            onChange={this.handleItemCurrentlyOnSaleChange} /> :
                        null}
                </div>
                <div><button onClick={this.toggleDisplayAdminView} >Show {this.state.displayAdminView ? 'Shop View' : 'Admin View'}</button></div>


                {this.state.displayAdminView ?

                    <AdminView productList={this.state.productList}
                        addNewProductToProductList={this.addNewProductToProductList}
                        deleteProductFromProductList={this.deleteProductFromProductList} /> :

                    <ShopView productList={this.state.productList}
                        // 3. we passed the new function and cartList array DOOOOOOOWN
                        addItemToCart={this.addItemToCart}
                        cartList={this.state.cartList} />}


            </div>
        )
    }
}

export default HomePage