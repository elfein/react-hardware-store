import React, { Component } from 'react'
import ProductList from './ProductList';
import ProductForm from './ProductForm';
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

class AdminView extends Component {
    render() {

        return (
            <StyledDiv>
                <div id="leftside">
                    <h1>Admin View</h1>
                    <h2>Products</h2>
                    <ProductList
                        adminView={true}
                        productList={this.props.productList}
                        deleteProductFromProductList={this.props.deleteProductFromProductList} />
                </div>
                <div id="rightside">
                    <h1>Create Product</h1>
                    <ProductForm addNewProductToProductList={this.props.addNewProductToProductList} />
                </div>
            </StyledDiv>
        );
    }
}

export default AdminView;