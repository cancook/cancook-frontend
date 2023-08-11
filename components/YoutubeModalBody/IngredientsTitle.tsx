import styled from '@emotion/styled';
import React from 'react';

const IngredientsTitle = () => {
  return (
    <Title>
      <h2>재료</h2>
      <div>
        <span>2</span>
        <span>7</span>
      </div>
    </Title>
  );
};

export default IngredientsTitle;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  width: 100%;

  ${({ theme }) => theme.screen.tablet} {
    margin-bottom: 0.75rem;
  }

  > h2 {
    ${({ theme }) => theme.font.label.lg};

    ${({ theme }) => theme.screen.tablet} {
      ${({ theme }) => theme.font.title.md};
    }
  }

  > div {
    ${({ theme }) => theme.font.label.sm};
    margin-right: 0.5rem;
    ${({ theme }) => theme.screen.tablet} {
      ${({ theme }) => theme.font.label.md};
      margin-right: 0;
    }
  }

  > div > span {
    &:first-of-type {
      color: ${({ theme }) => theme.colors.yellow[400]};
    }
    &:first-of-type::after {
      content: '/';
      color: ${({ theme }) => theme.colors.white[0]};
    }
  }
`;
