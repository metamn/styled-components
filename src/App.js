import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ThemeContext from "./Theme";

const GlobalStyle = styled.createGlobalStyle(props => ({
  ...props.theme.colors.default,
  ...props.theme.textStyles.default
}));

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
      <Container>
        <Title theme={theme}>Styled components test app</Title>
      </Container>
    </>
  );
};

export default App;
