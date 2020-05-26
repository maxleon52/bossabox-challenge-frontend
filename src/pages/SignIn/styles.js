import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% auto;
  max-width: 600px;
  padding: 16px;
  background-color: ${darken(0.2, "#fff")};
  border: 1px solid #fff;

  h1 {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 276px;
    height: 232px;
    background-color: ${darken(0.4, "#fff")};
    border: 1px solid #fff;
    margin-bottom: 16px;

    img {
      width: 62px;
      height: 62px;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 20px;
      /* color: #455a64; */
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-top: 8px;

      input {
        height: 39px;
        padding: 0 0 0 8px;
        margin-bottom: 8px;
        border: none;
        font-size: 16px;
      }

      button {
        height: 39px;
        background-color: ${darken(0.1, "#fff")};
        border: 0;
        color: #455a64;
        font-weight: bold;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          cursor: pointer;
          background-color: ${darken(0.2, "#fff")};
        }
      }
    }
  }

  a {
    color: #8b8989;
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      cursor: pointer;
      color: ${darken(0.1, "#8b8989")};
    }
  }
`;
