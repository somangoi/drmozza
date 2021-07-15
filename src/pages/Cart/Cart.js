import React, { Component } from 'react';
import CartList from './CartlList/CartList';
import { CART_API } from '../../config';
import { USDfomating } from '../../Fomating';
import './Cart.scss';

export default class Cart extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    };
    fetch(CART_API, requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data.results.carts,
        });
      });
  }

  quantityInput = (e, idx, cart) => {
    if (+e.target.value > cart.stocks) {
      alert('재고가 부족합니다.');
      return { ...cart, quantity: cart.stocks };
    } else if (+e.target.value > 99) {
      return { ...cart, quantity: 99 };
    } else if (+e.target.value === 0) {
      return { ...cart, quantity: 1 };
    }

    const nextCartList = this.state.cartList.map((cart, index) => {
      if (idx === index) {
        return { ...cart, quantity: +e.target.value };
      }
      return cart;
    });

    this.setState({ cartList: nextCartList });
    const requestOptions = {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({ quantity: +e.target.value }),
    };
    fetch(`${CART_API}/${cart.option_id}`, requestOptions);
  };

  handleIncrement = cart => {
    if (cart.quantity < cart.stocks) {
      const cartList = this.state.cartList.map(item => {
        if (item.option_id === cart.option_id) {
          const quantity = cart.quantity + 1;
          return { ...cart, quantity: quantity >= 99 ? 99 : quantity };
        }
        return item;
      });
      this.setState({ cartList });
      const requestOptions = {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('TOKEN'),
        },
        body: JSON.stringify({
          quantity: cart.quantity >= 99 ? 99 : cart.quantity + 1,
        }),
      };
      fetch(`${CART_API}/${cart.option_id}`, requestOptions);
    } else {
      alert('재고가 부족합니다.');
    }
  };

  handleDecrement = cart => {
    const cartList = this.state.cartList.map(item => {
      if (item.option_id === cart.option_id) {
        const quantity = cart.quantity - 1;
        return { ...cart, quantity: quantity <= 1 ? 1 : quantity };
      }
      return item;
    });
    this.setState({ cartList });

    const requestOptions = {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        quantity: cart.quantity <= 1 ? 1 : cart.quantity - 1,
      }),
    };
    fetch(`${CART_API}/${cart.option_id}`, requestOptions);
  };

  handleDelete = cart => {
    const cartList = this.state.cartList.filter(
      item => item.option_id !== cart.option_id
    );
    this.setState({ cartList });
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({ cartList }),
    };
    fetch(`${CART_API}/${cart.option_id}`, requestOptions);
  };

  goToOrder = () => {
    this.props.history.push('/order');
  };

  goToShop = () => {
    this.props.history.push('/shop');
  };

  render() {
    const { cartList } = this.state;
    const total = cartList
      .map(cart => cart.price * cart.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (!this.state.cartList.length) {
      return (
        <>
          <div className="cartPage">
            <div className="yourCart">YOUR CART</div>
            <div className="cartArea">
              <div className="emptyContain">
                <i className="far fa-grimace fa-5x"></i>
                <div className="oops">OOPS, YOUR CART IS CURRENTLY EMPTY</div>
                <div className="noItemText">
                  There are no items in your cart.
                </div>
                <button
                  className="shopBtn"
                  type="button"
                  onClick={this.goToShop}
                >
                  <span className="shopBtnText">Continue To Shopping</span>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
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
                    key={cartlist.option_id}
                    idx={idx}
                    cartList={cartlist}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    handleDelete={this.handleDelete}
                    quantityInput={this.quantityInput}
                  />
                );
              })}
            </ul>
            <div className="subTotal">
              <div className="subTotalArea">
                <div className="subTotalText">Subtotal</div>
                <div className="totalPrice">{USDfomating(total)}</div>
              </div>
            </div>
            <div className="infoTax">
              Shipping and taxes calculated at checkout
            </div>
            <div className="checkOutArea">
              <a className="goToShop" href="/main">
                Keep Shopping
              </a>
              <button
                className="checkOutBtn"
                type="button"
                onClick={this.goToOrder}
              >
                <span className="checkBtnText">CHECKOUT</span>
              </button>
            </div>
          </div>
        </>
      );
    }
  }
}
