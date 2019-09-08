import React from 'react';
import styled from 'styled-components';

const Block = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Parallelograms = styled(Block)({
  position: 'relative',
  height: '5rem',
  width: '10rem',
  ':before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    background: '#58a',
    transform: 'skew(45deg)',
  },
});

const Diamond = styled(Block)({
  position: 'relative',
  height: '5rem',
  width: '5rem',
  ':before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    borderRadius: '5px 10px',
    background: '#58a',
    transform: 'rotate(45deg)',
  },
});

const Main = styled.div({
  display: 'grid',
  gridRowGap: '5rem',
  margin: '2rem',
});

export const ParallelogramsExamples = () : JSX.Element => (
  <Main>
    <Parallelograms>Parallelograms</Parallelograms>
    <Diamond>Diamond</Diamond>
  </Main>
);
