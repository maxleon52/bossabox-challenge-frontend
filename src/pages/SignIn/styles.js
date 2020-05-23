import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  max-width: 716px;
  div {
    display: flex;
    flex-direction: column;

    width: 276px;
    height: 232px;

    form {
      display: flex;
      flex-direction: column;
    }
  }

  img {
    width: 32px;
    height: 42px;
  }
`;
