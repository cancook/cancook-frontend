import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import styled from '@emotion/styled';
import Accordion from '.';

const AccordionComponent = {
  title: 'Component/common/Accordion',
  component: Accordion
};
export default AccordionComponent;

type AccordionProps = ComponentProps<typeof Accordion>;

const AccordionTemplate: StoryFn<AccordionProps> = () => {
  return (
    <Container>
      <Accordion title="타이틀1">
        #새우젓 #애호박 #들기름 부서지지 않고 모양이 살아있는 애호박볶음! 다른
        반찬은 생각도 안 나게 만드는 애호박볶음!밥 넉넉하게 안치고 시청하세요!
      </Accordion>
    </Container>
  );
};

/**
 * 메인 버튼 컴포넌트 입니다.
 */
export const Default = AccordionTemplate.bind({});
Default.args = {};

const Container = styled.div`
  width: 20.9375rem;
`;
