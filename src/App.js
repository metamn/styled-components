import React, { useContext } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import ThemeContext from "./Theme";

// createGlobalStyle accepts only tagged template literals
// - https://www.styled-components.com/docs/api#createglobalstyle
// - this has no effect:
const GlobalStyle = createGlobalStyle(props => ({
  ...props.theme.colors.default,
  ...props.theme.text.default
}));

// This does the job
const GlobalStyle2 = createGlobalStyle`
  body {
    font-size: 100%;
    line-height: 1.25;
    --lem: 1.25em;
  }
`;

// Object notation is supported
const Container = styled.section([], {
  padding: "var(--lem)"
});

// Props (and theming) is supported
const Title = styled.h1(props => ({
  ...props.theme.text.large
}));

// Styling other elements works when the new element shares the parent element props
const Subtitle = styled(Title)([], {
  fontWeight: "normal"
});

// Referring to other elements
// - See usage later ...
const OtherElement = styled.div([]);

const List = styled.ul``;

const ListItem = styled.li([], {
  letterSpacing: "3px",
  marginBottom: "calc(var(--lem) / 2)",

  // Styling children
  "& span": {
    fontStyle: "italic"
  },

  // Media queries
  "& .uppercase": {
    "@media (min-width: 1024px)": {
      textTransform: "uppercase"
    }
  },

  // Referring to other elements
  [`& ${OtherElement}`]: {
    backgroundColor: "black",
    color: "white",

    // Styling nested children
    "& span": {
      fontStyle: "italic"
    }
  }
});

// Styling components. The parent component has to have a `className`
const Comp = props => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

const CompStyled = styled(Comp)([], {
  border: "1px solid"
});

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={theme} />
      <GlobalStyle2 />
      <Container>
        <Title theme={theme}>Styled components test app</Title>
        <Subtitle theme={theme}>Features:</Subtitle>
        <List>
          <ListItem>
            Global styles works only with tagged template literals
          </ListItem>
          <ListItem>Object notation</ListItem>
          <ListItem>Props (and theming)</ListItem>
          <ListItem>
            Styling other elements works when the new element shares the parent
            element props
          </ListItem>
          <ListItem>
            <span>Styling children</span>
          </ListItem>
          <ListItem>
            <span className="uppercase">Media queries</span>
          </ListItem>
          <ListItem>
            <OtherElement>Referring to other elements</OtherElement>
          </ListItem>
          <ListItem>
            <OtherElement>
              <span>Styling nested children</span>
            </OtherElement>
          </ListItem>
          <ListItem>
            <CompStyled className="styled">Styling components</CompStyled>
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default App;
