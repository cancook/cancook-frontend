import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ArrowUpIcon from '@/public/svg/arrow-up.svg';

type AccordionProps = {
  title: string | ReactNode;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const bodyRef = useRef<HTMLDivElement>(null);
  const toggle = () => setIsOpen((pre) => !pre);

  useEffect(() => {
    setHeight(bodyRef.current?.getBoundingClientRect().height || 0);
  }, [children]);

  return (
    <AccordionWrapper>
      <Title onClick={toggle} className="accordion-title">
        {title}
        <ArrowIcon isOpen={isOpen} />
      </Title>
      <BodyWrapper isOpen={isOpen} height={height}>
        <Body ref={bodyRef}>{children}</Body>
      </BodyWrapper>
    </AccordionWrapper>
  );
};

const ArrowIcon = styled(ArrowUpIcon)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.3s ease-in-out;
`;

const AccordionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem;
  border-radius: 0.5rem;
  white-space: pre-line;
`;

const Title = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;

  ${({ theme }) => theme.font.label.lg}
`;
const BodyWrapper = styled.div<{ isOpen: boolean; height: number }>`
  color: ${({ theme }) => theme.colors.gray[200]};
  max-height: ${({ isOpen, height }) => (isOpen ? `${height}px` : 0)};
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
`;

const Body = styled.div`
  padding-top: 1rem;
`;

export default Accordion;
