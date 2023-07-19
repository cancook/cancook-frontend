import { ComponentProps, useState } from 'react';
import Toggle from '.';
import { StoryFn } from '@storybook/react';
import styled from '@emotion/styled';

const ToggleComponent = {
  title: 'Component/common/Toggle',
  component: Toggle
};
export default ToggleComponent;

type ToggleProps = ComponentProps<typeof Toggle>;

const ToggleTemplate: StoryFn<ToggleProps> = ({ ...args }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <ToggleWrapper>
      <Toggle
        checked={isChecked}
        setValue={() => setIsChecked((prev) => !prev)}
      />
    </ToggleWrapper>
  );
};

/**
 * 메인 토글 컴포넌트 입니다.
 */
export const Default = ToggleTemplate.bind({});
Default.args = {};

const ToggleWrapper = styled.div`
  padding: 2rem;
  margin: auto;
`;
