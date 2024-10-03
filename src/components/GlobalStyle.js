import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.body};
    line-height: ${props => props.theme.lineHeights.body};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    line-height: ${props => props.theme.lineHeights.heading};
    color: ${props => props.theme.colors.heading};
    margin-top: ${props => props.theme.space.large};
    margin-bottom: ${props => props.theme.space.medium};
  }

  h1 { font-size: ${props => props.theme.fontSizes.h1}; }
  h2 { font-size: ${props => props.theme.fontSizes.h2}; }
  h3 { font-size: ${props => props.theme.fontSizes.h3}; }
  h4 { font-size: ${props => props.theme.fontSizes.h4}; }
  h5 { font-size: ${props => props.theme.fontSizes.h5}; }
  h6 { font-size: ${props => props.theme.fontSizes.h6}; }

  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
  }

  code {
    font-family: ${props => props.theme.fonts.monospace};
    background-color: ${props => props.theme.colors.codeBackground};
    color: ${props => props.theme.colors.code};
    padding: 0.2em 0.4em;
    border-radius: ${props => props.theme.borderRadius.small};
    font-size: ${props => props.theme.fontSizes.small};
  }

  pre {
    background-color: ${props => props.theme.colors.codeBackground};
    border-radius: ${props => props.theme.borderRadius.medium};
    padding: ${props => props.theme.space.medium};
    overflow-x: auto;

    code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }
  }

  ::selection {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
  }
`;

export default GlobalStyle;