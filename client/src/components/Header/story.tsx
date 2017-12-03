import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Header from '.';

const stories = storiesOf('Header', module);

const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  position: absolute;
`;


stories.add('Header', () => (
  <Wrapper>
    <Header />
  </Wrapper>
));
