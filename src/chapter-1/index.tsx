import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  border: '1rem solid hsla(0,0%,100%,0.3)',
  background: 'hsla(10,10%,10%,0.7)',
});
const ShowParentBackground = styled(Container)({
  backgroundClip: 'padding-box',
});

const Main = styled.div({
  background: 'url(assets/favicon.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'grid',
  gridRowGap: '2rem',
  padding: '5rem',
  height: '40rem',
});

export const TransparentBorder = (): JSX.Element => (
  <Main>
    <Container />
    <ShowParentBackground />
  </Main>
);
