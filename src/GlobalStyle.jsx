import React from 'react';

import { Global, css } from '@emotion/core';

const GlobalStyles = css`
@font-face { 
  font-family: 'MapoFlowerIsland'; 
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') 
  format('woff'); 
  font-weight: normal; 
  font-style: normal; 
}

* {
  font-family: 'MapoFlowerIsland';
}
`;

export default function GlobalStyle() {
  return <Global styles={GlobalStyles} />;
}
