import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body  {
      width: 100%;
      height: 100%;
      margin: 0;
      box-sizing: border-box;
      font-size: 0.9rem;
      color: #000;
      font-family: Tahoma, Geneva, sans-serif;
    }
    main {
      display: block;
    }

    h1 {
     font-size: 1.2rem;
    }

    h2 {
      font-size: 1rem;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
`;

export const AppContainer = styled.main`
  padding: 8px;
`;

export const PageContainer = styled.div`
  width: 80%;
`;

export const NameInputContainer = styled.div`
  button {
    margin-top: 8px;
  }
`;

const NameContainer = styled.div`
  margin-top: 4px;
`;

export const NameListContainer = styled(NameContainer)`
  border-radius: 5px;
  background: rgb(249, 249, 249);
`;

export const NameSelectContainer = styled(NameContainer)`
  div {
    padding-top: 16px;
  }
`;
