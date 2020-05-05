import React, { Component } from 'react'
import { detailProduct, storeProducts } from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,

    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetail = (id) => {
        // console.log("hello from details")
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    };
    addToCart = id => {
        // console.log(`hello from add to cart.id  ${id}`);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, () => {
            console.log(this.state);
        });
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        });
    };
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }
    icrement = (id) => {
        console.log("this is increment");
    }
    decrement = (id) => {
        console.log("this is increment");
    }
    removeItem = (id) => {
        console.log('item remove');
    }
    clearCart = () => {
        console.log('cart was cleared');
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                icrement: this.icrement,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,

            }} >
                {/* <button onClick={this.tester}>test me</button> */}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
export default ProductProvider;

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }