import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { Tab, Tabs } from '.';
import styled from '@emotion/styled';

const TabComponent = {
  title: 'Component/common/Tab',
  component: Tab
};
export default TabComponent;

type TabProps = ComponentProps<typeof Tab>;

const TabTemplate: StoryFn<TabProps> = () => {
  return (
    <Container>
      <Tabs>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
        <Tab title="고기칸">Test 1</Tab>
        <Tab title="야채칸">Test 2</Tab>
        <Tab title="과일칸">Test 3</Tab>
        <Tab title="기타">Test 4</Tab>
      </Tabs>
    </Container>
  );
};

/**
 * 메인 버튼 컴포넌트 입니다.
 */
export const Default = TabTemplate.bind({});
Default.args = {};

const Container = styled.div`
  height: 60vh;
  width: 500px;
`;
