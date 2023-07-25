import styled from '@emotion/styled';
import React from 'react';

export type ToggleProps = {
  /** Toggle 가장 겉 컴포넌트에 적용되는 className 입니다. */
  className?: string;

  /** Toggle 의 value 값 입니다. */
  checked: boolean;

  /** Toggle 의 value 값을 변경하는 void 함수입니다. */
  setValue: () => void;
};

const Toggle = (props: ToggleProps) => {
  return (
    <ToggleWrapper {...props}>
      <ToggleInput
        type="checkbox"
        id="custom-toggle-input"
        checked={props.checked}
        onChange={() => {
          props.setValue();
        }}
      />
      <ToggleLabel
        htmlFor="custom-toggle-input"
        id="custom-toggle-label"
      ></ToggleLabel>
    </ToggleWrapper>
  );
};

export default Toggle;

const ToggleWrapper = styled.div<ToggleProps>`
  --toggle-width: 2.5rem;
  --toggle-height: 1.375rem;
  --button-size: 0.75rem;
  --button-y-pos: calc(calc(var(--toggle-height) - var(--button-size)) / 2);
  --button-x-pos-start: calc(
    calc(var(--toggle-height) - var(--button-size)) / 2
  );
  --button-x-pos-end: calc(
    var(--toggle-width) - calc(var(--toggle-height) - var(--button-size)) -
      calc(var(--button-size) / 2)
  );

  width: var(--toggle-width);
  height: var(--toggle-height);
  position: relative;
`;

const ToggleInput = styled.input`
  visibility: hidden;

  &:checked + #custom-toggle-label {
    background-color: ${({ theme }) => theme.colors.yellow[600]};
  }
  &:checked + #custom-toggle-label:after {
    left: var(--button-x-pos-end);
    background-color: ${({ theme }) => theme.colors.yellow[400]};
  }
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: calc(calc(60px / 2) + 2px);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    top: var(--button-y-pos);
    left: var(--button-x-pos-start);
    transition: all 0.2s ease-in-out;
  }
`;
