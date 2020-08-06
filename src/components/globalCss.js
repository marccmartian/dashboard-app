import { Global, css } from '@emotion/core'
import React from "react";

export default function GlobalStyles() {
  return (
    <Global styles={
      css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
        }
        a {
          color:inherit;
          text-decoration: none;
        }
      `
    } />
  );
}