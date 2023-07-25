// Type checking 용도로만 있는 컴포넌트

import styled from '@emotion/styled';

export type TabProps = {
  title: string;
  children: React.ReactNode;
};

export const Tab = ({ title, children }: TabProps) => {
  return <TabContainer>{children}</TabContainer>;
};

const TabContainer = styled.div`
  color: white;
`;
