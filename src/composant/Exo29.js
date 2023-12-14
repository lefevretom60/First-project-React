import React from "react";

function ExempleCondition() {
  const login = "tom";
  const password = "coucou";
  const User = {
    login: "tom",
    password: "coucou",
  };

  return (
    <div>
      <div>Bonjour je suis {login}</div>
      <div>Mon password est {password}</div>
      <div>Le login de mon objet est {User.login}</div>
      <div>Le pass de mon objet est {User.password}</div>
    </div>
  );
}
export default ExempleCondition;
