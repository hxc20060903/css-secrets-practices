import React from 'react';
import styled from 'styled-components';

const Block = styled.div({
  height: '8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
});
const LinearGradient = styled(Block)({
  background: 'linear-gradient(#fb3 20%, #58a 80%)',
});
const RepeatedLinearGradient = styled(LinearGradient)({
  backgroundSize: '100% 2rem',
});

const RepeatedStripes = styled(Block)({
  background: 'linear-gradient(#fb3 30%, #58a 0, #58a 66.6%, yellowgreen 0)', // straightforward color change
  backgroundSize: '100% 4rem',
});
const VerticalRepeatedStripes = styled(Block)({
  background: 'linear-gradient(to right, #fb3 30%, #58a 0, #58a 66.6%, yellowgreen 0)',
  backgroundSize: '100px 100%',
});
const DiagonalRepeatedStripes = styled(Block)({
  background: 'linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0)',
  backgroundSize: '4rem 4rem',
});
const BetterDiagonalRepeatedStripes = styled(Block)({
  background: 'repeating-linear-gradient(20deg, #fb3, transparent 50px)',
});
const UseBackgroundImageToImposeTransparencyLayer = styled(Block)({
  background: '#58a',
  backgroundImage: 'repeating-linear-gradient(30deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px)',
});
const Main = styled.div({
  padding: '3rem',
  display: 'grid',
  gridRowGap: '2rem',
});

export const StripedBackground = (): JSX.Element => (
  <Main>
    <LinearGradient>LinearGradient</LinearGradient>
    <RepeatedLinearGradient>RepeatedLinearGradient</RepeatedLinearGradient>
    <RepeatedStripes>RepeatedStripes</RepeatedStripes>
    <VerticalRepeatedStripes>VerticalRepeatedStripes</VerticalRepeatedStripes>
    <DiagonalRepeatedStripes>DiagonalRepeatedStripes</DiagonalRepeatedStripes>
    <BetterDiagonalRepeatedStripes>BetterDiagonalRepeatedStripes</BetterDiagonalRepeatedStripes>
    <UseBackgroundImageToImposeTransparencyLayer>UseBackgroundImageToImposeTransparencyLayer</UseBackgroundImageToImposeTransparencyLayer>
  </Main>
);
