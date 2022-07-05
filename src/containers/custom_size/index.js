// LIBs
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTs
import { Product } from "../../components/product";

// REDUCERs
import { upSize } from "../../core/redux/reducers/cartReducer";

// STYLEs
import "./styles.scss";

export const CustomSize = (props) => {
  const dispatchR = useDispatch();

  const cart = useSelector((state) => state.cart);

  function handleChangeSize(size, keyP) {
    dispatchR(upSize({ key: keyP, size: size }));
  }

  return (
    <section className="custom-size-area">
      <div className="custom-size">
        <div className="list-pizzas-area">
          <div className="list-pizzas">
            {cart.pizzas.length > 0 &&
              cart.pizzas.map((itemP, keyP) => (
                <div className="list-pizza" key={keyP}>
                  <Product
                    list={itemP}
                    dataSize={props.data}
                    id={itemP.id}
                  />
                  {/* list in sizes */}
                  <div className="options-area">
                    <div className="options">
                      {props.data.map((itemM, keyM) => (
                        <p
                          className={`option ${
                            itemP.size === itemM ? "active" : ""
                          }`}
                          onClick={() => handleChangeSize(itemM, keyP)}
                          key={keyM}
                        >
                          {itemM}
                        </p>
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
