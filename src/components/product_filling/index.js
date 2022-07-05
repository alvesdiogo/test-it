// LIBs
import React from "react";
import { useSelector } from "react-redux";
import { BiCheck } from "react-icons/bi";

// STYLEs
import "reset-css";
import "./styles.scss";

// IMAGEs
import Star from "../../assets/images/star.png";

export const ProductFilling = (props) => {
  const cart = useSelector((state) => state.cart);

  function handleActive(e) {
    props.onClick(e, props.id);
  }

  return (
    <div
      className={`product-item ${
        cart.pizzas.find((item) => item.name === props.list.name) ? "select" : ""
      } ${props.list.promotion ? "promo" : ""}`}
      onClick={(e) => handleActive(e)}
    >
      <div className="image-logo">
        <img
          src={`images/pizzas/${props.list.image}`}
          alt={props.list.name}
          width="100px"
        />
      </div>
      <div className="product-description">
        <div className="row star">
          <img src={Star} alt="Pontuação" width="16px" />
          <p>{props.list.avaliation}</p>
        </div>
        <div className="row item-name">
          <h4>{props.list.name}</h4>
        </div>
        <div className="row item-description">
          <p>{props.list.ingredients.map((el) => `${el.field}, `)}</p>
        </div>
        <div className="row item-price">
          <p className="price">
            {props.list.promotion
              ? `${(
                  props.list.price -
                  (props.list.price * 20) / 100
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}`
              : `${props.list.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}`}
          </p>
        </div>
      </div>
      <button
        className={`btn ${
          cart.pizzas.find((item) => item.name === props.list.name) ? "success" : ""
        }`}
      >
        {cart.pizzas.find((item) => item.name === props.list.name) ? <BiCheck /> : "+"}
      </button>
    </div>
  );
};
