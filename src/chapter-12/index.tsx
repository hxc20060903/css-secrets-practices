import React from 'react';
import styled from 'styled-components';

const Block = styled.div({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10rem',
  width: ' 15rem',
});

const Main = styled.div({
  margin: '1rem',
  display: 'grid',
  gridRowGap: '3rem',
  justifyContent: 'center',
});

const CutoutCorner1 = styled(Block)({
  background: 'linear-gradient(-45deg, transparent 15px, #58a 0)',
});

const CutoutCorner2 = styled(Block)({
  background: 'linear-gradient(-45deg, transparent 15px, #58a 0) right, linear-gradient(45deg, transparent 15px, #655 0) left',
  backgroundSize: '50% 100%',
  backgroundRepeat: 'no-repeat',
});

const CutoutCornerFull = styled(Block)({
  background: `linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
               linear-gradient(45deg, transparent 15px, #655 0) bottom left,
               linear-gradient(135deg, transparent 15px, #655 0) top left,
               linear-gradient(-135deg, transparent 15px, #58a 0) top right`,
  backgroundSize: '50% 50%',
  backgroundRepeat: 'no-repeat',
});

const CurvedCutoutCorner = styled(Block)({
  background: `radial-gradient(circle at top left, transparent 20px, #58a 0) top left,
               radial-gradient(circle at top right, transparent 20px, #58a 0) top right,
               radial-gradient(circle at bottom right, transparent 20px, #58a 0) bottom right,
               radial-gradient(circle at bottom left, transparent 20px, #58a 0) bottom left`,
  backgroundSize: '50% 50%',
  backgroundRepeat: 'no-repeat',
});

const BorderImageCutoutCorner = styled(Block)({
  border: '15px solid #58a',
  borderImage: `1 url('data:image/svg+xml,\
    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
      <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
    </svg>')`,
  backgroundImage: 'radial-gradient(closest-side, hsla(0, 0%, 100%, .3), transparent)',
  backgroundColor: '#58a',
  backgroundClip: 'padding-box',
});

const ClipPathCutoutCorner = styled(Block)({
  backgroundColor: '#58a',
  backgroundImage: 'radial-gradient(closest-side, hsla(0, 0%, 100%, .3), transparent)',
  clipPath: `polygon(
    20px 0, calc(100% - 20px) 0, 100% 20px,
    100% calc(100% - 20px), calc(100% - 20px) 100%,
    20px 100%, 0 calc(100% - 20px), 0 20px
  )`
});

export const CutoutCorners = () : JSX.Element => (
  <Main>
    <CutoutCorner1>CutoutCorner1</CutoutCorner1>
    <CutoutCorner2>CutoutCorner2</CutoutCorner2>
    <CutoutCornerFull>CutoutCornerFull</CutoutCornerFull>
    <CurvedCutoutCorner>CurvedCutoutCorner</CurvedCutoutCorner>
    <BorderImageCutoutCorner>BorderImageCutoutCorner</BorderImageCutoutCorner>
    <ClipPathCutoutCorner>ClipPathCutoutCorner</ClipPathCutoutCorner>
  </Main>
);
