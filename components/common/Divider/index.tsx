import styled from '@emotion/styled';
import React from 'react';

const Divider = () => {
  return <Line />;
};

const Line = styled.hr`
  width: 100%;
  margin: 0;
  border: 0.05rem solid;
  height: 0;
  border-color: ${({ theme }) => theme.colors.gray[400]};
`;

export default Divider;
