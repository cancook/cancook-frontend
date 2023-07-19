import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  width?: string;
  height?: string;
};

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* font */
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 175% */
  letter-spacing: -0.0375rem;
  border: none;

  /* style */
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.yellow[400]};
  cursor: pointer;

  transition: background-color 0.15s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow[500]};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
export default Button;
