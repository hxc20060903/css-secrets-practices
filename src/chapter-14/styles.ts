import styled, { Keyframes, css, keyframes } from 'styled-components';

export const radius = 16;
const coefficient = 2 * Math.PI * radius / 100;
const fillup = (percentage : number) : Keyframes => keyframes({
  // stroke-length = percentage * (2 * Math.PI * radius / 100)
  to: { strokeDasharray: `${coefficient * percentage} 315%` },
});

export const Pie = styled.svg({
  borderRadius: '50%',
  transform: 'rotate(-90deg)',
});
export const filterId = `${Pie}-filter`;

export interface ISliceProps {
  percentage : number;
  offsetPercentage : number;
  stroke : string;
}
export const BackgroundCircle = styled.circle({
  fill: '#ddd',
  pointerEvents: 'none',
});
export const CircleSlice = styled.circle(
  {
    fill: 'transparent',
    strokeWidth: '32', // corresponds to radius
    strokeDasharray: '0 100', // collaborate with animation
    pointerEvents: 'visibleStroke',
    transform: 'translate(50%, 50%) scale(0.5) translate(-50%, -50%)', // corresponds to view-box
    ':hover': {
      cursor: 'pointer',
      filter: `url(#${filterId})`,
      opacity: 0.8,
      transform: 'translate(50%, 50%) scale(1) translate(-50%, -50%)',
    },
  },
  ({ percentage } : ISliceProps) => css`
    animation: ${fillup(percentage)} 1s ease-out forwards;
  `,
  ({ offsetPercentage, stroke } : ISliceProps) => ({
    stroke,
    strokeDashoffset: -1 * offsetPercentage * coefficient,
  }),
);

export const Wrapper = styled.div({
  position: 'relative',
}, ({ diameter } : { diameter : string }) => ({
  height: diameter,
  width: diameter,
}));

export const HoverContent = styled.div<{
  middlePercentage : number;
  isOpen : boolean;
}>({
  position: 'absolute',
  padding: 12,
  borderRadius: 4,

  background: 'rgba(0, 0, 0, 0.75)',
  color: 'white',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  zIndex: 100,

  transition: 'all 0.2s ease-out',
  pointerEvents: 'none',
}, ({ middlePercentage }) => {
  if (middlePercentage < 25) {
    return {
      left: `${50 + middlePercentage * 2}%`, // 50 -> 100
      bottom: `${100 - middlePercentage * 2}%`, //  100 -> 50
    };
  }
  if (middlePercentage < 50) {
    return {
      left: `${150 - 2 * middlePercentage}%`, // 100 -> 50
      top: `${2 * middlePercentage}%`, // 50 -> 100
    };
  }
  if (middlePercentage < 75) {
    return {
      left: `${90 - 0.8 * middlePercentage}%`, // 50 -> 30
      top: `${200 - 2 * middlePercentage}%`, // 100 -> 50
    };
  }
  return {
    left: `${0.8 * middlePercentage - 30}%`, // 30 -> 50
    bottom: `${2 * middlePercentage - 100}%`, // 50 -> 100
  };
}, ({ isOpen }) => ({
  display: isOpen ? 'flex' : 'none',
  flexFlow: 'row nowrap',
  alignItems: 'center',
}));

export const Point = styled.div({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  marginRight: '6px',
}, ({ backgroundColor } : { backgroundColor : string }) => ({
  backgroundColor,
}));
