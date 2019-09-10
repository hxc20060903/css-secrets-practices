import React from 'react';
import styled from 'styled-components';

const Main = styled.div({
  height: '100vh',
  width: '100vw',
  background: 'url(/assets/favicon.jpg) 0 / cover fixed',
  paddingTop: '10vh',
  position: 'relative',
  zIndex: 0,
});

const Wrapper = styled.div({
  position: 'relative',
  padding: '1rem',
  background: 'hsla(0, 0%, 100%, .3)',
  boxShadow: '0 0 0 1px hsla(0,0%,100%,.3) inset, 0 0.5em 1em rgba(0, 0, 0, 0.6)',
  textShadow: '0 1px 1px hsla(0, 0%, 100%, .3)',
  height: '20vh',
  overflow: 'hidden', // remove blurring outside of container

  '::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'url(/assets/favicon.jpg) 0 / cover fixed',
    zIndex: -1,
    filter: 'blur(20px)',
    margin: -20, // enlarge blurring area to fill the whole container
  },
})

export const FrostedGlass = () : JSX.Element => (
  <Main>
    <Wrapper><div>Content</div></Wrapper>
  </Main>
);

