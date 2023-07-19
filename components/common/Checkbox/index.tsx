import React from 'react';
import styled from '@emotion/styled';

import Image from 'next/image';

export interface CheckboxFieldProps {
  className?: string;
  name: string;
  id?: string;
  label?: string;
  checked: boolean;
  setValue: () => void;
}

const CheckboxField = ({
  className,
  name,
  id,
  label,
  checked,
  setValue
}: CheckboxFieldProps) => {
  return (
    <Field className={className}>
      <CheckboxWrapper>
        <InvisibleRadio
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={setValue}
        />
        <Checkbox className="checkbox">
          <Image
            src={'/svg/check.svg'}
            alt="check-svg"
            className="check-svg"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Checkbox>
      </CheckboxWrapper>
      <Label className="label" onClick={setValue}>
        {label}
      </Label>
    </Field>
  );
};

export default CheckboxField;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  * {
    cursor: pointer;
  }
`;

const CheckboxWrapper = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;

  ${({ theme }) => theme.screen.desktop} {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const InvisibleRadio = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 10;

  &:checked + .checkbox > .check-svg {
    opacity: 1;
    border-color: ${({ theme }) => theme.colors.yellow[400]};
    background-color: ${({ theme }) => theme.colors.yellow[400]};
  }

  &:checked + .checkbox {
    border-color: ${({ theme }) => theme.colors.yellow[400]};
    background-color: ${({ theme }) => theme.colors.yellow[400]};
  }
`;

const Checkbox = styled.span`
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  transition: all 100ms ease-in-out;

  width: 100%;
  height: 100%;

  border-radius: 0.25rem;

  .check-svg {
    transition: all 100ms ease-in-out;
    opacity: 0;
    margin: 0;
  }

  ${({ theme }) => theme.screen.desktop} {
    .check-svg {
      width: 1rem !important;
      height: 1rem !important;
      top: 2px !important;
      left: 2px !important;
    }
  }
`;

const Label = styled.label`
  text-align: left;
  flex: 1;

  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem; /* 137.5% */
  letter-spacing: -0.0375rem;

  ${({ theme }) => theme.screen.desktop} {
    font-size: 1.25rem;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.0375rem;
  }
`;
