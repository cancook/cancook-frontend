import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type CollapseProps = {
  children: ReactNode;
};

const Collapse = ({ children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const bodyRef = useRef<HTMLDivElement>(null);
  const toggle = () => setIsOpen((pre) => !pre);

  useEffect(() => {
    setHeight(bodyRef.current?.getBoundingClientRect().height || 0);
  }, [children]);

  return (
    <Container>
      <Description isOpen={isOpen} height={height}>
        <div ref={bodyRef}>{children}</div>
      </Description>
      <SeeMore onClick={toggle}>
        <span>더보기</span>
      </SeeMore>
    </Container>
  );
};

export default Collapse;

const Container = styled.div`
  margin-bottom: 2.5rem;
`;

const Description = styled.div<{ isOpen: boolean; height: number }>`
  ${({ theme }) => theme.font.body.lg};
  white-space: pre-line;

  height: 100%;
  max-height: ${({ isOpen, height }) => (isOpen ? `${height}px` : '5.25rem')};
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
`;

const SeeMore = styled.div`
  cursor: pointer;
`;
