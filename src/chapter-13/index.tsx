import React from 'react';
import styled from 'styled-components';

const Tab = styled.a({
  position: 'relative',
  display: 'inline-block',
  padding: '.5rem 1rem 0.2rem',
  cursor: 'pointer',

  ':before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    background: '#58a',
    backgroundImage: 'linear-gradient(hsla(0, 0%, 100%, .6), hsla(0, 0%, 100%, 0))',
    border: '1px solid #555',
    borderBottom: 'none',
    borderRadius: '.5rem .5rem 0 0',
    boxShadow: '0, .15rem white inset',
    transform: 'perspective(.5rem) rotateX(5deg)',
    transformOrigin: 'bottom',
  },
});

const Tab2 = styled(Tab)({
  ':before': {
    transformOrigin: 'left bottom',
  },
});

const Tab3 = styled(Tab)({
  padding: '.5rem 1rem .2rem 1.5rem',
  marginRight: '-.8rem',
  ':before': {
    transformOrigin: 'right bottom',
  },
});

const Main = styled.nav({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
});

export const TrapezoidTabs = () : JSX.Element => (
  <Main>
    <Tab>item 1</Tab>
    <Tab2>item 2</Tab2>
    <Tab3>item 3</Tab3>
    <Tab3>item 3-2</Tab3>
    <Tab3>item 3-3</Tab3>
  </Main>
);
