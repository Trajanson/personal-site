import React, { SFC } from 'react';

export interface Props {

};

type HelloComponent = SFC<Props>;
const HelloComponent: HelloComponent = (props: Props) => {
  return (
    <div>
      Hello World!
    </div>
  );
}
export default HelloComponent;
