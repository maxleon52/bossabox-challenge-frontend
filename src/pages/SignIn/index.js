import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/letter-v.svg";

import { Container } from "./styles";

export default function SignIn({ history }) {
  const [email, setEmail] = useState("");
  const [statusCode, setStatusCode] = useState(200);

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.post("/signin", { email });

      setStatusCode(200);

      const { _id } = response.data;

      localStorage.setItem("user", _id);

      history.push("/dashboard");
    } catch (error) {
      setStatusCode(error.response.status);
    }
  }

  // useEffect(() => {
  //   console.log(statusCode);
  // }, [statusCode]);

  // async function handleSubmit(event) {
  //   try {
  //     event.preventDefault();

  //     const response = await api.post("/signin", { email });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //     console.log(error.response.data);
  //   }
  // }

  return (
    <Container>
      {statusCode !== 200 ? (
        <div style={{ border: "1px solid red", height: "50px" }}>
          <h1>email inválido</h1>
        </div>
      ) : null}

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
