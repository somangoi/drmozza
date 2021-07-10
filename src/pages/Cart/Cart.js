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
      },
      {
        id: 2,
        name: 'Cheddar Cheese',
        img: 'https://images.unsplash.com/photo-1589881133825-bbb3b9471b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 20,
        quantity: 3,
      },
      {
        id: 3,
        name: 'Cheddar Cheese',
        img: 'https://images.unsplash.com/photo-1589881133825-bbb3b9471b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 30,
        quantity: 5,
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

  quantityInput = (e, idx) => {
    if (+e.target.value > 99) {
      return (e.target.value = 99);
    } else if (+e.target.value === 0) {
      return (e.target.value = 1);
    }

    const nextCartList = this.state.cartList.map((cart, index) => {
      if (idx === index) {
        return { ...cart, quantity: +e.target.value };
      }
      return cart;
    });

    return this.setState({ cartList: nextCartList });
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
    const total = cartList
      .map(cart => cart.price * cart.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return (
      <>
        <Nav />
        <div className="cartPage">
          <div className="yourCart">YOUR CART</div>
          <ul className="cartArea">
            <div className="textContain">
              <div className="titleItem">ITEM</div>
              <div className="titlePrice">PRICE</div>
              <div className="titleQuantity">QUANTITY</div>
              <div className="titleTotal">TOTAL</div>
            </div>
            {cartList.map((cartlist, idx) => {
              return (
                <CartList
                  key={cartlist.id}
                  idx={idx}
                  cartList={cartlist}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                  handleDelete={this.handleDelete}
                  quantityInput={this.quantityInput}
                  currency={this.currency}
                />
              );
            })}
          </ul>
          <div className="subTotal">
            <div className="subTotalArea">
              <div className="subTotalText">Subtotal</div>
              <div className="totalPrice">{this.currency(total)}</div>
            </div>
          </div>
          <div className="infoTax">
            Shipping and taxes calculated at checkout
          </div>
          <div className="checkOutArea">
            <a className="goToShop" href="/main">
              Keep Shopping
            </a>
            <button className="checkOutBtn" type="button">
              <span className="checkBtnText">CHECKOUT</span>
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
