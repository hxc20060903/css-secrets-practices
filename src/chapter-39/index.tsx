import React from 'react';
import styled from 'styled-components';

const Main = styled.main({
  background: '#ddd',
});
const SectionTitle = styled.h1({
  fontSize: '1.4rem',
});
const Section = styled.section({
  padding: '1em calc(50% - 400px)',
  boxShadow: '0 2px 3px 1px #58a',
});
const InlineP = styled.p({
  width: 200,
  padding: '1em',
  display: 'inline-block',
  verticalAlign: 'top',
});

export const FluidBackgroundFixedContent = () : JSX.Element => (
  <Main>
    <Section>
      <SectionTitle>Fixed width of 800px centered</SectionTitle>
      <p>Nostrud landjaeger cillum beef cow tail cupidatat non mollit voluptate jowl. Enim sunt in, flank hamburger proident qui. Id aute excepteur chuck magna tempor ipsum pork chop t-bone. Frankfurter meatball pork loin beef et leberkas pork. Pig ball tip pancetta in.</p>
      <p>Ribeye in veniam ipsum flank. Elit incididunt t-bone proident meatball. Porchetta exercitation prosciutto sausage chuck ut eu brisket shank pastrami turkey sunt laboris tenderloin anim. Landjaeger do venison laboris kevin.</p>
    </Section>

    <Section>
      <InlineP>Nostrud landjaeger cillum beef cow tail cupidatat non mollit voluptate jowl. Enim sunt in, flank hamburger proident qui. Id aute excepteur chuck magna tempor ipsum pork chop t-bone. Frankfurter meatball pork loin beef et leberkas pork. Pig ball tip pancetta in.</InlineP>
      <InlineP>Ribeye in veniam ipsum flank. Elit incididunt t-bone proident meatball. Porchetta exercitation prosciutto sausage chuck ut eu brisket shank pastrami turkey sunt laboris tenderloin anim. Landjaeger do venison laboris kevin.</InlineP>
      <InlineP>Nostrud landjaeger cillum beef cow tail cupidatat non mollit voluptate jowl. Enim sunt in, flank hamburger proident qui. Id aute excepteur chuck magna tempor ipsum pork chop t-bone. Frankfurter meatball pork loin beef et leberkas pork. Pig ball tip pancetta in.</InlineP>
      <InlineP>Ribeye in veniam ipsum flank. Elit incididunt t-bone proident meatball. Porchetta exercitation prosciutto sausage chuck ut eu brisket shank pastrami turkey sunt laboris tenderloin anim. Landjaeger do venison laboris kevin.</InlineP>
      <InlineP>Nostrud landjaeger cillum beef cow tail cupidatat non mollit voluptate jowl. Enim sunt in, flank hamburger proident qui. Id aute excepteur chuck magna tempor ipsum pork chop t-bone. Frankfurter meatball pork loin beef et leberkas pork. Pig ball tip pancetta in.</InlineP>
      <InlineP>Ribeye in veniam ipsum flank. Elit incididunt t-bone proident meatball. Porchetta exercitation prosciutto sausage chuck ut eu brisket shank pastrami turkey sunt laboris tenderloin anim. Landjaeger do venison laboris kevin.</InlineP>
    </Section>
  </Main>
);
