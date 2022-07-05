import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

// STYLEs
import "./styles.scss";

// IMAGEs
import logo from "../../assets/images/logo.png";

// COMPONENTs
import { CardCart } from "../../components/card_cart";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [cartC, setCartC] = useState(0);
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    upCart();
  }, [cart]);

  function upCart() {
    if (cart) {
      let qt = 0;
      let dis = 0;

      if (cart.pizzas) {
        cart.pizzas.map((el) => {
          if (el.promotion) {
            dis += (el.price * el.qt * 20) / 100;
          }
          qt += el.price * el.qt;
        });
      }
      if (cart.drinks) {
        cart.drinks.map((el) => {
          qt += el.price * el.qt;
        });
      }

      setDiscount(dis);
      setAmount(qt);
    }
  }

  return (
    <div className={`cart-view`}>
      <div className="container">
        <section className="header-area">
          <div className="header">
            <div className="logo-area">
              <Link to="/" className="logo">
                <img src={logo} width={100} alt="logo" />
              </Link>
            </div>

            <div className="points-area">
              <div className="points">
                <p>pontos: 0</p>
              </div>
              <div className="cart">
                <div className="cartC">
                  {cart.pizzas.length + cart.drinks.length}
                </div>
                <BsFillCartFill />
              </div>
            </div>
          </div>
        </section>

        <section className="cart">
          <CardCart
            cartC={cartC}
            upCart={upCart}
            setCartC={setCartC}
            list={cart}
          />

          <div className="cart-summary">
            <div className="content-amount">
              <div className="content">
                <table>
                  <tbody>
                    <tr>
                      <th className="text-h6">Sub-total:</th>
                      <td className="amount">
                        {amount.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-h6">Desconto:</th>
                      <td className="amount">
                        {discount.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </td>
                    </tr>
                    <tr>
                      <th className="text-h6">Total:</th>
                      <td className="amount">
                        {(amount - discount).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="checkout-items">
                  <ul className="checkout-methods-items">
                    <li className="item">
                      <button className="add-checkout">
                        <span>Finalizar pedido</span>
                      </button>
                      <Link className="buymore" to="/">
                        <span>Comprar mais Pizza</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
