import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import HeaderNavMenu from '.';

const stories = storiesOf('HeaderNavMenu', module);

const Wrapper = styled.div`
  width: 100%;
`;

stories.add('HeaderNavMenu', () => (
  <Wrapper>
    <HeaderNavMenu />
  </Wrapper>
));
