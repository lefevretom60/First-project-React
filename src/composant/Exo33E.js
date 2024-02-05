// Exo33E.jsx
import React, { useState } from "react";

function Exo33E(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    props.onInputChange(value);
  };

  return (
    <div>
      <h2 onClick={props.handleTitleClick}>Composant Enfant</h2>
      <p>Propriete du parent : {props.data}</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default Exo33E;
