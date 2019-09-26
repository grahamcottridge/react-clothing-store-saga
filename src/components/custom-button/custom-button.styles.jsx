import styled, { css } from "styled-components";

export const invertedButtonStyles = css`
  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;

export const googleSignInStyles = css`
  &.google-sign-in {
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
`;

export const CustomButtonContainer = styled.button`
  min-width: 65px;
  max-width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 15px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
