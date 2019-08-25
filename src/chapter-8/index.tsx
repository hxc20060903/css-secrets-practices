import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Block = styled.div({
  height: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FirstAttempt = styled(Block)({
  padding: '1em',
  border: '1em solid transparent',
  background: 'linear-gradient(white, white), url(assets/favicon.jpg)',
  backgroundSize: 'cover',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box', // set background starting point
});

const FirstAttemptShorthand = styled(Block)({
  padding: '1em',
  border: '1em solid transparent',
  background: 'linear-gradient(white, white) padding-box, url(assets/favicon.jpg) border-box 0 / cover',
});

const Envelope = styled(Block)({
  padding: '1em',
  border: '1em solid transparent',
  // eslint-disable-next-line max-len
  background: 'linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) border-box 0 / 5rem 5rem',
});

const ants = keyframes({
  to: {
    backgroundPosition: '100rem',
  },
});
const MarchingAnts = styled(Block)({
  padding: '1em',
  border: '1px solid transparent',
  background: 'linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 /.6em .6em',
}, () => css`animation: ${ants} 20s linear infinite`);

const Main = styled.div({
  display: 'grid',
  gridRowGap: '2rem',
});

export const ContinuousImageBorder = (): JSX.Element => (
  <Main>
    <FirstAttempt>FirstAttempt</FirstAttempt>
    <FirstAttemptShorthand>FirstAttemptShorthand</FirstAttemptShorthand>
    <Envelope>Envelope</Envelope>
    <MarchingAnts>MarchingAnts</MarchingAnts>
  </Main>
);
