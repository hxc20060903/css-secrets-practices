import React from 'react';
import styled from 'styled-components';

const Image = styled.img({
  clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
  transition: '1s clip-path',
  ':hover': {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
});

export const DiamondImage = () : JSX.Element => (
  <Image src="/assets/favicon.jpg" />
);
