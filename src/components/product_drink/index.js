// LIBs
import React from "react";
import { useSelector } from "react-redux";

// LIB COMPONENTs
import * as Ai from "react-icons/ai";
import * as Md from "react-icons/md";

// STYLEs
import "./styles.scss";

export const ProductDrink = (props) => {
  const cart = useSelector((state) => state.cart);

  function handleActive(e) {
    props.onClick(e, props.id);
  }

  return (
    <div
      className={`product-drink ${
        cart.drinks.find((item) => item.name === props.title) ? "active" : ""
      }`}
      onClick={(e) => handleActive(e)}
    >
      <div className="product">
        <div className="image-area">
          <div className="image">
            <img src={props.src} alt={props.title} />

            <div className="add">
              {cart.drinks.find((item) => item.name === props.title) ? (
                <Md.MdOutlineDone />
              ) : (
                <Ai.AiOutlinePlus />
              )}
            </div>
          </div>
        </div>

        <div className="title-area">
          <div className="title">
            <p>
              {props.title} -{" "}
              <small className="price">
                {props.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
