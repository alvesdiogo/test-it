// LIBs
import React, { useState, useEffect } from "react";

// STYLEs
import "./styles.scss";

export const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(props.value);
  }, [props.value]);

  function handleChecked(e) {
    setChecked(!checked);
    props.onChange(props.idIngredient, !checked);
  }

  return (
    <label className="checkbox-area">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={(e) => handleChecked(e)}
      />

      {props.field}
    </label>
  );
};
