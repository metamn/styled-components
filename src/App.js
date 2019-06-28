import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ThemeContext from "./Theme";

// createGlobalStyle accepts only tagged template literals
// - https://www.styled-components.com/docs/api#createglobalstyle
// - this has no effect:
const GlobalStyle = createGlobalStyle(props => ({
  ...props.theme.colors.default,
  ...props.theme.textStyles.default
}));

// This does the job
const GlobalStyle2 = createGlobalStyle`
  body {
    font-size: 100%;
    line-height: 1.25;
    --lem: 1.25em;
  }
`;

const Container = styled.section([], {
  padding: "var(--lem)"
});

const Title = styled.h1(props => ({
  ...props.theme.textStyles.large
}));

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={theme} />
      <GlobalStyle2 />
      <Container>
        <Title theme={theme}>Styled components test app</Title>
      </Container>
    </>
  );
};

export default App;
