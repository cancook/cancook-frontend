import styled from '@emotion/styled';
import React from 'react';

const Test = () => {
  return (
    <TestContainer>
      <Compo style={{ background: 'red' }}>
        <h1>1</h1>
      </Compo>
      <Compo style={{ background: 'orange' }}>
        <h1>2</h1>
      </Compo>
      <Compo style={{ background: 'yellow' }}>
        <h1>3</h1>
      </Compo>
      <Compo style={{ background: 'green' }}>
        <h1>4</h1>
      </Compo>
    </TestContainer>
  );
};

export default Test;

const TestContainer = styled.div`
  background-color: red;
  scroll-snap-type: y mandatory;
`;

const Compo = styled.div`
  height: calc(100vh - 6rem);
  scroll-snap-align: end;
  color: white;
  font-size: 10rem;
`;
