// LIBs
import React from "react";
import { useNavigate } from "react-router-dom";

// LIB COMPONENTs
import * as Bs from "react-icons/bs";

// STYLEs
import "./styles.scss";

export const Menu = (props) => {
  const navigate = useNavigate();

  function handleGoStep(key) {
    props.setStepActual(key);
  }

  function handleNextStep() {
    if (props.menu[props.stepActual + 1]) {
      props.setStepActual(props.stepActual + 1);
    } else {
      navigate("/cart");
    }
  }

  function handlePreviousStep() {
    if (props.menu[props.stepActual]) {
      props.setStepActual(props.stepActual - 1);
    }
  }

  return (
    <section className="menu-area">
      <div className="menu">
        <div className="options-area">
          <div className="options">
            {props.menu.map((item, key) => (
              <div
                className={`option ${props.stepActual === key ? "active" : ""}`}
                onClick={() => handleGoStep(key)}
                key={key}
              >
                <p className="title">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="texts-area">
          <div className="texts">
            <h2 className="title">
              {props.stepActual === 0 ? (
                props.menu[props.stepActual]
              ) : (
                <div className="previous-step" onClick={handlePreviousStep}>
                  <Bs.BsArrowLeft />
                  Voltar
                </div>
              )}
            </h2>

            <p className="next-step" onClick={handleNextStep}>
              {props.menu[props.stepActual + 1] && (
                <>
                  escolha a {props.menu[props.stepActual + 1]}
                  <Bs.BsArrowRight />
                </>
              )}

              {!props.menu[props.stepActual + 1] && (
                <>
                  Ir para o carrinho <Bs.BsArrowRight />
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
