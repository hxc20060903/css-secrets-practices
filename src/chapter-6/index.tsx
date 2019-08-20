import React from 'react';
import styled from 'styled-components';

const Block = styled.div({
  height: '10rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const GridBackground = styled(Block)({
  background: 'white',
  backgroundImage: 'linear-gradient(rgba(255, 0, 0, .5) 50%, transparent 0), linear-gradient(90deg, rgba(255, 0, 0, .5) 50%, transparent 0)',
  backgroundSize: '40px 40px',
  height: '10rem',
});

const GridBackground2 = styled(Block)({
  background: '#58a',
  backgroundImage: 'linear-gradient(white 1px, transparent 0), linear-gradient(90deg, white 1px, transparent 0)',
  backgroundSize: '30px 30px',
});

const GridBackground3 = styled(Block)({
  background: '#58a',
  // eslint-disable-next-line max-len
  backgroundImage: 'linear-gradient(white 2px, transparent 0), linear-gradient(90deg, white 2px, transparent 0), linear-gradient(hsla(0, 0%, 100%, .3) 1px, transparent 0), linear-gradient(90deg, hsla(0, 0%, 100%, .3) 1px, transparent 0)',
  backgroundSize: '75px 75px, 75px 75px, 15px 15px, 15px 15px',
});

const PolkaDot = styled(Block)({
  background: '#655',
  backgroundImage: 'radial-gradient(tan 32%, transparent 0)',
  backgroundSize: '40px 40px',
});

const OverlayPolkaDot = styled(Block)({
  background: '#655',
  backgroundImage: 'radial-gradient(tan 32%, transparent 0), radial-gradient(tan 32%, transparent 0)',
  backgroundSize: '40px 40px',
  backgroundPosition: '0 0, 20px 20px',
});

const CheckerBoardHalf = styled(Block)({
  background: '#eee',
  backgroundImage: 'linear-gradient(45deg, #bbb 25%, transparent 0), linear-gradient(45deg, transparent 75%, #bbb 0)',
  backgroundPosition: '0 0, 15px 15px',
  backgroundSize: '30px 30px',
});

const CheckerBoard = styled(Block)({
  background: '#eee',
  // eslint-disable-next-line max-len
  backgroundImage: 'linear-gradient(45deg, #bbb 25%, transparent 0, transparent 75%, #bbb 0), linear-gradient(45deg, #bbb 25%, transparent 0, transparent 75%, #bbb 0)',
  backgroundPosition: '0 0, 20px 20px',
  backgroundSize: '40px 40px',
});

const Main = styled.div({
  display: 'grid',
  gridRowGap: '1rem',
});

export const ComplexBackground = (): JSX.Element => (
  <Main>
    <GridBackground>GridBackground</GridBackground>
    <GridBackground2>GridBackground2</GridBackground2>
    <GridBackground3>GridBackground3</GridBackground3>

    <PolkaDot>PolkaDot</PolkaDot>
    <OverlayPolkaDot>OverlayPolkaDot</OverlayPolkaDot>
    <CheckerBoardHalf>CheckerBoardHalf</CheckerBoardHalf>
    <CheckerBoard>CheckerBoard</CheckerBoard>
  </Main>
);
