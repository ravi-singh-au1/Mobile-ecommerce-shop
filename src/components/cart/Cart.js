import React, { Component } from "react";
import { ProductConsumer } from "../../contex";
import Title from '../title';
import CartColumn from "./CartColumn"
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from './CartTotal';
// import { ProductConsumer } from "../../contex"
class Cart extends Component {
    render() {
        // const cart = this.props.cart;
        // console.log(cart);
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        console.log('cart', value.cart)
                        const { cart } = value;
                        // console.log('carttt', cart)
                        if (cart.length > 0) {
                            return <React.Fragment>
                                <Title name="your" title="cart" />
                                <CartColumn />
                                <CartList value={value}></CartList>
                                <CartTotal value={value}></CartTotal>
                            </React.Fragment>

                        }
                        else {
                            return <EmptyCart></EmptyCart>
                        }

                        // if (cart.lenght > 0) {
                        //     return (
                        //         <React.Fragment>
                        //             <Title name="your" title="cart" />
                        //             <CartColumn />
                        //             <CartList></CartList>
                        //         </React.Fragment>

                        //     );
                        // }
                        // else {
                        //     return (
                        //         <EmptyCart />
                        //     )
                        // }
                    }}
                </ProductConsumer>

            </section>
        )
    }
}
export default Cart