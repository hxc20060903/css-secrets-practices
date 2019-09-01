import React, { ComponentProps } from 'react';
import styled, { Keyframes, keyframes, css } from 'styled-components';
import { FlexiblePieChart } from './flexible-pie-chart';

const fillup = (percentage: number): Keyframes => keyframes({
  to: { strokeDasharray: `${percentage} 100` },
});

interface SliceProps {
  percentage: number;
  offsetPercentage: number;
  stroke: string;
}
const Slice = styled.circle(
  {
    fill: 'transparent',
    stroke: '#655',
    strokeWidth: 32,
    strokeDasharray: '0 100', // collaborate with animation
    pointerEvents: 'visibleStroke',
    ':hover': {
      cursor: 'pointer',
    },
  },
  ({ percentage }: SliceProps) => css`
    animation: ${fillup(percentage)} 1s ease-out forwards;
  `,
  ({ offsetPercentage, stroke }: SliceProps) => ({
    stroke,
    strokeDashoffset: -1 * offsetPercentage,
  }),
);

const Pie = styled.svg({
  width: '6rem',
  height: '6rem',
  borderRadius: '050%',
  background: '#eee',
  transform: 'rotate(-90deg)',
});

const SliceBase = (props: ComponentProps<typeof Slice>): JSX.Element => (
  <Slice r="16" cx="16" cy="16" {...props} />
);

const PieChart = (): JSX.Element => (
  <Pie viewBox="0 0 32 32">
    <SliceBase stroke="brown" percentage={30} offsetPercentage={0} onMouseEnter={() => console.log('1')} />
    <SliceBase stroke="blue" percentage={20} offsetPercentage={30} onMouseEnter={() => console.log('2')} />
    <SliceBase stroke="green" percentage={40} offsetPercentage={50} onMouseEnter={() => console.log('3')} />
  </Pie>
);

export const PieChartExample = (): JSX.Element => (
  <div>
    <PieChart />

    <FlexiblePieChart
      diameter="8rem"
      items={[
        { percentage: 20, color: 'yellowgreen', content: 'part 1' },
        { percentage: 35, color: '#58a', content: 'part 2' },
        { percentage: 45, color: 'orange', content: 'part 3' },
      ]}
    />
  </div>
);
