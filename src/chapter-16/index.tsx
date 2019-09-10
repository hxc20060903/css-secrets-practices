import React from 'react';
import styled from 'styled-components';

const DottedBorder = styled.div({
  height: '20rem',
  width: '20rem',
  border: '20px dashed yellow',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  filter: 'drop-shadow(2px 2px 5px rgba(0, 0, 0, .6))',
  fontSize: '3rem',
});

export const IrregularDropShadows = () : JSX.Element => (
  <div style={{ display: 'grid', gridRowGap: '2rem', justifyContent: 'center' }}>
    <DottedBorder />
    <DottedBorder>DottedBorder</DottedBorder>
  </div>
);

