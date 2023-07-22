import styled from '@emotion/styled';
import React, { ReactNode, useState } from 'react';
import CloseIcon from '@/public/svg/arrow-up.svg';
import OpenIcon from '@/public/svg/arrow-down.svg';

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((pre) => !pre);
  return (
    <AccordionWrapper>
      <Title onClick={toggle}>
        {title}
        {isOpen ? <CloseIcon /> : <OpenIcon />}
      </Title>
      <BodyWrapper isOpen={isOpen}>
        <Body>{children}</Body>
      </BodyWrapper>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem;
  border-radius: 0.5rem;
`;
const Title = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;

  /* font */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.6px;
`;
const BodyWrapper = styled.div<{ isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.gray[200]};
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  /* 
                    TODO: 애니메이션 인사이트가 필요합니다.... 
  제가 알아본 바로는 height의 높이값을 지정해 주지않으면 애니메이션이 안먹는다고
  알고 있어 해당 요소는 높이값을 고정할 수 없으므로 이걸 동적으로 받으려면 JS를 사용해서 직접 
  값을 주입해야 하는건가? 일단 %와 auto사용은 불가능...
  */
  /* transition: height 0.3s ease-in-out; */
  overflow: hidden;

  /* font */

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 175% */
  letter-spacing: -0.6px;
`;

const Body = styled.div`
  margin-top: 1rem;
`;

export default Accordion;
