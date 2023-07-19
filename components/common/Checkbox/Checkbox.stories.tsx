import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import CheckboxField, { CheckboxFieldProps } from '.';
import styled from '@emotion/styled';

const meta = {
  title: 'Component/common/Checkbox',
  component: CheckboxField
} satisfies Meta<CheckboxFieldProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const CheckboxSample = ({ ...props }: Partial<CheckboxFieldProps>) => {
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  console.log(isAgreed);

  return (
    <CheckboxWrapper>
      <CheckboxField
        {...props}
        checked={isAgreed}
        name={'isAccessable'}
        setValue={() => {
          setIsAgreed((prev) => !prev);
        }}
      />
    </CheckboxWrapper>
  );
};

export const Default = {
  render: ({ ...args }) => <CheckboxSample {...args} />,
  args: {
    name: '',
    label: '전체동의',
    checked: false
  }
} satisfies Story;

const CheckboxWrapper = styled.div`
  padding: 2rem;
  margin: auto;
`;
