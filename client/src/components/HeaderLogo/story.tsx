import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import HeaderLogo from '.';

const stories = storiesOf('HeaderLogo', module);

const Wrapper = styled.div`
  width: 100%;
`;

stories.add('HeaderLogo', () => (
  <Wrapper>
    <HeaderLogo />
  </Wrapper>
));
