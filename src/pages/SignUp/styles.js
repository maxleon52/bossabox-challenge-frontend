import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
  margin-left: 25vh;

  max-width: 500px;

  h1 {
    color: #ff9800;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 276px;
    height: 232px;
    background-color: #78909c;
    border: 1px solid #fff;
    border-radius: 4px;
    margin-bottom: 16px;

    img {
      width: 62px;
      height: 62px;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 20px;
      color: #455a64;
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
        border-radius: 4px;
        border: none;
        font-size: 16px;
      }

      button {
        height: 39px;
        border-radius: 4px;
        background-color: #ff9800;
        border: 0;
        color: #455a64;
        font-weight: bold;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          cursor: pointer;
          background-color: ${darken(0.1, "#ff9800")};
        }
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
`;
