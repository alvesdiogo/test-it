// LIBs
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";

// CONTAINERs
import { Menu } from "../../containers/menu";
import { ProductsDrinks } from "../../containers/products_drinks";
import { ProductsFillings } from "../../containers/product_fillings";
import { CustomPastas } from "../../containers/custom_pastas";
import { CustomSize } from "../../containers/custom_size";
import { CustomIngredients } from "../../containers/custom_ingredients";

// COMPONENTs
import { TestConsole } from "../../components/test_console";

// DATA
import data from "../../core/utils/data.json";

// IMAGEs
import logo from "../../assets/images/logo.png";

// STYLEs
import "./styles.scss";

export const Home = () => {
  const cart = useSelector((state) => state.cart);

  const [step, setStep] = useState(0);

  return (
    <div
      className={`home-view ${
        step === 0 ? "products-all" : ""
      }`}
    >
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

        <Menu menu={data.options} stepActual={step} setStepActual={setStep} />

        {step === 3 && <CustomIngredients />}

        {step === 2 && <CustomSize data={data.sizes} />}

        {step === 1 && <CustomPastas data={data.types} />}

        {step === 0 && (
          <section className="container">
            <ProductsFillings list={data.pizza} />
          </section>
        )}

        {step === 0 && <ProductsDrinks data={data.drinks} />}
      </div>

      <div>
        <TestConsole />
      </div>
    </div>
  );
};
