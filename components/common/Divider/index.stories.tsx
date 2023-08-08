import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import Divider from '.';
import styled from '@emotion/styled';

const DividerComponent = {
  title: 'Component/common/Divider',
  component: Divider
};
export default DividerComponent;

type DividerProps = ComponentProps<typeof Divider>;

const DividerTemplate: StoryFn<DividerProps> = () => {
  return (
    <Container>
      <Divider />
    </Container>
  );
};

/**
 * 메인 버튼 컴포넌트 입니다.
 */
export const Default = DividerTemplate.bind({});
Default.args = {};

const Container = styled.div`
  padding: 1rem;
`;
