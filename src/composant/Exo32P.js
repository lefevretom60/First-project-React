import React, { useState } from "react";
import Exo32E from "Exo32E";

function Exo32() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (form) => {
    form.preventDefault();

    if (password === "1234") {
      setColor("green");
    } else if (password === "") {
      setColor("black");
    } else {
      setColor("red");
    }
  };

  return (
    <div style={{ color }}>
      <h2>Formulaire</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            {" "}
            Nom d'utilisateur:
            <input
              type="text"
              value={login}
              onChange={(form) => setLogin(form.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            {" "}
            Mot de passe:
            <input
              type="password"
              value={password}
              onChange={(form) => setPassword(form.target.value)}
            />
          </label>
        </p>
        <verif login={login} password={password} />

        <button type="submit">Envoyer</button>
      </form>

      {color === "red" && <p>Mot de passe incorrect. Veuillez réessayer.</p>}

      {color === "green" && <p>Code bon.</p>}
    </div>
  );
}

export default Exo32;
