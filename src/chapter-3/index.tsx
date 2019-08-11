import React from 'react';
import styled from 'styled-components';

const BackgroundOffset = styled.div({
  padding: '10px 20px',
  height: '8rem',
  background: 'url(/assets/favicon.jpg) no-repeat #58a',
  backgroundSize: 'contain',
  backgroundPosition: 'calc(100% - 5px) calc(100% - 5px)',
  backgroundOrigin: 'content-box',
});

const Main = styled.div({
  display: 'grid',
  gridRowGap: '1rem',
});

export const FlexibleBackground = (): JSX.Element => (
  <Main>
    <BackgroundOffset>Background with offset fallback</BackgroundOffset>
  </Main>
);
