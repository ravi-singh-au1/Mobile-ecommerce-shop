import React, { Component } from "react";
import Product from '../components/Product'
import Title from './title'
import { storeProducts } from '../data';
import { ProductConsumer } from '../contex';
class ProductList extends Component {
    // state = {
    //     products: storeProducts,
    // }
    render() {
        // console.log(this.state.products)
        // console.log(this.props.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="product" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            // {/* <Product /> */ }

        )
    }
}
export default ProductList