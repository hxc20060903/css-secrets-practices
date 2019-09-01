import React, { ReactNode, useState, useCallback } from 'react';
import {
  CircleSlice,
  Pie,
  filterId,
  Wrapper,
  HoverContent,
  Point,
  BackgroundCircle,
  radius,
} from './styles';

interface IPieChartProps {
  items: Array<{
    percentage : number;
    color : string;
    content : ReactNode;
  }>;
  diameter: string;
}

export const FlexiblePieChart = ({
  items,
  diameter,
}: IPieChartProps): JSX.Element => {
  const offsetPercentages = items.reduce<Array<number>>((reduced, next, index, array) => {
    reduced.push(index === 0
      ? 0
      : reduced[index - 1] + array[index - 1].percentage);
    return reduced;
  }, []);
  const [contentOffsetPercent, setContentOffsetPercent] = useState<number>(null);
  const clearShowContentKey = useCallback(() => setContentOffsetPercent(null), []);

  const contentIndex = offsetPercentages.findIndex(i => i === contentOffsetPercent);
  const selectedItem = items[contentIndex];
  return (
    <Wrapper diameter={diameter} onMouseLeave={clearShowContentKey}>
      <HoverContent
        isOpen={Boolean(selectedItem)}
        middlePercentage={selectedItem
          ? contentOffsetPercent + selectedItem.percentage / 2
          : 0
        }
      >
        {selectedItem && (
          <>
            <Point backgroundColor={selectedItem.color} />
            {selectedItem.content}
          </>
        )}
      </HoverContent>
      <Pie viewBox="0 0 34 34">
        <defs>
          <filter id={filterId}>
            <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodOpacity="0.3" />
            <feDropShadow dx="-1" dy="-1" stdDeviation="0.5" floodOpacity="0.3" />
          </filter>
        </defs>
        <BackgroundCircle r={radius} cx="50%" cy="50%" />
        {items.map((item, index) => (
          <CircleSlice
            key={offsetPercentages[index]}
            r={radius}
            cx="50%"
            cy="50%"
            stroke={item.color}
            percentage={item.percentage}
            offsetPercentage={offsetPercentages[index]}
            onMouseEnter={() => setContentOffsetPercent(offsetPercentages[index])}
          />
        ))}
      </Pie>
    </Wrapper>
  );
};
