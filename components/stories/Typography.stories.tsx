import styled from '@emotion/styled';
import { font } from '@/styles/theme';
import { SerializedStyles } from '@emotion/react';

const Naming = styled.p<{ fontStyle: SerializedStyles }>`
  color: white;
  ${({ fontStyle }) => fontStyle};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Typography = () =>
  Object.entries(font).map(([name, sizes]) => (
    <Layout key={sizes.toString()}>
      {Object.entries(sizes).map(([size, style]) => (
        <Naming fontStyle={style} key={style.toString()}>
          {`${name} ${size}`}
        </Naming>
      ))}
    </Layout>
  ));

const TypographyStory = {
  title: 'DesignSystem/Typography',
  component: Typography
};
export default TypographyStory;
