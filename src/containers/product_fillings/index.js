// LIBs
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTs
import { ProductFilling } from "../../components/product_filling";

// REDUCERs
import { removePizzaId, setPizzas } from "../../core/redux/reducers/cartReducer";

// STYLEs
import "./styles.scss";

export const ProductsFillings = (props) => {
  const cart = useSelector(state => state.cart);

  const dipatchR = useDispatch();

  function handleAddPizza(e, id) {
    let list = props.list[id];

    if(cart.pizzas.find((item) => item.name === list.name) === undefined) {
      dipatchR(setPizzas(list));
    } else {
      dipatchR(removePizzaId({name: list.name}));
    }
  }

  return (
    <div className="product-fillings">
      <div className="section product">
        {props.list.map((el, key) => (
          <ProductFilling
            list={el}
            id={key}
            key={key}
            onClick={handleAddPizza}
          />
        ))}
      </div>
    </div>
  );
};
