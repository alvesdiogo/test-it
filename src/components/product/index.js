// LIBs
import React from "react";

// STYLEs
import "reset-css";
import "./styles.scss";

// IMAGEs
import Star from "../../assets/images/star.png";

export const Product = (props) => {
  return (
    <div className={`product-item`}>
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
          <p>
            {props.list.ingredients.map((el) => {
              if (el.check) {
                return `${el.field}, `;
              } else {
                return <></>;
              }
            })}
          </p>
        </div>
        <div className="row item-price">
          <p>
            {props.list.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
