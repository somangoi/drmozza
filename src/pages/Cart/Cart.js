import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import CartList from './CartlList/CartList';
import { CART_API } from '../../config';
import { USDfomating } from '../../Fomating';
import './Cart.scss';

export default class Cart extends Component {
  state = {
    cartList: [
      // {
      //   product_name: 'Herb and Garlic Whirl',
      //   thumbnail_image_url:
      //     'https://cdn11.bigcommerce.com/s-8hw6y8no/images/stencil/1280x1280/products/1325/2916/Product_Listing_Web_Herb_and_Garlic_Whirl_Main_20210603__49071.1623115265.jpg?c=2',
      //   product_id: 4,
      //   option_id: 6,
      //   weight: 70,
      //   price: 47.16,
      //   quantity: 2,
      //   stocks: 54278,
      //   availability: true,
      // },
    ],
  };

  componentDidMount() {
    let myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.6LnewEjsNONVXSA0-O0GyvSR7aYTt_HIL4-evXu45HI'
    );

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    fetch(`${CART_API}/orders/cart`, requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data.results,
        });
      });
  }

  quantityInput = (e, idx, cart) => {
    if (+e.target.value > 99) {
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
    fetch(`${CART_API}/orders/cart/${cart.option_id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.6LnewEjsNONVXSA0-O0GyvSR7aYTt_HIL4-evXu45HI',
      },
      body: JSON.stringify({ quantity: +e.target.value }),
    });
  };

  handleIncrement = cart => {
    const cartList = this.state.cartList.map(item => {
      if (item.option_id === cart.option_id) {
        const quantity = cart.quantity + 1;
        return { ...cart, quantity: quantity >= 99 ? 99 : quantity };
      }
      return item;
    });
    this.setState({ cartList });
    fetch(`${CART_API}/orders/cart/${cart.option_id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.6LnewEjsNONVXSA0-O0GyvSR7aYTt_HIL4-evXu45HI',
      },
      body: JSON.stringify({
        quantity: cart.quantity >= 99 ? 99 : cart.quantity + 1,
      }),
    });
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
    fetch(`${CART_API}/orders/cart/${cart.option_id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.6LnewEjsNONVXSA0-O0GyvSR7aYTt_HIL4-evXu45HI',
      },
      body: JSON.stringify({
        quantity: cart.quantity <= 1 ? 1 : cart.quantity - 1,
      }),
    });
  };

  handleDelete = cart => {
    const cartList = this.state.cartList.filter(
      item => item.option_id !== cart.option_id
    );
    this.setState({ cartList });
    fetch(`${CART_API}/orders/cart/${cart.option_id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.6LnewEjsNONVXSA0-O0GyvSR7aYTt_HIL4-evXu45HI',
      },
      body: JSON.stringify({ cartList }),
    });
  };

  render() {
    const { cartList } = this.state;
    const total = cartList
      .map(cart => cart.price * cart.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
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
