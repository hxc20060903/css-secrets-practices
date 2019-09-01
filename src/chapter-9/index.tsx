import React from 'react';
import styled from 'styled-components';

const Main = styled.div({
  display: 'grid',
  gridRowGap: '1rem',
  margin: '2rem',
});

const Block = styled.div({
  height: '8rem',
  width: '20rem',
  backgroundColor: 'orange',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  ':hover': {
    backgroundImage: 'linear-gradient(hsla(0, 0%, 100%, 0.4) 0, hsla(0, 0%, 100%, 0.4) 100%)',
  },
});

const HalfEllipse = styled(Block)({
  borderRadius: '50% / 100% 100% 0 0',
});
const HalfEllipse2 = styled(Block)({
  borderRadius: '0 100% 100% 0 / 50%',
});
const HalfEllipse3 = styled(Block)({
  borderRadius: '50% / 0 0 100% 100%',
});
const HalfEllipse4 = styled(Block)({
  borderRadius: '100% 0 0 100% / 50%',
});
const Pot = styled(Block)({
  // because all corners has 100%, each corner is reassign height 50%,
  // then each corner is drawn respectively.
  // That means the 100%-width of each corner is reset as 50% of container-width.
  borderRadius: '0 0 50% 50% / 100%',
});
const QuarterEllipse = styled(Block)({
  borderRadius: '100% 0 0 0',
});

export const Shapes = (): JSX.Element => (
  <Main>
    <HalfEllipse>HalfEllipse</HalfEllipse>
    <HalfEllipse2>HalfEllipse2</HalfEllipse2>
    <HalfEllipse3>HalfEllipse3</HalfEllipse3>
    <HalfEllipse4>HalfEllipse4</HalfEllipse4>
    <Pot>Pot</Pot>
    <QuarterEllipse>QuarterEllipse</QuarterEllipse>
  </Main>
);
