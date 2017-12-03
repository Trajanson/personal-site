import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import HeaderNavMenuTopItem from '.';

const stories = storiesOf('HeaderNavMenuTopItem', module);

const Wrapper = styled.div`
  width: 100%;
`;

stories.add('HeaderNavMenuTopItem', () => (
  <Wrapper>
    <HeaderNavMenuTopItem
      title="THEODERIK"
    />
  </Wrapper>
));
