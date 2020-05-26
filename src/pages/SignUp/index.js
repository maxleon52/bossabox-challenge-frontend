import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/letter-v.svg";

import { Container } from "./styles";

export default function SignUp({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/signup", { name, email });

    console.log(response.message);

    history.push("/dashboard");
  }

  return (
    <Container>
      <h1>VUTTR</h1>
      <h1>Very Useful Tools to Remember</h1>

      <div>
        <img src={logo} alt="logo" />

        <form onSubmit={handleSubmit}>
          <input
            type="name"
            value={name}
            placeholder="ex: Fulano"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="ex: teste@teste.com.br"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Criar conta</button>
        </form>
      </div>

      <Link to="/">Fazer login</Link>
    </Container>
  );
}
