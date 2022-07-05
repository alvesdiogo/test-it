// LIBs
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTs
import { ProductDrink } from "../../components/product_drink";

// REDUCERs
import { setDrinks, removeDrinkId } from "../../core/redux/reducers/cartReducer";

// STYLEs
import "./styles.scss";

export const ProductsDrinks = (props) => {
  const dipatchR = useDispatch();

  const cart = useSelector((state) => state.cart);

  const [show, setShow] = useState(false);

  function handleAddDrinkCart(e, id) {
    let drink = props.data[id];

    if(cart.drinks.find((item) => item.name === drink.name) === undefined) {
      dipatchR(setDrinks(drink));
    } else {
      dipatchR(removeDrinkId({name: drink.name}));
    }
  }

  function viewMore() {
    setShow(!show);
  }

  return (
    <section
      className={`drinks-area active ${
        show ? "view-all" : ""
      }`}
    >
      <div className="drink">
        <div className="top-area">
          <div className="top">
            <div className="title-area">
              <div className="title">
                <p>Destilados & Drinks</p>
              </div>
            </div>

            <div className="more-area">
              <div className="more">
                <p onClick={viewMore}>{show ? "Ver Menos" : "Ver Todos"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="middle-area">
          <div className="middle">
            {props.data.map((item, key) => (
              <ProductDrink
                src={`/images/drinks/${item.image}`}
                price={item.price}
                title={item.name}
                id={key}
                key={key}
                onClick={handleAddDrinkCart}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
