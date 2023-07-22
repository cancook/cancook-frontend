import styled from '@emotion/styled';
import React from 'react';

const Divider = () => {
  return <Line />;
};

const Line = styled.div`
  width: 100%;
  height: 0.05rem;
  background-color: ${({ theme }) => theme.colors.gray[400]};
`;

export default Divider;
