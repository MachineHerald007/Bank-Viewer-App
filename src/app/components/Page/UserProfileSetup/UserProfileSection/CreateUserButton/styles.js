import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

export const Link = styled.a`
  width: 100%;
  max-width: 240px;
  height: 54px;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 900;
  color: #ff4655;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: ${({ theme }) => (theme.mode === 'light' ? '0 0 0 1px inset rgba(33, 33, 32, 0.3)' : '0 0 0 1px inset rgba(236, 232, 225, 0.8)')};
  position: relative;
  margin: 10px 0;
  transition: 0.3s ease-out all;
  overflow: hidden;
  
  &:hover {
    color: #ece8e1;
  }

  &:after,
  &:before {
    content: "";
    width: 1px;
    position: absolute;
    height: 8px;
    background: ${({ theme }) => (theme.mode === 'light' ? '#ffffff' : '#24252B')};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    right: 0;
    left: initial;
  }

  & > p {
    margin: 0;
    height: 54px;
    line-height: 54px;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    width: 100%;
    position: relative;
    overflow: hidden;

    &:active {
      opacity: 0.90;
    }
    
    & > span.base {
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 1px solid #ff4655;
      transition: 0.3s ease-out all;
      
      &:before {
        content: "";
        width: 2px;
        height: 2px;
        left: -1px;
        top: -1px;
        background: #0f1923;
        position: absolute;
        transition: 0.3s ease-out all;
      }
    }

    & > span.bg {
      left: -5%;
      position: absolute;
      background: ${({ theme }) => (theme.mode === 'light' ? '#00cde3' : '#00ff95')} !important;
      width: 0;
      height: 100%;
      z-index: 3;
      transition: 0.3s ease-out all;
      transform: skewX(-10deg);
    }

    & > span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      &:after {
        content: "";
        width: 4px;
        height: 4px;
        right: 0;
        bottom: 0;
        background: #0f1923;
        position: absolute;
        transition: 0.3s ease-out all;
        z-index: 5;
      }
    }
  }

  &:hover > p {
    color: #ece8e1;

    & > span.bg {
      width: 110%;
    }

    & > span.text:after {
      background: #ece8e1;
    }
  }

  &.white:hover > p {
    color: #ece8e1;
  }

  &.white > p {
    background: #ece8e1;
    color: #0f1923;

    & > span.base {
      border: 1px solid transparent;
    }
  }

  &.transparent:hover > p {
    color: #ece8e1;

    & > span.text {
      box-shadow: 0 0 0 1px #ece8e1;
    }
  }

  &.transparent > p {
    background: ${({ theme }) => (theme.mode === 'light' ? '#292929' : '#ede5e5')} !important;
    color: ${({ theme }) => (theme.mode === 'light' ? '#ede5e5' : '#161515')} !important;

    &:hover {
      color: ${({ theme }) => (theme.mode === 'light' ? '#ede5e5' : '#ede5e5')} !important;
    }

    & > span.base {
      border: 1px solid #ece8e1;
    }
  }
`;
