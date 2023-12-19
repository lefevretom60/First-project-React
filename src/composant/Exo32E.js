import React, { useState } from "react";

const Exo32E = ({ login, password }) => {
  const couleur = login && password ? "green" : "transparent";

  return (
    <div
      style={{ backgroundColor: couleur, padding: "10px", marginTop: "10px" }}
    ></div>
  );
};

export default Exo32E;
