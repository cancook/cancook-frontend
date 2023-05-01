import styled from '@emotion/styled';
import { colors } from '@/styles/theme';

const ColorBox = styled.div`
  background-color: ${(props) => props.color};
  width: 7.5rem;
  height: 7.5rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DarkPalette = () =>
  Object.entries(colors).map(([color, values]) => (
    <Layout key={values.toString()}>
      {Object.entries(values).map(([num, hex]) => (
        <ColorBox color={hex} key={hex}>
          {color}
          {num}
          <br />
          {hex}
        </ColorBox>
      ))}
    </Layout>
  ));

const DarkPaletteStory = {
  title: 'DesignSystem/DarkColorPalette',
  component: DarkPalette
};
export default DarkPaletteStory;
