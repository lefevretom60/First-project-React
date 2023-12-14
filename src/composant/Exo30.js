import React from "react";

function ExempleCondition() {
  const login = "tom";
  const isConnected = true;
  const logins = ["tom", "coucou", "edouard", "damien"];

  return (
    <div>
      {isConnected ? (
        <div>
          <ul>
            {logins.map((login) => (
              <li>{login}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div> vous n'est pas connecter</div>
      )}
    </div>
  );
}
export default ExempleCondition;
