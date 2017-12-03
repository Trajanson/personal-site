import React from 'react';
import { mount } from 'enzyme';

import HelloComponent from '..';

describe('<HelloComponent />', () => {
  it('successfully renders', () => {
    const rendered = mount(
      <HelloComponent />
    );

    expect(rendered).toMatchSnapshot();
  });
});
