import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import HeaderMainMenuItem from '.';

const stories = storiesOf('HeaderMainMenuItem', module);

const Wrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  position: absolute;
`;

stories.add('HeaderMainMenuItem', () => (
  <Wrapper>
    <HeaderMainMenuItem
      title="THEODERIK"
    />
  </Wrapper>
));
