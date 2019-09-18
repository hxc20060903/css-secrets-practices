import React from 'react';
import styled from 'styled-components';

const Dt = styled.dt({
  display: 'inline',
  'dd + &::before': {
    content: '"\\A"',
    whiteSpace: 'pre',
  },
  'dt + &:before': {
    content: '", "',
  }
});

const Dd = styled.dd({
  display: 'inline',
  margin: 0,
  fontWeight: 'bold',
  'dd + &:before': {
    content: '", "',
    fontWeight: 'normal',
  },
  'dt + &': {
    marginLeft: '1rem',
  },
});

export const LineBreakInsertion = () : JSX.Element => (
  <dl>
    <Dt>Name</Dt>
    <Dd>Jack Huang</Dd>
    <Dt>Email</Dt>
    <Dd>hxc*********@gmail.com</Dd>
    <Dd>xiao*********@nomisma.one</Dd>
    <Dt>Job</Dt>
    <Dt>Title</Dt>
    <Dd>Software Engineer</Dd>
    <Dd>Frontend Engineer</Dd>
  </dl>
);
