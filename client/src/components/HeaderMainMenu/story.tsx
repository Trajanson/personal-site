import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import HeaderMainMenu from '.';

const stories = storiesOf('HeaderMainMenu', module);

const Wrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  position: absolute;
`;

stories.add('HeaderMainMenu', () => (
  <Wrapper>
    <HeaderMainMenu />
  </Wrapper>
));
