import React from 'react';
import styled from 'styled-components';

const Main = styled.pre({
  lineHeight: 1.5,
  background: 'beige',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 50%, transparent 0)',
  backgroundSize: 'auto 3em',
})

export const ZebraStripedTextLines = () : JSX.Element => (
  <Main>
    <code>
      {`
        const items = [1, 2, 3];
        const sum = items.reduce((reduced, next) => reduced + next, 0);
        if (sum > 5) {
          console.log(sum - 5);
        } else {
          console.log(5 - sum);
        }
        return sum;`
      }
    </code>
  </Main>
);
