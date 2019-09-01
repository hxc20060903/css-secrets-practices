import React, { useState, useCallback, ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { TransparentBorder } from 'chapter-1';
import { Borders } from 'chapter-2';
import { FlexibleBackground } from 'chapter-3';
import { InnerRoundedBorder } from 'chapter-4';
import { StripedBackground } from 'chapter-5';
import { ComplexBackground } from 'chapter-6';
import { ContinuousImageBorder } from 'chapter-8';
import { Shapes } from 'chapter-9';

const Demos = {
  1: TransparentBorder,
  2: Borders,
  3: FlexibleBackground,
  4: InnerRoundedBorder,
  5: StripedBackground,
  6: ComplexBackground,
  7: ComplexBackground, //
  8: ContinuousImageBorder,
  9: Shapes,
};
const DEMO_COUNT = Object.keys(Demos).length;

const Input = styled.input({
  width: '50%',
  height: '1.5rem',
  padding: '0 1rem',
  border: '2px solid #655',
});

const App = (): JSX.Element => {
  const [chapterNumber, setChapterNumber] = useState(1);
  const updateChapterNumber: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => setChapterNumber(Number(e.target.value)),
    [],
  );
  const Demo = Demos[chapterNumber];

  return (
    <div>
      Chapter:
      <Input type="number" value={chapterNumber} onChange={updateChapterNumber} min={1} max={DEMO_COUNT} />
      {Demo && <Demo />}
    </div>
  );
};
export default App;
