import React from 'react';
import { storiesOf } from '@storybook/react';

import HelloComponent from '.';

const stories = storiesOf('Hello Component', module);

stories.add('Demo', () => (
  <HelloComponent />
));
