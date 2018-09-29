import React, { Component } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
margin-top:20px;
input {
    width: 96%;
    margin: 3px 0;
}
[type~=submit] {
    background-color: #fff;
    margin: 3px 0;
    padding: 2px;
    border: 1px solid rgb(200,200,200);
    width: 100%;
}
`

class ProductForm extends Component {
    state = {
        newProduct: {

        }
    }

    handleNewProductChange = (event) => {
        const eventValue = event.target.value
        const eventName = event.target.name

        //take
        const newProduct = { ...this.state.newProduct }
        //change
        newProduct[eventName] = eventValue
        //put back
        this.setState({ newProduct })
    }

    addProduct = (event) => {
        // EXTREMELY IMPORTANT FOR FORMS!!
        event.preventDefault()
        this.props.addNewProductToProductList(this.state.newProduct)
    }

    render() {
        return (
            <StyledDiv>
                <form>
                    <div><input name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
                    <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
                    {/* cool number field manipulations here */}
                    <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
                    <div><input 
                    type="submit" 
                    value="Create New Product" 
                    onClick={this.addProduct} /></div>
                </form>
            </StyledDiv>
        )
    }
}

export default ProductForm