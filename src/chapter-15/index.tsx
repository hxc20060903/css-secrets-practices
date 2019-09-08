import React from 'react';
import styled from 'styled-components';

const Block = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  height: '8rem',
  width: '15rem',
  background: '#58a',
});

const Main = styled.div({
  display: 'grid',
  gridRowGap: '4rem',
  margin: '2rem',
  justifyContent: 'center',
});

const SingleShadow = styled(Block)({
  boxShadow: '5px 0 5px -5px rgba(0, 0, 0, .8)',
});
const AdjacentShadow = styled(Block)({
  // -5px shadow in both ends of each dimension
  // leads to -10px in the length of shadow in each dimension
  // Additional offsets then applied to cancel shadow in some sides.
  boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, .8)',
});
const OppositeShadow = styled(Block)({
  boxShadow: `-5px 0 10px -5px rgba(0, 0, 0, .8),
              5px 0 10px -5px rgba(0, 0, 0, .8)`,
});

export const BoxShadows = () : JSX.Element => (
  <Main>
    <SingleShadow>SingleShadow</SingleShadow>
    <AdjacentShadow>AdjacentShadow</AdjacentShadow>
    <OppositeShadow>OppositeShadow</OppositeShadow>
  </Main>
);
