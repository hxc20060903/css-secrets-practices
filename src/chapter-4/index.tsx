import React from 'react';
import styled from 'styled-components';

const Main = styled.div({
  background: 'tan',
  borderRadius: '.8em',
  padding: '1em',
  outline: '.6em solid #655',
  boxShadow: '0 0 0 .4em #655',
  margin: '2rem',
});
export const InnerRoundedBorder = (): JSX.Element => (
  <Main>Use outline to mock a border. Use boxShadow to fill the inner-space to mock rounded inner-borders</Main>
);
