// LIBs
import React from "react";
import * as MD from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

// REDUCERs
import {
  removeProduct,
  addQtProduct,
  removeQtProduct
} from "../../core/redux/reducers/cartReducer";

// STYLEs
import "./styles.scss";

export const CardCart = (props) => {
  const dispatchR = useDispatch();

  const cart = useSelector((state) => state.cart);

  /**
   * delete product
   */
  function delProduct(key, type) {
    dispatchR(removeProduct({ key: key, type: type }));
  }
  /**
   * add qt
   */
  function addQt(key, type) {
    dispatchR(addQtProduct({ key: key, type: type }));
  }

  /**
   * delete qt
   */
  function delQt(key, type) {
    dispatchR(removeQtProduct({ key: key, type: type }));
  }

  return (
    <div className={`cart-pizzas`}>
      {/* Pizzas */}
      {cart.pizzas && (
        <>
          {cart.pizzas.map((el, key) => (
            <div key={key} className={`items`}>
              <div className="image-logo">
                <img
                  src={`images/pizzas/${el.image}`}
                  alt={el.name}
                  width="100px"
                />
              </div>

              <div className="product-description">
                <div className="row item-name">
                  <h4>{el.name}</h4>
                </div>

                <div className="row item-description">
                  <p>{el.ingredients.map((e, key) => `${el.field}, `)}</p>
                </div>

                <div className="row massa">
                  <p className="type">
                    Massa: <span className="list">{el.type}</span>
                  </p>
                </div>

                <div className="row size">
                  <p className="value-size">
                    Tamanho: <span className="list">{el.size}</span>
                  </p>
                </div>

                <div className="row add-ingredients">
                  <p className="title">
                    Ingredientes Adicionais:
                    <span className="list">
                      {el.addIng.map((e, key) => {
                        if (e.check) {
                          return <span key={key}> {e.field}, </span>;
                        }
                      })}
                    </span>
                  </p>
                </div>

                <div className="row item-price">
                  <p>
                    {el.promotion
                      ? `${(
                          (el.price - (el.price * 20) / 100) *
                          el.qt
                        ).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}`
                      : `${(el.price * el.qt).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}`}
                  </p>
                </div>
                {/* actions */}
                <div className="row actions">
                  <div className="col quantity">
                    <button
                      onClick={() => {
                        delQt(key, "pizzas");
                      }}
                      className="btn"
                    >
                      <MD.MdOutlineRemove />
                    </button>
                    <input value={el.qt} onChange={()=>{}} className="input" />
                    <button
                      onClick={() => {
                        addQt(key, "pizzas");
                      }}
                      className="btn"
                    >
                      <MD.MdOutlineAdd />
                    </button>
                  </div>
                  <div className="del-edit">
                    {/* <button className="btn action-edit" title="Editar">
                      <FaEdit />
                    </button> */}
                    <button
                      onClick={() => delProduct(key, "pizzas")}
                      className="btn action-del"
                      title="Remover"
                    >
                      <MD.MdDelete />
                    </button>
                  </div>
                </div>
                {/* end actions */}
              </div>
            </div>
          ))}
        </>
      )}

      {/* Drinks */}
      {cart.drinks && (
        <>
          {cart.drinks.map((el, key) => (
            <div key={key} className={`items`}>
              <div className="image-logo">
                <img
                  src={`images/drinks/${el.image}`}
                  alt={el.name}
                  width="100px"
                />
              </div>

              <div className="product-description">
                <div className="row item-name">
                  <h4>{el.name}</h4>
                </div>
                <div className="row item-price">
                  <p>
                    {(el.price * el.qt).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL"
                    })}
                  </p>
                </div>

                {/* actions */}
                <div className="row actions">
                  <div className="col quantity">
                    <button
                      onClick={() => {
                        delQt(key, "drinks");
                      }}
                      className="btn"
                    >
                      <MD.MdOutlineRemove />
                    </button>
                    <input value={el.qt} onChange={()=>{}} className="input" />
                    <button
                      onClick={() => {
                        addQt(key, "drinks");
                      }}
                      className="btn"
                    >
                      <MD.MdOutlineAdd />
                    </button>
                  </div>
                  <div className="del-edit">
                    {/* <button className="btn action-edit" title="Editar">
                      <FaEdit />
                    </button> */}
                    <button
                      onClick={() => delProduct(key, "drinks")}
                      className="btn action-del"
                      title="Remover"
                    >
                      <MD.MdDelete />
                    </button>
                  </div>
                </div>
                {/* end actions */}
              </div>
            </div>
          ))}
        </>
      )}

      {cart.pizzas.length <= 0 && cart.drinks.length <= 0 && (
        <div className="alert-cart-null">Nenhum produto no carrinho!</div>
      )}
    </div>
  );
};
