import React from 'react';
import styled from 'styled-components';

const TextBlock = styled.div({
  width: '22rem',
  hyphens: 'auto',
});
const Main = styled.div({
  display: 'grid',
  justifyContent: 'center',
});

export const Hyphenation = () : JSX.Element => (
  <Main>
    <TextBlock>Auto Hyphenation: The only way to get rid of a temptation is to yield to it</TextBlock>
  </Main>
);
