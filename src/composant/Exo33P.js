// Exo33P.jsx
import React, { useState } from "react";
import Exo33E from "./Exo33E";

function Exo33P() {
  const [title, setTitle] = useState("Titre initial du parent");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleInputChange1 = (value) => {
    setInput1(value);
  };

  const handleInputChange2 = (value) => {
    setInput2(value);
  };

  const handleTitleClick = () => {
    // Tu peux utiliser ces valeurs pour faire quelque chose lorsque le titre est cliqué
    console.log("Title clicked!");
  };

  const isFormValid = input1 !== "" && input2 !== "";

  return (
    <div style={{ backgroundColor: isFormValid ? "green" : "red" }}>
      <h1>{title}</h1>
      <Exo33E
        data="Donnees du parent"
        onInputChange={handleInputChange1}
        handleTitleClick={handleTitleClick}
      />
      <Exo33E
        data="Autres donnees du parent"
        onInputChange={handleInputChange2}
        handleTitleClick={handleTitleClick}
      />
    </div>
  );
}

export default Exo33P;
