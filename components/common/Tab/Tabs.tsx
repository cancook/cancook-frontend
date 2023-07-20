import styled from '@emotion/styled';
import { useState } from 'react';

type TabsProps = {
  children: React.ReactNode;
};

export const Tabs = ({ children }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  // children 이 null 인 경우
  if (children === null) return <></>;

  //   Tab 이 한 개 밖에 없는 경우, Tab을 그대로 보여준다.
  if (children instanceof Array === false) {
    return <TabsContainer>{children}</TabsContainer>;
  }

  if (children instanceof Array) {
    return (
      <TabsContainer>
        <NavContainer>
          {children.map((elem, idx) => (
            <NavItem
              key={idx}
              selected={idx === currentTab}
              onClick={() => setCurrentTab(idx)}
            >
              {elem.props.title}
            </NavItem>
          ))}
        </NavContainer>
        <TabContent>{children[currentTab].props.children}</TabContent>
      </TabsContainer>
    );
  }

  return <></>;
};

const TabsContainer = styled.div`
  display: flex;
  color: white;
  /* height: 100px; */
`;

/** Nav Link */
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.44rem;
  overflow: scroll;
  padding: 0 1rem;

  ${({ theme }) => theme.screen.tablet} {
    padding: 0 1.5rem;
  }
`;

const NavItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.25rem;
  height: 2.75rem;

  transition: border-bottom 0.2s ease-in;

  border-bottom: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.yellow[400] : '#00000000'};

  ${({ theme }) => theme.font.title.sm};

  color: ${({ selected, theme }) =>
    selected ? theme.colors.yellow[400] : theme.colors.gray[400]};
`;

/** Content Tab */
const TabContent = styled.div`
  overflow: scroll;
`;
