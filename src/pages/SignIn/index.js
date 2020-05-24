import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/letter-v.svg";

import { Container } from "./styles";

export default function SignIn({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/signin", { email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <Container>
      <h1>VUTTR</h1>
      <h1>Very Useful Tools to Remember</h1>

      <div>
        <img src={logo} alt="logo" />
        <h2>Bem-vindo!</h2>
        <h2>Entre com seu email</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ex: teste@teste.com.br"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>

      <Link to="/signup">Crie sua conta!</Link>
    </Container>
  );
}
