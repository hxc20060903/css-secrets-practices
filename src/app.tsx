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
import { ParallelogramsExamples } from 'chapter-10';
import { DiamondImage } from 'chapter-11';
import { CutoutCorners } from 'chapter-12';
import { TrapezoidTabs } from 'chapter-13';
import { PieChartExample } from 'chapter-14';
import { BoxShadows } from 'chapter-15';
import { IrregularDropShadows } from 'chapter-16';
import { FrostedGlass } from 'chapter-18';
import { Hyphenation } from 'chapter-20';
import { LineBreakInsertion } from 'chapter-21';
import { ZebraStripedTextLines } from 'chapter-22';
import { FluidBackgroundFixedContent } from 'chapter-39';

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
  10: ParallelogramsExamples,
  11: DiamondImage,
  12: CutoutCorners,
  13: TrapezoidTabs,
  14: PieChartExample,
  15: BoxShadows,
  16: IrregularDropShadows,
  17: IrregularDropShadows, //
  18: FrostedGlass,
  20: Hyphenation,
  21: LineBreakInsertion,
  22: ZebraStripedTextLines,
  39: FluidBackgroundFixedContent,
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
