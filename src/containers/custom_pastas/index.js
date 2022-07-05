// LIBs
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTs
import { Product } from "../../components/product";

// REDUCERs
import { upPastas } from "../../core/redux/reducers/cartReducer";

// STYLEs
import "./styles.scss";

export const CustomPastas = (props) => {
  const dispatchR = useDispatch();

  const cart = useSelector((state) => state.cart);

  function handleChangePastas(type, keyP) {
    dispatchR(upPastas({ key: keyP, type: type }));
  }

  return (
    <section className="custom-pastas-area">
      <div className="custom-pastas">
        <div className="list-pizzas-area">
          <div className="list-pizzas">
            {cart.pizzas.length > 0 &&
              cart.pizzas.map((itemP, keyP) => (
                <div className="list-pizza" key={keyP}>
                  <Product
                    list={itemP}
                    dataPastas={props.data}
                    id={itemP.id}
                  />

                  {/* options massas */}
                  <div className="options-area">
                    <div className="options">
                      {props.data.map((itemM, keyM) => (
                        <p
                          className={`option ${
                            itemP.type === itemM ? "active" : ""
                          }`}
                          onClick={() => handleChangePastas(itemM, keyP)}
                          key={keyM}
                        >
                          {itemM}
                        </p>
                      ))}
                    </div>
                  </div>
                  {/* end option massas */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
