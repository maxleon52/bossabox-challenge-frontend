import React from "react";

import logo from "../../assets/letter-v.svg";

import { Container } from "./styles";

export default function SignIn() {
  return (
    <Container>
      <h1>VUTTR Very Useful Tools to Remember</h1>

      <div>
        <img src={logo} alt="logo" />
        <h2>Bem-vindo! Entre com seu email</h2>

        <form>
          <input placeholder="ex: teste@teste.com.br" />
          <button type="button">Entrar</button>
        </form>
      </div>
    </Container>
  );
}
