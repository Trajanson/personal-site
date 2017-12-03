import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import HeaderNavMenuTopItemButton from '.';

const stories = storiesOf('HeaderNavMenuTopItemButton', module);

const Wrapper = styled.div`
  width: 100%;
`;

stories.add('HeaderNavMenuTopItemButton', () => (
  <Wrapper>
    <HeaderNavMenuTopItemButton />
  </Wrapper>
));
