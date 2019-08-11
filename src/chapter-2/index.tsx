import React from 'react';
import styled from 'styled-components';

const block = styled.div({
  padding: '15px',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const ShadowAsBorder = styled(block)({
  background: 'yellowgreen',
  boxShadow: '0 0 0 10px #655 inset, 0 0 0 15px inset pink, 0 2px 5px 2px rgba(0,0,0,.6)',
});
const OutlineAsBorder = styled(block)({
  background: 'yellowgreen',
  border: '10px solid #655',
  outline: '5px dashed pink',
  outlineOffset: '2px',
});
const Main = styled.div({
  display: 'grid',
  gridRowGap: '2rem',
  padding: '2rem',
});

export const Borders = (): JSX.Element => (
  <Main>
    <ShadowAsBorder>Overlay multiple box-shadows as multiple borders. Use padding to ensure spaces</ShadowAsBorder>
    <OutlineAsBorder>Use outline to mock the second border</OutlineAsBorder>
  </Main>
);
