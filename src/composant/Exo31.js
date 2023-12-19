import React, { useState } from "react";

function ExempleCondition() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== "1234") {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Nom d'utilisateur:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </p>

      <p>
        <label>
          Mot de passe:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </p>

      <button type="submit">Envoyer</button>
      {error && (
        <p style={{ color: "red" }}>
          Mauvais mot de passe. Veuillez réessayer.
        </p>
      )}
      {success && <p style={{ color: "green" }}>Code bon.</p>}
    </form>
  );
}

export default ExempleCondition;
