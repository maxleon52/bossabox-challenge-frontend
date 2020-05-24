import styled from "styled-components";
import search from "../../assets/search.svg";
import add from "../../assets/add.svg";
import cancel from "../../assets/cancel.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px auto;
  max-width: 500px;
  padding: 8px 0;
  /* border: 1px solid red; */

  h1 {
    margin-bottom: 16px;
  }

  strong {
    margin-bottom: 16px;
  }

  div.wrapper-form > form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 18px;

    input {
      height: 29px;
      width: 300px;
      border: 1px solid;
      padding-left: 35px;
      background: #fff url(${search}) no-repeat 10px center;
      background-size: 18px;
    }

    button {
      padding-left: 15px;
      width: 90px;
      background: #fff url(${add}) no-repeat 13px center;
      background-size: 15px;
    }
  }
`;

export const Content = styled.div`
  background-color: #fff;
  border: 1px solid;
  margin-top: 8px;
  padding: 8px 8px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    a {
      font-size: 18px;
    }

    button {
      width: 75px;
      padding-left: 10px;
      border: none;
      font-size: 13px;
      background: #fff url(${cancel}) no-repeat 3px center;
      background-size: 9px;
    }
  }

  p {
    margin-bottom: 8px;
  }

  span {
    margin-right: 8px;
  }

  /* .tags {
    display: flex;
  } */
`;
