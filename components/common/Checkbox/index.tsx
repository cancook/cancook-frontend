import React from 'react';
import styled from '@emotion/styled';

import CheckIcon from '@/public/svg/check.svg';

export interface CheckboxFieldProps {
  className?: string;
  name: string;
  id?: string;
  label?: string;
  checked: boolean;
  setValue: () => void;
  link?: string;
}

const CheckboxField = ({
  className,
  name,
  id,
  label,
  checked,
  setValue,
  link
}: CheckboxFieldProps) => {
  return (
    <Field className={className}>
      <div className="checkbox-wrapper">
        <input
          className="radio"
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={setValue}
        />
        <span className="checkmark">
          <CheckIcon className="checkImage" />
        </span>
      </div>
      <span className="label" onClick={setValue}>
        {label}
      </span>
    </Field>
  );
};

export default CheckboxField;

const Field = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  * {
    cursor: pointer;
  }
  .checkbox-wrapper {
    position: relative;
    width: 1rem;
    height: 1rem;
  }

  .radio {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 10;
  }

  // on click
  .radio:checked + .checkmark > .checkImage {
    opacity: 1;
    border-color: ${({ theme }) => theme.colors.yellow[400]};
    background-color: ${({ theme }) => theme.colors.yellow[400]};
  }
  .radio:checked + .checkmark {
    border-color: ${({ theme }) => theme.colors.yellow[400]};
    background-color: ${({ theme }) => theme.colors.yellow[400]};
  }

  .checkmark {
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
  }

  .checkImage {
    transition: all 100ms ease-in-out;
    opacity: 0;
    margin: 0;
  }

  .label {
    text-align: left;
    flex: 1;

    font-size: 1rem;
    color: white;
  }
`;
