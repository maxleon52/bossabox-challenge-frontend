import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/letter-v.svg";

import { Container } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <h1>VUTTR</h1>
      <h1>Very Useful Tools to Remember</h1>

      <div>
        <img src={logo} alt="logo" />

        <form>
          <input placeholder="ex: teste@teste.com.br" />
          <button type="button">Criar conta</button>
        </form>
      </div>

      <Link to="/signin">Fazer login</Link>
    </Container>
  );
}
