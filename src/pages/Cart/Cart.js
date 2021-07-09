import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import CartList from './CartlList/CartList';
import './Cart.scss';

export default class Cart extends Component {
  state = {
    cartList: [
      {
        id: 1,
        name: 'Cheese',
        img: 'https://images.unsplash.com/photo-1608666566023-e91b02683a5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 10,
        quantity: 1,
        total: '',
      },
      {
        id: 2,
        name: 'Cheddar Cheese',
        img: 'https://images.unsplash.com/photo-1589881133825-bbb3b9471b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 20,
        quantity: 3,
        total: '',
      },
    ],
  };

  currency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencySign: 'accounting',
      minimumFractionDigits: 2,
    }).format(number);
  };

  handleIncrement = cart => {
    const cartList = this.state.cartList.map(item => {
      if (item.id === cart.id) {
        return { ...cart, quantity: cart.quantity + 1 };
      }
      return item;
    });
    this.setState({ cartList });
  };

  handleDecrement = cart => {
    const cartList = this.state.cartList.map(item => {
      if (item.id === cart.id) {
        const quantity = cart.quantity - 1;
        return { ...cart, quantity: quantity <= 1 ? 1 : quantity };
      }
      return item;
    });

    this.setState({ cartList });
  };

  handleDelete = cart => {
    const cartList = this.state.cartList.filter(item => item.id !== cart.id);
    this.setState({ cartList });
  };

  render() {
    const { cartList } = this.state;
    return (
      <>
        <Nav />
        <ul className="cartArea">
          <div className="yourCart">YOUR CART</div>
          <div className="textContain">
            <div className="titleItem">ITEM</div>
            <div className="titlePrice">PRICE</div>
            <div className="titleQuantity">QUANTITY</div>
            <div className="titleTotal">TOTAL</div>
          </div>
          {cartList.map(cartlist => {
            return (
              <CartList
                key={cartlist.id}
                cartList={cartlist}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                handleDelete={this.handleDelete}
                handleInput={this.quantityInput}
                currency={this.currency}
              />
            );
          })}
        </ul>
        <Footer />
      </>
    );
  }
}
