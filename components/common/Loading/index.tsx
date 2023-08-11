import styled from '@emotion/styled';
import React from 'react';

type SpinnerProps = {
  width?: number;
  height?: number;
  strokeWidth?: number;
  color?: string;
};

const Loading = ({
  width = 48,
  height = 48,
  strokeWidth = 8,
  color = '#ff6937'
}) => {
  return (
    <Spinner
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      color={color}
    />
  );
};

export default Loading;

const Spinner = styled.div<SpinnerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: ${({ strokeWidth }) => strokeWidth}px solid #f3f3f3;
  border-top: ${({ strokeWidth }) => strokeWidth}px solid
    ${({ color }) => color};
  border-radius: 50%;
  animation: spin 1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
