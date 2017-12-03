import React, { SFC } from 'react';

import styled from 'styled-components';

import HeaderLogo from 'components/HeaderLogo';
import HeaderNavMenu from 'components/HeaderNavMenu';

export interface Props {
};

const Wrapper = styled.div`
  background-color: rgba(12,12,13,0.9);

  height: 65px;
  top: 0px;
  overflow: visible;

  padding-top: 0px;
  padding-bottom: 0px;
  max-width: 100%;
  position: relative;
  padding-left: 40px;
  padding-right: 40px;

`;

type Header = SFC<Props>;
const Header: Header = (props: Props) => {

  return (
    <Wrapper>
      <HeaderLogo />
      <HeaderNavMenu />
    </Wrapper>
  );
}
export default Header;
