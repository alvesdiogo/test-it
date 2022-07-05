// LIBs
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTs
import { Product } from "../../components/product";
import { CheckBox } from "../../components/checkbox";

// REDUCERs
import { upIngredients } from "../../core/redux/reducers/cartReducer";

// STYLEs
import "./styles.scss";

export const CustomIngredients = (props) => {
  const dispatchR = useDispatch();

  const cart = useSelector((state) => state.cart);

  function handleIngredient(idIngredient, checked) {
    dispatchR(
      upIngredients({
        key: this.idP,
        keyChecked: idIngredient,
        checked: checked
      })
    );
  }

  return (
    <section className="custom-ingredients-area">
      <div className="custom-ingredients">
        <div className="list-pizzas-area">
          <div className="list-pizzas">
            {cart.pizzas.length > 0 &&
              cart.pizzas.map((itemP, keyP) => (
                <div className="list-pizza" key={keyP}>
                  <Product list={itemP} id={itemP.id} />

                  {/* list ingredients */}
                  <div className="options-area">
                    <div className="options">
                      {itemP.addIng &&
                        itemP.addIng.map((itemI, key) => (
                          <CheckBox
                            value={itemI.check}
                            field={itemI.field}
                            idIngredient={key}
                            idP={keyP}
                            onChange={handleIngredient}
                            key={key}
                          />
                        ))}
                    </div>
                  </div>
                  {/* end list */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
